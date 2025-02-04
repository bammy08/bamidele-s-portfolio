'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import axios from 'axios';
import { AlertCircle, CheckCircle } from 'lucide-react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [status, setStatus] = useState<
    'idle' | 'loading' | 'success' | 'error'
  >('idle');

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');

    try {
      await axios.post('https://formspree.io/f/xldgngvr', formData);
      setStatus('success');
      setFormData({ name: '', email: '', message: '' });
    } catch {
      setStatus('error');
    }
  };

  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      className="max-w-2xl mx-auto py-24 px-4 sm:px-6 lg:px-8"
    >
      <div className="relative backdrop-blur-lg rounded-3xl bg-white dark:bg-gray-900/50 border border-gray-200 dark:border-gray-800 shadow-2xl p-8 sm:p-12">
        <div className="absolute -inset-4 bg-gradient-to-r from-purple-500/30 to-blue-500/30 rounded-3xl blur-2xl opacity-50 pointer-events-none" />

        <motion.h2
          className="text-4xl md:text-5xl font-bold text-center mb-12 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent"
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          Let&apos;s Connect
        </motion.h2>

        <motion.form
          onSubmit={handleSubmit}
          className="space-y-8"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.1 },
            },
          }}
        >
          <motion.div variants={{ hidden: { y: 20 }, visible: { y: 0 } }}>
            <Input
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Name"
              className="w-full h-14 text-lg bg-white/50 dark:bg-gray-800/50 border-gray-300 dark:border-gray-700 rounded-xl focus:ring-2 focus:ring-purple-500"
            />
          </motion.div>

          <motion.div variants={{ hidden: { y: 20 }, visible: { y: 0 } }}>
            <Input
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Your Email"
              type="email"
              className="w-full h-14 text-lg bg-white/50 dark:bg-gray-800/50 border-gray-300 dark:border-gray-700 rounded-xl focus:ring-2 focus:ring-blue-500"
            />
          </motion.div>

          <motion.div variants={{ hidden: { y: 20 }, visible: { y: 0 } }}>
            <Textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Your Message"
              rows={5}
              className="w-full text-lg bg-white/50 dark:bg-gray-800/50 border-gray-300 dark:border-gray-700 rounded-xl focus:ring-2 focus:ring-purple-500"
            />
          </motion.div>

          <motion.div
            variants={{ hidden: { scale: 0.95 }, visible: { scale: 1 } }}
          >
            <Button
              type="submit"
              className="w-full h-14 text-lg bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 rounded-xl transition-all"
              disabled={status === 'loading'}
            >
              {status === 'loading' ? (
                <motion.span
                  animate={{ opacity: [0.5, 1, 0.5] }}
                  transition={{ repeat: Infinity, duration: 1.5 }}
                >
                  Sending...
                </motion.span>
              ) : (
                'Send Message'
              )}
            </Button>
          </motion.div>

          <AnimatePresence>
            {status === 'success' && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="flex items-center justify-center gap-2 text-green-500 dark:text-green-400 text-lg"
              >
                <CheckCircle className="w-6 h-6" />
                Message sent successfully!
              </motion.div>
            )}

            {status === 'error' && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="flex items-center justify-center gap-2 text-red-500 dark:text-red-400 text-lg"
              >
                <AlertCircle className="w-6 h-6" />
                Something went wrong. Try again.
              </motion.div>
            )}
          </AnimatePresence>
        </motion.form>
      </div>
    </motion.section>
  );
}
