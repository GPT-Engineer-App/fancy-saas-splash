import { useState } from 'react';
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Rocket, Zap, Shield, ArrowRight } from "lucide-react"
import Navbar from '@/components/Navbar'

const Index = () => {
  const [email, setEmail] = useState('');

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500">
      <Navbar />
      <div className="container mx-auto px-4 pt-24 pb-16">
        {/* Hero Section */}
        <div className="text-center text-white mb-16">
          <h1 className="text-5xl font-bold mb-4">Welcome to CloudBoost</h1>
          <p className="text-xl mb-8">Supercharge your business with our cutting-edge SaaS solution</p>
          <Button className="bg-white text-purple-600 hover:bg-purple-100">Get Started</Button>
        </div>

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
        <div className="bg-white rounded-lg shadow-xl p-8 max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Ready to boost your productivity?</h2>
          <p className="text-gray-600 mb-6">Sign up for our newsletter and get exclusive early access!</p>
          <div className="flex space-x-4">
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
          </div>
        </div>
      </div>
    </div>
  );
};

const FeatureCard = ({ icon, title, description }) => (
  <div className="bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg rounded-lg p-6 text-white">
    <div className="mb-4">{icon}</div>
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p>{description}</p>
  </div>
);

export default Index;
