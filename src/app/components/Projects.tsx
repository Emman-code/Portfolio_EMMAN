import { motion } from 'motion/react';
import { ExternalLink, Github } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from './ui/carousel';

export function Projects() {
  const projects = [
    {
      title: 'Tanglish Hate Speech Detector',
      category: 'NLP & Deep Learning',
      description: 'Built a real-time web app to detect hate and offensive content in Tanglish (Tamil-English mix) using XLM-RoBERTa.',
      tech: ['XLM-RoBERTa', 'Hugging Face', 'Python', 'Streamlit'],
      image: 'https://images.unsplash.com/photo-1555421689-d68471e189f2?w=800&q=80',
      github: 'https://github.com/Emman-code/Tanglish-Hatespeech-Classifier',
      link: 'https://github.com/Emman-code/Tanglish-Hatespeech-Classifier',
    },
    {
      title: 'Real Time Sentiment Analysis',
      category: 'NLP & Social Media',
      description: 'Real-time social media sentiment analyzer classifying comments as Positive, Negative, or Neutral using VADER on 1.6M tweets.',
      tech: ['VADER', 'Python', 'Sentiment140', 'Visualization'],
      image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&q=80',
      github: 'https://github.com/Emman-code/Real_time_Sentiment_Analysis-Emman',
      link: 'https://github.com/Emman-code/Real_time_Sentiment_Analysis-Emman',
    },
    {
      title: 'Walmart Capstone Project',
      category: 'Time Series Analysis',
      description: 'Forecasted Walmart store sales using historical data and time series analysis techniques like ARIMA and SARIMA.',
      tech: ['ARIMA', 'SARIMA', 'Python', 'Time Series'],
      image: 'https://images.unsplash.com/photo-1556740758-90de374c12ad?w=800&q=80',
      github: 'https://github.com/Emman-code/Emman-Projects/blob/main/Wallmart_Emman.ipynb',
      link: 'https://github.com/Emman-code/Emman-Projects/blob/main/Wallmart_Emman.ipynb',
    },
    {
      title: 'COVID-19 Trend Analysis',
      category: 'Data Analysis',
      description: 'Analyzed global COVID-19 death trends and investigated impact factors like population density and healthcare access.',
      tech: ['Python', 'Pandas', 'Seaborn', 'Data Vis'],
      image: 'https://images.unsplash.com/photo-1584036561566-b93a9499cb6d?w=800&q=80',
      github: 'https://github.com/Emman-code/Emman-Projects/blob/main/Covid19_Emman.ipynb',
      link: 'https://github.com/Emman-code/Emman-Projects/blob/main/Covid19_Emman.ipynb',
    },
    {
      title: 'Netflix Recommendation Project',
      category: 'Data Analysis',
      description: 'Analyzed Netflix viewing patterns to uncover trends in genre popularity and user preferences.',
      tech: ['Python', 'Data Wrangling', 'Matplotlib', 'Seaborn'],
      image: 'https://images.unsplash.com/photo-1574375927938-d5a98e8ffe85?w=800&q=80',
      github: 'https://github.com/Emman-code/Emman-Projects/blob/main/Netflix_Emman.ipynb',
      link: 'https://github.com/Emman-code/Emman-Projects/blob/main/Netflix_Emman.ipynb',
    },
    {
      title: 'Customer Churn Prediction',
      category: 'Machine Learning',
      description: 'Predicts customer churn likelihood based on behavioral and demographic factors using ML models.',
      tech: ['Python', 'Scikit-learn', 'Streamlit', 'Hugging Face'],
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80',
      link: 'https://huggingface.co/spaces/EmmanuelJoshua/Customer_churn_Prediction',
    },
    {
      title: 'SQL - Querying Large Relational DB',
      category: 'Database Management',
      description: 'Analyzed customer and sales data from AdventureWorks database using complex SQL queries.',
      tech: ['SQL', 'SQL Server', 'Data Analysis'],
      image: 'https://images.unsplash.com/photo-1544383835-bda2bc66a55d?w=800&q=80',
      github: 'https://github.com/Emman-code/Emman-Projects/blob/main/PROJECT_1.SQL',
      link: 'https://github.com/Emman-code/Emman-Projects/blob/main/PROJECT_1.SQL',
    },
  ];

  return (
    <div className="min-h-screen flex items-center py-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(0,229,255,0.05),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(0,229,255,0.05),transparent_50%)]" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-block px-4 py-2 bg-zinc-900 rounded-full border border-[#00E5FF]/30 mb-4">
            <span className="text-sm" style={{ color: '#00E5FF' }}>Projects</span>
          </div>
          <h2 className="text-4xl md:text-5xl mb-4 font-bold tracking-tight">
            Featured <span style={{ color: '#00E5FF' }}>Work</span>
          </h2>
          <p className="text-zinc-400 max-w-2xl mx-auto">
            A showcase of my recent projects in AI, machine learning, and data science
          </p>
        </motion.div>

        <div className="px-12 max-w-7xl mx-auto">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent>
              {projects.map((project, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3 p-4">
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="h-full group bg-zinc-900/30 backdrop-blur-sm rounded-2xl overflow-hidden border border-zinc-800 hover:border-[#00E5FF]/50 transition-all flex flex-col"
                  >
                    <div className="relative h-48 overflow-hidden bg-zinc-950 shrink-0">
                      <ImageWithFallback
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/50 to-transparent opacity-60" />
                      <div className="absolute top-4 right-4 px-3 py-1 backdrop-blur-sm rounded-full text-xs" style={{ backgroundColor: 'rgba(0, 229, 255, 0.9)', color: '#000' }}>
                        {project.category}
                      </div>
                    </div>

                    <div className="p-6 flex flex-col flex-1">
                      <h3 className="text-xl mb-2 transition-colors font-medium line-clamp-1" title={project.title}>
                        {project.title}
                      </h3>
                      <p className="text-zinc-400 text-sm mb-4 line-clamp-3 flex-1">{project.description}</p>

                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.tech.map((tech, i) => (
                          <span
                            key={i}
                            className="px-2 py-1 bg-zinc-800/50 rounded text-xs text-zinc-300"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>

                      <div className="flex gap-3 mt-auto">
                        <motion.button
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className="flex-1 py-2 px-4 rounded-lg flex items-center justify-center gap-2 text-sm"
                          style={{ backgroundColor: '#00E5FF', color: '#000' }}
                          onClick={() => window.open(project.link, '_blank')}
                        >
                          <ExternalLink className="w-4 h-4" />
                          View
                        </motion.button>
                        {project.github && (
                          <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="py-2 px-4 border border-zinc-700 rounded-lg hover:bg-zinc-800/50 transition-colors"
                            onClick={() => window.open(project.github, '_blank')}
                          >
                            <Github className="w-4 h-4" />
                          </motion.button>
                        )}
                      </div>
                    </div>
                  </motion.div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-[-1rem] md:left-[-3rem] bg-black/50 border-zinc-700 hover:bg-zinc-800 hover:text-[#00E5FF]" />
            <CarouselNext className="right-[-1rem] md:right-[-3rem] bg-black/50 border-zinc-700 hover:bg-zinc-800 hover:text-[#00E5FF]" />
          </Carousel>
        </div>
      </div>
    </div>
  );
}