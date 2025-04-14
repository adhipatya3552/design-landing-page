import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Code, Rocket, Sparkles, Mail, Users, Star, Copyright } from 'lucide-react';

function App() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -80;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      
      window.scrollTo({
        top: y,
        behavior: 'smooth'
      });
    }
  };

  const handleLogoClick = () => {
    // Create a fade out effect before reload
    const root = document.getElementById('root');
    if (root) {
      root.style.transition = 'opacity 0.5s ease-in-out';
      root.style.opacity = '0';
    }
    setTimeout(() => {
      window.location.reload();
    }, 500);
  };

  return (
    <AnimatePresence>
      <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-800 text-white relative pb-24">
        {/* Navigation Progress Bar */}
        <motion.div
          className="fixed top-0 left-0 right-0 h-1 bg-purple-500 origin-left z-50"
          style={{
            scaleX: 0
          }}
          animate={{
            scaleX: window.pageYOffset / (document.documentElement.scrollHeight - window.innerHeight) || 0
          }}
        />

        {/* Hero Section */}
        <motion.header 
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -50 }}
          transition={{ duration: 0.8 }}
          className="container mx-auto px-6 py-16"
        >
          <nav className="flex justify-between items-center mb-16">
            <motion.div 
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              whileHover={{ scale: 1.1, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="text-2xl font-bold flex items-center gap-2 cursor-pointer"
              onClick={handleLogoClick}
            >
              <Sparkles className="w-8 h-8" />
              Innovate
            </motion.div>
            <motion.div 
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="flex gap-8"
            >
              {[
                { name: 'Features', id: 'features' },
                { name: 'About', id: 'about' },
                { name: 'Contact', id: 'contact' }
              ].map((item) => (
                <motion.button 
                  key={item.name} 
                  onClick={() => scrollToSection(item.id)}
                  className="hover:text-purple-300 transition-colors relative group"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {item.name}
                  <motion.div
                    className="absolute -bottom-2 left-0 right-0 h-0.5 bg-purple-500"
                    initial={{ scaleX: 0 }}
                    whileHover={{ scaleX: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.button>
              ))}
            </motion.div>
          </nav>

          <motion.div 
            className="flex flex-col lg:flex-row items-center gap-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: false }}
            transition={{ duration: 0.8 }}
          >
            <motion.div 
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false }}
              transition={{ delay: 0.2 }}
              className="lg:w-1/2"
            >
              <h1 className="text-5xl lg:text-7xl font-bold mb-6">
                Transform Your Ideas Into Reality
              </h1>
              <p className="text-lg text-purple-200 mb-8">
                Unleash your creativity with our innovative platform. Build, deploy, and scale your next big project with ease.
              </p>
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => scrollToSection('contact')}
                className="bg-purple-500 hover:bg-purple-600 px-8 py-4 rounded-full font-semibold flex items-center gap-2"
              >
                Get Started <ArrowRight className="w-5 h-5" />
              </motion.button>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: false }}
              transition={{ delay: 0.4 }}
              className="lg:w-1/2"
            >
              <img 
                src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80" 
                alt="Hero" 
                className="rounded-2xl shadow-2xl"
              />
            </motion.div>
          </motion.div>
        </motion.header>

        {/* Features Section */}
        <motion.section 
          id="features"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 50 }}
          viewport={{ once: false, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="container mx-auto px-6 py-24"
        >
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            className="text-4xl font-bold text-center mb-16"
          >
            Why Choose Us
          </motion.h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Code className="w-8 h-8" />,
                title: 'Clean Code',
                description: 'Write beautiful, maintainable code with our modern development tools.'
              },
              {
                icon: <Rocket className="w-8 h-8" />,
                title: 'Fast Performance',
                description: 'Lightning-fast performance optimized for the modern web.'
              },
              {
                icon: <Sparkles className="w-8 h-8" />,
                title: 'Beautiful Design',
                description: 'Create stunning user interfaces that captivate your audience.'
              }
            ].map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
                transition={{ delay: index * 0.2 }}
                whileHover={{ scale: 1.05 }}
                className="bg-white/10 backdrop-blur-lg rounded-xl p-8 hover:bg-white/20 transition-colors"
              >
                <motion.div 
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: false }}
                  className="bg-purple-500 w-16 h-16 rounded-lg flex items-center justify-center mb-6"
                >
                  {feature.icon}
                </motion.div>
                <h3 className="text-xl font-semibold mb-4">{feature.title}</h3>
                <p className="text-purple-200">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* About Section */}
        <motion.section
          id="about"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 50 }}
          viewport={{ once: false, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="container mx-auto px-6 py-24 bg-white/5 backdrop-blur-lg rounded-3xl my-24"
        >
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false }}
              transition={{ delay: 0.2 }}
              className="lg:w-1/2"
            >
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
                className="text-4xl font-bold mb-6"
              >
                About Our Mission
              </motion.h2>
              <p className="text-lg text-purple-200 mb-6">
                We're passionate about empowering developers and businesses to create exceptional digital experiences. Our platform combines cutting-edge technology with intuitive design to make development faster and more efficient.
              </p>
              <div className="grid grid-cols-2 gap-6">
                {[
                  { icon: <Users className="w-6 h-6" />, text: '10K+ Users' },
                  { icon: <Star className="w-6 h-6" />, text: '4.9 Rating' }
                ].map((stat) => (
                  <motion.div 
                    key={stat.text} 
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: false }}
                    whileHover={{ scale: 1.05 }}
                    className="flex items-center gap-3"
                  >
                    <div className="bg-purple-500 p-3 rounded-lg">
                      {stat.icon}
                    </div>
                    <span className="font-semibold">{stat.text}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false }}
              transition={{ delay: 0.4 }}
              className="lg:w-1/2"
            >
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80"
                alt="Team"
                className="rounded-2xl shadow-2xl"
              />
            </motion.div>
          </div>
        </motion.section>

        {/* Contact Section */}
        <motion.section
          id="contact"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 50 }}
          viewport={{ once: false, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="container mx-auto px-6 py-24"
        >
          <div className="max-w-3xl mx-auto text-center">
            <motion.div
              initial={{ scale: 0, rotate: -180 }}
              whileInView={{ scale: 1, rotate: 0 }}
              viewport={{ once: false }}
              transition={{ type: "spring", stiffness: 200 }}
            >
              <Mail className="w-16 h-16 mx-auto mb-8 text-purple-400" />
            </motion.div>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              className="text-4xl font-bold mb-6"
            >
              Get in Touch
            </motion.h2>
            <p className="text-lg text-purple-200 mb-12">
              Ready to start your journey? We're here to help you build something amazing.
            </p>
            <motion.form 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ delay: 0.2 }}
              className="space-y-6"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <motion.input
                  whileFocus={{ scale: 1.02 }}
                  type="text"
                  placeholder="Your Name"
                  className="bg-white/10 rounded-lg px-6 py-4 text-white placeholder-purple-200 focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
                <motion.input
                  whileFocus={{ scale: 1.02 }}
                  type="email"
                  placeholder="Your Email"
                  className="bg-white/10 rounded-lg px-6 py-4 text-white placeholder-purple-200 focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
              </div>
              <motion.textarea
                whileFocus={{ scale: 1.02 }}
                placeholder="Your Message"
                rows={6}
                className="w-full bg-white/10 rounded-lg px-6 py-4 text-white placeholder-purple-200 focus:outline-none focus:ring-2 focus:ring-purple-500"
              ></motion.textarea>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-purple-500 hover:bg-purple-600 px-8 py-4 rounded-full font-semibold inline-flex items-center gap-2"
              >
                Send Message <ArrowRight className="w-5 h-5" />
              </motion.button>
            </motion.form>
          </div>
        </motion.section>

        {/* Footer */}
        <motion.footer 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="fixed bottom-0 left-0 right-0 bg-black/30 backdrop-blur-lg"
        >
          <div className="container mx-auto px-6 py-4">
            <div className="flex justify-between items-center">
              <motion.div 
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.7 }}
                className="flex items-center gap-2 text-sm text-purple-200"
              >
                <Copyright className="w-4 h-4" />
                <span>{new Date().getFullYear()} Adhipatya Saxena</span>
              </motion.div>
              <motion.a
                initial={{ x: 20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.7 }}
                href="#"
                className="text-sm text-purple-200 hover:text-white transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Terms & Conditions
              </motion.a>
            </div>
          </div>
        </motion.footer>
      </div>
    </AnimatePresence>
  );
}

export default App;