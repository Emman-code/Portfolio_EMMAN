import { useState } from 'react';
import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Linkedin, Github, Instagram, Send, Loader2, CheckCircle } from 'lucide-react';
import emailjs from '@emailjs/browser';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState('');

  // EmailJS Configuration - Using environment variables
  const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
  const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
  const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');

    try {
      // Send email using EmailJS
      const result = await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject,
          message: formData.message,
          to_email: 'emman.cnr@gmail.com',
        },
        EMAILJS_PUBLIC_KEY
      );

      console.log('Email sent successfully:', result);
      setIsSubmitted(true);
      setFormData({ name: '', email: '', subject: '', message: '' });

      // Reset success message after 5 seconds
      setTimeout(() => setIsSubmitted(false), 5000);
    } catch (err: any) {
      console.error('Email send error:', err);
      setError('Failed to send message. Please try again or contact directly at emman.cnr@gmail.com');

      // Clear error after 5 seconds
      setTimeout(() => setError(''), 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'emman.cnr@gmail.com',
      href: 'mailto:emman.cnr@gmail.com',
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+91 95973 21862',
      href: 'tel:+919597321862',
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Coimbatore, India',
      href: '#',
    },
  ];

  const socialLinks = [
    { icon: Linkedin, href: 'https://www.linkedin.com/in/emmanuel-joshua-ej/', label: 'LinkedIn' },
    { icon: Github, href: 'https://github.com/Emman-code', label: 'GitHub' },
    { icon: Instagram, href: 'https://www.instagram.com/__.yoix.__/', label: 'Instagram' },
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
            <span className="text-sm" style={{ color: '#00E5FF' }}>Contact</span>
          </div>
          <h2 className="text-4xl md:text-5xl mb-4 font-bold tracking-tight">
            Get In <span style={{ color: '#00E5FF' }}>Touch</span>
          </h2>
          <p className="text-zinc-400 max-w-2xl mx-auto">
            Have a project in mind or want to collaborate? Let's talk!
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto grid md:grid-cols-5 gap-8">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="md:col-span-2 space-y-6"
          >
            <div className="bg-zinc-900/30 backdrop-blur-sm rounded-2xl p-8 border border-zinc-800">
              <h3 className="text-2xl mb-6">Contact Information</h3>
              <div className="space-y-4">
                {contactInfo.map((info, index) => (
                  <motion.a
                    key={index}
                    href={info.href}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.1 * index }}
                    whileHover={{ x: 5 }}
                    className="flex items-center gap-4 p-4 bg-zinc-950/50 rounded-xl hover:bg-zinc-800/30 transition-colors"
                  >
                    <div className="p-3 rounded-lg" style={{ backgroundColor: 'rgba(0, 229, 255, 0.1)' }}>
                      <info.icon className="w-5 h-5" style={{ color: '#00E5FF' }} />
                    </div>
                    <div>
                      <div className="text-xs text-zinc-500 mb-1">{info.label}</div>
                      <div className="text-zinc-300">{info.value}</div>
                    </div>
                  </motion.a>
                ))}
              </div>

              <div className="mt-8">
                <h4 className="text-lg mb-4">Follow Me</h4>
                <div className="flex gap-3">
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="p-3 bg-zinc-950/50 rounded-lg border border-zinc-800 hover:border-[#00E5FF]/50 transition-all"
                    >
                      <social.icon className="w-5 h-5 text-zinc-400" style={{ color: '#00E5FF' }} />
                    </motion.a>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="md:col-span-3"
          >
            <form onSubmit={handleSubmit} className="bg-zinc-900/30 backdrop-blur-sm rounded-2xl p-8 border border-zinc-800">
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="name" className="block text-sm text-zinc-400 mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-zinc-950/50 border border-zinc-800 rounded-lg focus:outline-none focus:border-[#00E5FF]/50 transition-colors text-zinc-100"
                    placeholder="John Doe"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm text-zinc-400 mb-2">
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-zinc-950/50 border border-zinc-800 rounded-lg focus:outline-none focus:border-[#00E5FF]/50 transition-colors text-zinc-100"
                    placeholder="john@example.com"
                    required
                  />
                </div>
              </div>

              <div className="mb-6">
                <label htmlFor="subject" className="block text-sm text-zinc-400 mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-zinc-950/50 border border-zinc-800 rounded-lg focus:outline-none focus:border-[#00E5FF]/50 transition-colors text-zinc-100"
                  placeholder="Project Inquiry"
                  required
                />
              </div>

              <div className="mb-6">
                <label htmlFor="message" className="block text-sm text-zinc-400 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={6}
                  className="w-full px-4 py-3 bg-zinc-950/50 border border-zinc-800 rounded-lg focus:outline-none focus:border-[#00E5FF]/50 transition-colors text-zinc-100 resize-none"
                  placeholder="Tell me about your project..."
                  required
                />
              </div>

              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full py-4 rounded-lg flex items-center justify-center gap-2 transition-shadow disabled:opacity-70 disabled:cursor-not-allowed"
                style={{ backgroundColor: '#00E5FF', color: '#000' }}
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    Sending...
                  </>
                ) : isSubmitted ? (
                  <>
                    <CheckCircle className="w-5 h-5" />
                    Message Sent!
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    Send Message
                  </>
                )}
              </motion.button>

              {/* Success Message */}
              {isSubmitted && (
                <motion.p
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-green-500 text-sm text-center mt-3"
                >
                  ✓ Your message has been sent successfully! I'll get back to you soon.
                </motion.p>
              )}

              {/* Error Message */}
              {error && (
                <motion.p
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-red-500 text-sm text-center mt-3"
                >
                  {error}
                </motion.p>
              )}

              {!isSubmitted && !error && (
                <p className="text-zinc-500 text-xs text-center mt-3">
                  Your message will be sent directly to my inbox.
                </p>
              )}
            </form>
          </motion.div>
        </div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-16 pt-8 border-t border-zinc-900"
        >
          <p className="text-zinc-500">
            © 2026 Emmanuel Joshua. Built with passion and AI.
          </p>
        </motion.div>
      </div>
    </div>
  );
}