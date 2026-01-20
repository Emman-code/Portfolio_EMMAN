import { motion } from 'motion/react';
import { Briefcase } from 'lucide-react';

export function Experience() {
  const experiences = [
    {
      period: 'April 2024 – Present',
      role: 'Data Scientist Intern',
      company: 'Intellipaat',
      description:
        'Assisted in data preprocessing, feature engineering, and exploratory data analysis to improve model performance.',
      achievements: [
        'Developed machine learning models for predictive analytics, improving decision-making processes.',
        'Worked with large datasets, performing data cleaning and transformation using Python, Pandas, and SQL.',
        'Built and optimized regression and classification models using Scikit-Learn and TensorFlow.',
        'Created interactive data visualizations using Matplotlib and Seaborn to communicate insights effectively.',
        'Collaborated with cross-functional teams to implement AI-driven solutions for business problems',
      ],
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
            <span className="text-sm" style={{ color: '#00E5FF' }}>Experience</span>
          </div>
          <h2 className="text-4xl md:text-5xl mb-4 font-bold tracking-tight">
            My <span style={{ color: '#00E5FF' }}>Journey</span>
          </h2>
        </motion.div>

        <div className="max-w-4xl mx-auto relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-px bg-[#00E5FF]/30 hidden md:block" />

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
                className="relative"
              >
                {/* Timeline dot */}
                <div className="absolute left-8 top-8 w-px h-full bg-zinc-900 -translate-x-1/2 hidden md:block" />
                <motion.div
                  whileHover={{ scale: 1.2 }}
                  className="absolute left-8 top-8 w-4 h-4 rounded-full -translate-x-1/2 z-10 hidden md:block"
                  style={{ backgroundColor: '#00E5FF' }}
                />

                <div className="md:ml-24 bg-zinc-900/30 backdrop-blur-sm rounded-2xl p-8 border border-zinc-800 hover:border-[#00E5FF]/50 transition-colors">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="p-3 rounded-xl" style={{ backgroundColor: 'rgba(0, 229, 255, 0.1)' }}>
                      <Briefcase className="w-6 h-6" style={{ color: '#00E5FF' }} />
                    </div>
                    <div className="flex-1">
                      <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                        <h3 className="text-2xl" style={{ color: '#00E5FF' }}>{exp.role}</h3>
                        <span className="px-3 py-1 bg-zinc-800/50 rounded-full text-sm text-zinc-400">
                          {exp.period}
                        </span>
                      </div>
                      <p className="text-zinc-300 mb-4">{exp.company}</p>
                      <p className="text-zinc-400 mb-4">{exp.description}</p>
                      <div className="space-y-2">
                        {exp.achievements.map((achievement, i) => (
                          <div key={i} className="flex items-start gap-2">
                            <div className="w-1.5 h-1.5 rounded-full mt-2" style={{ backgroundColor: '#00E5FF' }} />
                            <p className="text-sm text-zinc-400 flex-1">{achievement}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}