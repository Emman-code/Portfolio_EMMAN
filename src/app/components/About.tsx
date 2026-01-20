import { motion } from 'motion/react';
import { Code2, Brain, Database, TrendingUp } from 'lucide-react';

export function About() {
  const highlights = [
    {
      icon: Brain,
      title: 'AI & Machine Learning',
      description: 'Building and experimenting with ML models for real-world problems',
    },
    {
      icon: Database,
      title: 'Data Science',
      description: 'Working with data to find patterns, trends, and useful insights',
    },
    {
      icon: Code2,
      title: 'Full-Stack Development',
      description: 'Developing simple, functional web apps that support ML systems',
    },
    {
      icon: TrendingUp,
      title: 'Data Analytics',
      description: 'Analyzing data to understand behavior and improve decisions',
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
            <span className="text-sm" style={{ color: '#00E5FF' }}>About Me</span>
          </div>
          <h2 className="text-4xl md:text-5xl mb-4 font-bold tracking-tight">
            Who <span style={{ color: '#00E5FF' }}>I Am</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <p className="text-zinc-300 text-lg leading-[1.75] max-w-xl">
              I’m Emmanuel Joshua, an AI & ML student focused on building practical,
              data-driven systems. I enjoy working with real datasets, experimenting
              with models, and learning by building projects that solve real problems.
            </p>

            <p className="text-zinc-400">

            </p>
            <p className="text-zinc-400">

            </p>

            <div className="flex gap-4 pt-4">
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 rounded-full"
                style={{ backgroundColor: '#00E5FF', color: '#000' }}
              >
                Get In Touch
              </motion.a>
              <motion.a
                href="#projects"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 border rounded-full transition-colors"
                style={{ borderColor: '#00E5FF' }}
              >
                View Work
              </motion.a>
            </div>
          </motion.div>

          <div className="grid grid-cols-2 gap-4">
            {highlights.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
                whileHover={{ scale: 1.05 }}
                className="p-6 bg-zinc-900/50 rounded-2xl border border-zinc-800 backdrop-blur-sm hover:border-[#00E5FF]/50 transition-colors"
              >
                <item.icon className="w-8 h-8 mb-4" style={{ color: '#00E5FF' }} />
                <h3 className="text-lg mb-2">{item.title}</h3>
                <p className="text-sm text-zinc-400">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}