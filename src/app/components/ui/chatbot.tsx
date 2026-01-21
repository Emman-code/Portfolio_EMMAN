import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MessageCircle, X, Send, Loader2 } from 'lucide-react';

interface Message {
    role: 'user' | 'assistant';
    content: string;
}

const OPENROUTER_API_KEY = import.meta.env.VITE_OPENROUTER_API_KEY;

const SYSTEM_PROMPT = `You are Emmanuel's AI assistant - a helpful chatbot embedded in Emmanuel Joshua's portfolio website. Your ONLY purpose is to provide information about Emmanuel Joshua, his projects, skills, experience, and how to contact him.

ABOUT EMMANUEL JOSHUA:
- Name: Emmanuel Joshua
- Role: Data Scientist, AI Engineer, ML Engineer
- Education: B.Tech in Artificial Intelligence and Machine Learning at SNS College of Technology, Coimbatore (Sept 2024 - Present)
- Previous Education: High School at Baptist Academy, Coimbatore (87%)
- Location: Coimbatore, India
- Email: emman.cnr@gmail.com
- Phone: +91 95973 21862
- LinkedIn: https://www.linkedin.com/in/emmanuel-joshua-ej/
- GitHub: https://github.com/Emman-code
- Instagram: https://www.instagram.com/__.yoix.__/

EXPERIENCE:
- Data Scientist Intern at Intellipaat (April 2024 - Present)
  * Data preprocessing, feature engineering, and exploratory data analysis
  * Developed ML models for predictive analytics
  * Worked with large datasets using Python, Pandas, and SQL
  * Built regression and classification models with Scikit-Learn and TensorFlow
  * Created data visualizations using Matplotlib and Seaborn
  * Collaborated on AI-driven solutions for business problems

TECHNICAL SKILLS:
Languages: Python (95%), SQL (90%), C (80%), JavaScript (75%)
Frameworks & Libraries: TensorFlow/Keras (90%), PyTorch (85%), Scikit-Learn (95%), Pandas/Numpy (95%), XLM-RoBERTa (85%)
Tools & Visualization: Tableau (85%), Power BI (80%), Excel (90%), Matplotlib/Seaborn (90%), Streamlit (85%)
Platforms: Jupyter (95%), AWS (70%), Hugging Face (85%), Git/GitHub (85%)
Expertise: Problem Solving, Design Thinking, Team Collaboration, Communication, Data Preprocessing, Feature Engineering, Predictive Analytics, Data Visualization, Machine Learning, Prompt Engineering

KEY PROJECTS:
1. Tanglish Hate Speech Detector - Real-time web app detecting hate/offensive content in Tamil-English mix using XLM-RoBERTa and Streamlit
2. Real Time Sentiment Analysis - Social media sentiment analyzer using VADER on 1.6M tweets
3. Walmart Capstone Project - Sales forecasting using ARIMA and SARIMA time series analysis
4. COVID-19 Trend Analysis - Global death trend analysis with Python, Pandas, Seaborn
5. Netflix Recommendation Project - Viewing pattern analysis for genre popularity trends
6. Customer Churn Prediction - ML model predicting customer churn using Scikit-learn and Streamlit
7. SQL - Querying Large Relational DB - Complex SQL queries on AdventureWorks database

CERTIFICATIONS (Selected):
- AWS Solutions Architecture Job Simulation (Forage)
- Data Science Architect Masters Program (Intellipaat)
- Executive PG Certification in DS & AI (IIT Roorkee)
- Artificial Intelligence and Machine Learning (Intellipaat)
- Multiple IBM Design Thinking certifications

IMPORTANT RULES:
1. ONLY answer questions about Emmanuel Joshua - his background, projects, skills, experience, education, or contact information
2. If asked about anything else (weather, general knowledge, other people, etc.), politely redirect: "I'm Emmanuel's AI assistant and I can only help with questions about Emmanuel, his projects, skills, and experience. How can I help you learn more about Emmanuel?"
3. Be friendly, professional, and enthusiastic about Emmanuel's work
4. Keep responses concise but informative (2-4 sentences typically)
5. When listing projects or skills, be specific and highlight key technologies
6. Always encourage users to reach out via the contact information if they want to connect

Remember: You represent Emmanuel professionally. Be helpful, accurate, and stay on topic!`;

