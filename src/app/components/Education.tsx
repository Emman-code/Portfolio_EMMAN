import { motion } from 'motion/react';
import { GraduationCap, Award, ExternalLink } from 'lucide-react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from './ui/carousel';

export function Education() {
  const education = [
    {
      degree: 'B. Tech. Artificial Engineering and Machine Learning',
      institution: 'SNS College of Technology, Coimbatore',
      period: 'September 2024 – Present',
      description: 'Pursuing Bachelor of Technology in AI and ML.',
      achievements: [],
    },
    {
      degree: 'High School',
      institution: 'Baptist Academy, Coimbatore',
      period: 'June 2023 – Mar 2024',
      description: 'Completed High School Education.',
      achievements: [
        'Percentage: 87%',
      ],
    },
  ];

  const certifications = [
    {
      title: 'AWS - Solutions Architecture Job Simulation',
      issuer: 'Forage',
      date: 'Sep 2025',
      link: 'https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/pmnMSL4QiQ9JCgE3W/kkE9HyeNcw6rwCRGw_pmnMSL4QiQ9JCgE3W_fhGaEfGPfsd33Sc6o_1756825290625_completion_certificate.pdf',
    },
    {
      title: 'Data Science Architect Masters Program',
      issuer: 'Intellipaat',
      date: 'Jul 2025',
      link: 'https://lms.intellipaat.com/certificate-link/?Yz05Mzk1OSZ1PTI1MjAxNiZleHQ9MQ==',
      skills: 'Data Analytics, Data Science, AI',
    },
    {
      title: 'Data Science and Analytics',
      issuer: 'HP LIFE',
      date: 'Jul 2025',
      link: 'https://www.life-global.org/certificate/d26cb2ee-0d30-4d12-9305-8e7512dfc8a7',
    },
    {
      title: 'Deloitte Australia - Data Analytics Job Simulation',
      issuer: 'Forage',
      date: 'Jul 2025',
      link: 'https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/9PBTqmSxAf6zZTseP/io9DzWKe3PTsiS6GG_9PBTqmSxAf6zZTseP_fhGaEfGPfsd33Sc6o_1752752160921_completion_certificate.pdf',
      skills: 'Tableau, Excel, Data Modeling',
    },
    {
      title: 'TATA - Data Visualisation Job Simulation',
      issuer: 'Forage',
      date: 'Jul 2025',
      link: 'https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/ifobHAoMjQs9s6bKS/MyXvBcppsW2FkNYCX_ifobHAoMjQs9s6bKS_fhGaEfGPfsd33Sc6o_1753092189623_completion_certificate.pdf',
    },
    {
      title: 'Artificial Intelligence and Machine Learning',
      issuer: 'Intellipaat',
      date: 'Apr 2025',
      link: 'https://lms.intellipaat.com/certificate-link/?Yz1jdXMtOTEyNjQwJnU9MjUyMDE2JmV4dD0x',
      skills: 'ANN, RNN, CNN, NLP',
    },
    {
      title: 'Executive PG Certification in DS & AI',
      issuer: 'IIT Roorkee',
      date: 'Apr 2025',
      link: 'https://tih.iitr.ac.in/certificate/intellipaat/IPTIH2504208.jpg',
      skills: 'Data Science, AI, Power BI',
    },
    {
      title: 'Prompt Engineering and AI Agents with ChatGPT',
      issuer: 'LinkedIn',
      date: 'Mar 2025',
      link: 'https://www.linkedin.com/learning/certificates/16265678eb7e1007acb3dcd3c9a153618c75617f3a992a25e247e864aaeddb35',
    },
    {
      title: 'Data Science Course',
      issuer: 'Intellipaat',
      date: 'Feb 2025',
      link: 'https://lms.intellipaat.com/certificate-link/?Yz1jdXMtOTEyMzgwJnU9MjUyMDE2JmV4dD0x',
      skills: 'ML, Python, SQL, Statistics',
    },
    {
      title: 'Artificial Intelligence and Machine Learning',
      issuer: 'Techsnapie Solutions',
      date: 'Dec 2024',
    },
    {
      title: 'Effective Presentation',
      issuer: 'HP',
      date: 'Nov 2024',
    },
    {
      title: 'Enterprise Design Thinking - Team Essentials for AI',
      issuer: 'IBM',
      date: 'Nov 2024',
      link: 'https://www.credly.com/badges/42dd3320-2e9b-4bf2-9bed-85d1ff95b1de/linked_in_profile',
    },
    {
      title: 'Enterprise Design Thinking Co-Creator',
      issuer: 'IBM',
      date: 'Nov 2024',
      link: 'https://www.credly.com/badges/9a20b541-5c5b-4431-aacf-717d7ff67f9e/linked_in_profile',
    },
    {
      title: 'Intro to ML Engineer Career Path',
      issuer: 'Skillsoft',
      date: 'Oct 2024',
      link: 'https://skillsoft.digitalbadges.skillsoft.com/7de3300a-709d-4b52-a357-3f8aa392ba56',
    },
    {
      title: 'Enterprise Design Thinking Practitioner',
      issuer: 'IBM',
      date: 'Sep 2024',
      link: 'https://www.credly.com/badges/a5024398-88cd-49d9-84b8-6732169ce907/linked_in_profile',
    },
    {
      title: 'SQL Course',
      issuer: 'Intellipaat',
      date: 'Jul 2024',
      link: 'https://lms.intellipaat.com/certificate-link/?Yz1jdXMtOTEzMTY3JnU9MjUyMDE2JmV4dD0x',
      skills: 'SQL Server, SSMS',
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
            <span className="text-sm" style={{ color: '#00E5FF' }}>Education</span>
          </div>
          <h2 className="text-4xl md:text-5xl mb-4 font-bold tracking-tight">
            My <span style={{ color: '#00E5FF' }}>Education</span>
          </h2>
        </motion.div>

        <div className="max-w-5xl mx-auto space-y-16">
          {/* Education */}
          <div className="space-y-8">
            {education.map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
                className="bg-zinc-900/30 backdrop-blur-sm rounded-2xl p-8 border border-zinc-800 hover:border-[#00E5FF]/50 transition-colors"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl" style={{ backgroundColor: 'rgba(0, 229, 255, 0.1)' }}>
                    <GraduationCap className="w-8 h-8" style={{ color: '#00E5FF' }} />
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-wrap items-start justify-between gap-2 mb-2">
                      <div>
                        <h3 className="text-2xl mb-1">{edu.degree}</h3>
                        <p className="text-lg" style={{ color: '#00E5FF' }}>{edu.institution}</p>
                      </div>
                      <span className="px-3 py-1 bg-zinc-800/50 rounded-full text-sm text-zinc-400">
                        {edu.period}
                      </span>
                    </div>
                    <p className="text-zinc-400 mb-4">{edu.description}</p>
                    {edu.achievements.length > 0 && (
                      <div className="space-y-2">
                        {edu.achievements.map((achievement, i) => (
                          <div key={i} className="flex items-start gap-2">
                            <div className="w-1.5 h-1.5 rounded-full mt-2" style={{ backgroundColor: '#00E5FF' }} />
                            <p className="text-sm text-zinc-400 flex-1">{achievement}</p>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Certifications Carousel */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div className="flex items-center gap-3 mb-6 px-4">
              <div className="p-3 rounded-xl" style={{ backgroundColor: 'rgba(0, 229, 255, 0.1)' }}>
                <Award className="w-6 h-6" style={{ color: '#00E5FF' }} />
              </div>
              <h3 className="text-2xl">Certifications & Licenses</h3>
            </div>

            <div className="px-12">
              <Carousel
                opts={{
                  align: "start",
                  loop: true,
                }}
                className="w-full"
              >
                <CarouselContent>
                  {certifications.map((cert, index) => (
                    <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3 p-2">
                      <div className="h-full bg-zinc-900/30 backdrop-blur-sm rounded-xl p-6 border border-zinc-800 hover:border-[#00E5FF]/50 transition-colors flex flex-col">
                        <div className="flex-1">
                          <h4 className="text-lg font-medium mb-2 line-clamp-2" title={cert.title}>{cert.title}</h4>
                          <p className="text-sm text-[#00E5FF] mb-1">{cert.issuer}</p>
                          <p className="text-xs text-zinc-500 mb-4">{cert.date}</p>
                          {cert.skills && (
                            <p className="text-xs text-zinc-400 mb-4 line-clamp-2" title={cert.skills}>
                              <span className="font-semibold text-zinc-300">Skills:</span> {cert.skills}
                            </p>
                          )}
                        </div>
                        {cert.link && (
                          <a
                            href={cert.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 text-sm text-[#00E5FF] hover:underline mt-auto"
                          >
                            <span>View Credential</span>
                            <ExternalLink className="w-3 h-3" />
                          </a>
                        )}
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious className="left-0 bg-black/50 border-zinc-700 hover:bg-zinc-800 hover:text-[#00E5FF]" />
                <CarouselNext className="right-0 bg-black/50 border-zinc-700 hover:bg-zinc-800 hover:text-[#00E5FF]" />
              </Carousel>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}