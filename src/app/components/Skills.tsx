import { motion } from 'motion/react';
import { Code2, Brain, Database, Wrench } from 'lucide-react';

export function Skills() {
  const skillCategories = [
    {
      icon: Code2,
      title: 'Languages',
      skills: [
        { name: 'Python', level: 95 },
        { name: 'SQL', level: 90 },
        { name: 'C', level: 80 },
        { name: 'JavaScript', level: 75 },
      ],
    },
    {
      icon: Brain,
      title: 'Frameworks & Libraries',
      skills: [
        { name: 'TensorFlow/Keras', level: 90 },
        { name: 'PyTorch', level: 85 },
        { name: 'Scikit-Learn', level: 95 },
        { name: 'Pandas/Numpy', level: 95 },
        { name: 'XLM-RoBERTa', level: 85 },
      ],
    },
    {
      icon: Database,
      title: 'Tools & Viz',
      skills: [
        { name: 'Tableau', level: 85 },
        { name: 'Power BI', level: 80 },
        { name: 'Excel', level: 90 },
        { name: 'Matplotlib/Seaborn', level: 90 },
        { name: 'Streamlit', level: 85 },
      ],
    },
    {
      icon: Wrench,
      title: 'Platforms & Others',
      skills: [
        { name: 'Jupyter', level: 95 },
        { name: 'AWS', level: 70 },
        { name: 'Hugging Face', level: 85 },
        { name: 'Git/GitHub', level: 85 },
        { name: 'Prompt Engineering', level: 90 },
      ],
    },
  ];

  const expertise = [
    'Problem Solving',
    'Design Thinking',
    'Team Collaboration',
    'Communication',
    'Typewriting',
    'Data Preprocessing',
    'Feature Engineering',
    'Predictive Analytics',
    'Data Visualization',
    'Machine Learning',
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
            <span className="text-sm" style={{ color: '#00E5FF' }}>Skills</span>
          </div>
          <h2 className="text-4xl md:text-5xl mb-4 font-bold tracking-tight">
            My <span style={{ color: '#00E5FF' }}>Expertise</span>
          </h2>
        </motion.div>

        <div className="max-w-6xl mx-auto space-y-12">
          {/* Skill bars */}
          <div className="grid md:grid-cols-2 gap-8">
            {skillCategories.map((category, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
                className="bg-zinc-900/30 backdrop-blur-sm rounded-2xl p-8 border border-zinc-800"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 rounded-xl" style={{ backgroundColor: 'rgba(0, 229, 255, 0.1)' }}>
                    <category.icon className="w-6 h-6" style={{ color: '#00E5FF' }} />
                  </div>
                  <h3 className="text-xl">{category.title}</h3>
                </div>

                <div className="space-y-4">
                  {category.skills.map((skill, i) => (
                    <div key={i}>
                      <div className="flex justify-between mb-2">
                        <span className="text-zinc-300">{skill.name}</span>
                        <span style={{ color: '#00E5FF' }}>{skill.level}%</span>
                      </div>
                      <div className="h-2 bg-zinc-800/50 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, delay: 0.2 }}
                          className="h-full rounded-full"
                          style={{ backgroundColor: '#00E5FF' }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Expertise tags */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-zinc-900/30 backdrop-blur-sm rounded-2xl p-8 border border-zinc-800"
          >
            <h3 className="text-2xl mb-6 text-center">Areas of Expertise</h3>
            <div className="flex flex-wrap gap-3 justify-center">
              {expertise.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.05 * index }}
                  whileHover={{ scale: 1.05 }}
                  className="px-4 py-2 border rounded-full text-zinc-300 transition-colors"
                  style={{
                    backgroundColor: 'rgba(0, 229, 255, 0.1)',
                    borderColor: 'rgba(0, 229, 255, 0.3)'
                  }}
                >
                  {item}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}