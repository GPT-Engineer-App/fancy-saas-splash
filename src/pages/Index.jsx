import { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Rocket, Zap, Shield, ArrowRight, Check } from "lucide-react"
import Navbar from '@/components/Navbar'
import { TestimonialCarousel } from '@/components/TestimonialCarousel'
import Footer from '@/components/Footer'

const Index = () => {
  const [email, setEmail] = useState('');

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500">
      <Navbar />
      <div className="container mx-auto px-4 pt-24 pb-16">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center text-white mb-16"
        >
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-5xl font-bold mb-4"
          >
            Welcome to CloudBoost
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-xl mb-8"
          >
            Supercharge your business with our cutting-edge SaaS solution
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            <Button className="bg-white text-purple-600 hover:bg-purple-100">Get Started</Button>
          </motion.div>
        </motion.div>

        {/* Features Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <FeatureCard
            icon={<Rocket className="h-12 w-12 text-indigo-400" />}
            title="Lightning Fast"
            description="Experience unparalleled speed and efficiency"
          />
          <FeatureCard
            icon={<Zap className="h-12 w-12 text-yellow-400" />}
            title="Powerful Analytics"
            description="Gain deep insights with our advanced analytics tools"
          />
          <FeatureCard
            icon={<Shield className="h-12 w-12 text-green-400" />}
            title="Bank-Level Security"
            description="Your data is safe with our top-notch security measures"
          />
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-white rounded-lg shadow-xl p-8 max-w-2xl mx-auto"
        >
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-3xl font-bold text-gray-800 mb-4"
          >
            Ready to boost your productivity?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-gray-600 mb-6"
          >
            Sign up for our newsletter and get exclusive early access!
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="flex space-x-4"
          >
            <Input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-grow"
            />
            <Button className="bg-purple-600 hover:bg-purple-700">
              Subscribe
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </motion.div>
        </motion.div>

        {/* Testimonial Section */}
        <div className="my-16">
          <h2 className="text-3xl font-bold text-white text-center mb-8">What Our Customers Say</h2>
          <TestimonialCarousel />
        </div>

        {/* Pricing Section */}
        <div className="my-16">
          <h2 className="text-3xl font-bold text-white text-center mb-8">Choose Your Plan</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <PricingCard
              title="Basic"
              price="$9.99"
              features={[
                "Up to 5 users",
                "Basic analytics",
                "24/7 support"
              ]}
            />
            <PricingCard
              title="Pro"
              price="$29.99"
              features={[
                "Up to 20 users",
                "Advanced analytics",
                "Priority support",
                "Custom integrations"
              ]}
              highlighted={true}
            />
            <PricingCard
              title="Enterprise"
              price="Custom"
              features={[
                "Unlimited users",
                "Full analytics suite",
                "Dedicated account manager",
                "Custom development"
              ]}
            />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

const FeatureCard = ({ icon, title, description }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    whileHover={{ scale: 1.05 }}
    className="bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg rounded-lg p-6 text-white"
  >
    <motion.div
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ delay: 0.2, type: "spring", stiffness: 260, damping: 20 }}
      className="mb-4"
    >
      {icon}
    </motion.div>
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p>{description}</p>
  </motion.div>
);

const PricingCard = ({ title, price, features, highlighted = false }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    whileHover={{ scale: 1.05 }}
    className={`bg-white rounded-lg shadow-xl p-6 ${highlighted ? 'border-4 border-yellow-400' : ''}`}
  >
    <h3 className="text-2xl font-bold text-gray-800 mb-4">{title}</h3>
    <p className="text-4xl font-bold text-purple-600 mb-6">{price}<span className="text-sm font-normal text-gray-600">/month</span></p>
    <ul className="mb-6">
      {features.map((feature, index) => (
        <motion.li
          key={index}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: index * 0.1 }}
          className="flex items-center mb-2"
        >
          <Check className="h-5 w-5 text-green-500 mr-2" />
          <span className="text-gray-600">{feature}</span>
        </motion.li>
      ))}
    </ul>
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <Button className={`w-full ${highlighted ? 'bg-purple-600 hover:bg-purple-700' : 'bg-gray-200 text-gray-800 hover:bg-gray-300'}`}>
        Choose Plan
      </Button>
    </motion.div>
  </motion.div>
);

export default Index;