const STARTER_PROMPTS = [
    "Who are you?",
    "What projects have you built?",
    "What are your strongest skills?",
    "How can I contact you?"
];

export function Chatbot() {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState<Message[]>([
        {
            role: 'assistant',
            content: "👋 Hi! I'm Emmanuel's AI assistant. I can tell you about Emmanuel's projects, skills, experience, and how to contact him. What would you like to know?"
        }
    ]);
    const [input, setInput] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const messagesEndRef = useRef<HTMLDivElement>(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages]);

    const sendMessage = async (content: string) => {
        if (!content.trim() || isLoading) return;

        const userMessage: Message = { role: 'user', content };
        setMessages(prev => [...prev, userMessage]);
        setInput('');
        setIsLoading(true);

        try {
            // Add timeout to prevent hanging
            const controller = new AbortController();
            const timeoutId = setTimeout(() => controller.abort(), 30000); // 30 second timeout

            const response = await fetch('https://openrouter.ai/api/v1/chat/completions', {
                method: 'POST',
                headers: {
                    'Authorization': `Bearer ${OPENROUTER_API_KEY}`,
                    'HTTP-Referer': window.location.origin,
                    'X-Title': 'Emmanuel Joshua Portfolio',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    model: 'qwen/qwen3-coder:free',
                    messages: [
                        { role: 'system', content: SYSTEM_PROMPT },
                        ...messages.map(m => ({ role: m.role, content: m.content })),
                        { role: 'user', content }
                    ]
                }),
                signal: controller.signal
            });

            clearTimeout(timeoutId);

            if (!response.ok) {
                const errorData = await response.json().catch(() => ({}));
                console.error('API Error Response:', response.status, errorData);
                throw new Error(`API returned ${response.status}: ${JSON.stringify(errorData)}`);
            }

            const data = await response.json();
            console.log('API Response:', data);

            if (!data.choices || !data.choices[0] || !data.choices[0].message) {
                throw new Error('Invalid response format from API');
            }

            const assistantMessage: Message = {
                role: 'assistant',
                content: data.choices[0].message.content
            };

            setMessages(prev => [...prev, assistantMessage]);
        } catch (error: any) {
            console.error('Chatbot Error:', error);

            let errorMessage = "Sorry, I'm having trouble connecting right now. ";

            if (error.name === 'AbortError') {
                errorMessage += "The request timed out. ";
            } else if (error.message) {
                errorMessage += `Error: ${error.message}. `;
            }

            errorMessage += "Please try again or contact Emmanuel directly at emman.cnr@gmail.com";

            setMessages(prev => [...prev, {
                role: 'assistant',
                content: errorMessage
            }]);
        } finally {
            setIsLoading(false);
        }
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        sendMessage(input);
    };

    const handleStarterPrompt = (prompt: string) => {
        sendMessage(prompt);
    };

    return (
        <>
            {/* Floating Chat Button */}
            <motion.button
                onClick={() => setIsOpen(!isOpen)}
                className="fixed bottom-6 right-6 z-50 p-4 rounded-full shadow-2xl"
                style={{ backgroundColor: '#00E5FF' }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: 'spring', stiffness: 260, damping: 20 }}
            >
                <AnimatePresence mode="wait">
                    {isOpen ? (
                        <motion.div
                            key="close"
                            initial={{ rotate: -90, opacity: 0 }}
                            animate={{ rotate: 0, opacity: 1 }}
                            exit={{ rotate: 90, opacity: 0 }}
                        >
                            <X className="w-6 h-6 text-black" />
                        </motion.div>
                    ) : (
                        <motion.div
                            key="open"
                            initial={{ rotate: 90, opacity: 0 }}
                            animate={{ rotate: 0, opacity: 1 }}
                            exit={{ rotate: -90, opacity: 0 }}
                        >
                            <MessageCircle className="w-6 h-6 text-black" />
                        </motion.div>
                    )}
                </AnimatePresence>
            </motion.button>

            {/* Chat Window */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: 20, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 20, scale: 0.95 }}
                        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                        className="fixed bottom-24 right-6 z-50 w-96 h-[600px] bg-zinc-900/95 backdrop-blur-md rounded-2xl shadow-2xl border border-zinc-800 flex flex-col overflow-hidden"
                    >
                        {/* Header */}
                        <div className="p-4 border-b border-zinc-800 flex items-center justify-between" style={{ backgroundColor: 'rgba(0, 229, 255, 0.1)' }}>
                            <div className="flex items-center gap-2">
                                <div className="w-2 h-2 rounded-full" style={{ backgroundColor: '#00E5FF' }} />
                                <h3 className="font-semibold" style={{ color: '#00E5FF' }}>Emmanuel's AI</h3>
                            </div>
                            <button
                                onClick={() => setIsOpen(false)}
                                className="text-zinc-400 hover:text-white transition-colors"
                            >
                                <X className="w-5 h-5" />
                            </button>
                        </div>

                        {/* Messages */}
                        <div className="flex-1 overflow-y-auto p-4 space-y-4">
                            {messages.map((message, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
                                >
                                    <div
                                        className={`max-w-[80%] p-3 rounded-2xl ${message.role === 'user'
                                            ? 'bg-zinc-800 text-white rounded-br-sm'
                                            : 'bg-zinc-950 text-zinc-300 rounded-bl-sm border border-zinc-800'
                                            }`}
                                    >
                                        <p className="text-sm whitespace-pre-wrap">{message.content}</p>
                                    </div>
                                </motion.div>
                            ))}

                            {/* Typing Indicator */}
                            {isLoading && (
                                <motion.div
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className="flex justify-start"
                                >
                                    <div className="bg-zinc-950 border border-zinc-800 p-3 rounded-2xl rounded-bl-sm">
                                        <div className="flex gap-1">
                                            <motion.div
                                                className="w-2 h-2 rounded-full bg-zinc-600"
                                                animate={{ y: [0, -5, 0] }}
                                                transition={{ duration: 0.6, repeat: Infinity, delay: 0 }}
                                            />
                                            <motion.div
                                                className="w-2 h-2 rounded-full bg-zinc-600"
                                                animate={{ y: [0, -5, 0] }}
                                                transition={{ duration: 0.6, repeat: Infinity, delay: 0.2 }}
                                            />
                                            <motion.div
                                                className="w-2 h-2 rounded-full bg-zinc-600"
                                                animate={{ y: [0, -5, 0] }}
                                                transition={{ duration: 0.6, repeat: Infinity, delay: 0.4 }}
                                            />
                                        </div>
                                    </div>
                                </motion.div>
                            )}

                            {/* Starter Prompts (show only if first message) */}
                            {messages.length === 1 && (
                                <div className="space-y-2">
                                    {STARTER_PROMPTS.map((prompt, index) => (
                                        <motion.button
                                            key={index}
                                            initial={{ opacity: 0, x: -20 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            transition={{ delay: index * 0.1 }}
                                            onClick={() => handleStarterPrompt(prompt)}
                                            className="w-full text-left p-3 bg-zinc-950 hover:bg-zinc-800 border border-zinc-800 rounded-lg text-sm text-zinc-300 transition-colors"
                                            style={{ borderColor: 'rgba(0, 229, 255, 0.2)' }}
                                        >
                                            {prompt}
                                        </motion.button>
                                    ))}
                                </div>
                            )}

                            <div ref={messagesEndRef} />
                        </div>

                        {/* Input */}
                        <form onSubmit={handleSubmit} className="p-4 border-t border-zinc-800">
                            <div className="flex gap-2">
                                <input
                                    type="text"
                                    value={input}
                                    onChange={(e) => setInput(e.target.value)}
                                    placeholder="Ask about Emmanuel..."
                                    disabled={isLoading}
                                    className="flex-1 px-4 py-2 bg-zinc-950 border border-zinc-800 rounded-lg text-white placeholder-zinc-500 focus:outline-none focus:border-[#00E5FF]/50 transition-colors disabled:opacity-50"
                                />
                                <button
                                    type="submit"
                                    disabled={isLoading || !input.trim()}
                                    className="p-2 rounded-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                                    style={{ backgroundColor: '#00E5FF' }}
                                >
                                    {isLoading ? (
                                        <Loader2 className="w-5 h-5 text-black animate-spin" />
                                    ) : (
                                        <Send className="w-5 h-5 text-black" />
                                    )}
                                </button>
                            </div>
                        </form>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
