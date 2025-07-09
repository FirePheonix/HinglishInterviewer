"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useRouter } from "next/navigation";
import InterviewCard from "@/components/InterviewCard";
import CategoryCard from "@/components/CategoryCard";
import ResumeAnalyzer from "@/components/ResumeAnalyzer";
import DSALearningPath from "@/components/DSALearningPath";
import DevelopmentLearningPath from "@/components/DevelopmentLearningPath";
import MLPythonLearningPath from "@/components/MLPythonLearningPath";
import { Brain, Mic, BarChart3 } from "lucide-react";
import { cn } from "@/lib/utils";
import { DotPattern } from "@/components/magicui/dot-pattern";
import { GridPattern } from "@/components/magicui/grid-pattern";

interface PageProps {
  userInterviews?: (any & { feedback?: any })[];
  latestInterviews?: (any & { feedback?: any })[];
  userId?: string;
}

const Page: React.FC<PageProps> = ({
  userInterviews = [],
  latestInterviews = [],
  userId,
}) => {
  const hasPastInterviews = userInterviews?.length > 0;
  const hasUpcomingInterviews = latestInterviews?.length > 0;

  return (
    <div className="container mx-auto px-4 py-12">
      {/* Hero Section */}
      <motion.div
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="relative flex items-center justify-center min-h-[90vh] mb-16 overflow-hidden"
      >
        {/* Dot Pattern Background */}
        <DotPattern
          className={cn(
            "absolute inset-0 [mask-image:radial-gradient(400px_circle_at_center,white,transparent)]",
          )}
        />
        {/* Left Phone Mockup */}
        <motion.div
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="absolute left-[-50px] top-1/2 transform -translate-y-1/2 z-10"
        >
          <div className="w-80 h-[550px] bg-black border-2 border-white rounded-[2.5rem] p-3 shadow-2xl">
            {/* Phone notch */}
            <div className="flex justify-center mb-2">
              <div className="w-20 h-1 bg-white rounded-full opacity-50"></div>
            </div>
            
            {/* Phone screen */}
            <div className="bg-black rounded-[2rem] h-full p-6 flex flex-col border border-white relative">
              {/* Status bar */}
              <div className="flex justify-between items-center mb-4 text-white text-xs">
                <div className="flex items-center space-x-1">
                  <div className="w-1 h-1 bg-white rounded-full"></div>
                  <div className="w-1 h-1 bg-white rounded-full"></div>
                  <div className="w-1 h-1 bg-white rounded-full opacity-50"></div>
                </div>
                <div className="flex items-center space-x-1">
                  <span>100%</span>
                  <div className="w-6 h-3 border border-white rounded-sm">
                    <div className="w-full h-full bg-white rounded-sm"></div>
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-center mb-6">
                <div className="w-16 h-16 bg-black border border-white rounded-full flex items-center justify-center">
                  <Mic className="w-8 h-8 text-white" />
                </div>
              </div>
              <div className="text-center mb-6">
                <h4 className="text-white font-semibold text-lg">AI Interviewer</h4>
                <div className="flex justify-center mt-3">
                  <div className="flex space-x-2 items-end h-10">
                    <div 
                      className="w-2 bg-white rounded-full"
                      style={{
                        height: '12px',
                        animation: 'soundWave 1s ease-in-out infinite',
                        animationDelay: '0s'
                      }}
                    ></div>
                    <div 
                      className="w-2 bg-white rounded-full"
                      style={{
                        height: '24px',
                        animation: 'soundWave 1s ease-in-out infinite',
                        animationDelay: '0.1s'
                      }}
                    ></div>
                    <div 
                      className="w-2 bg-white rounded-full"
                      style={{
                        height: '36px',
                        animation: 'soundWave 1s ease-in-out infinite',
                        animationDelay: '0.2s'
                      }}
                    ></div>
                    <div 
                      className="w-2 bg-white rounded-full"
                      style={{
                        height: '18px',
                        animation: 'soundWave 1s ease-in-out infinite',
                        animationDelay: '0.3s'
                      }}
                    ></div>
                    <div 
                      className="w-2 bg-white rounded-full"
                      style={{
                        height: '30px',
                        animation: 'soundWave 1s ease-in-out infinite',
                        animationDelay: '0.4s'
                      }}
                    ></div>
                    <div 
                      className="w-2 bg-white rounded-full"
                      style={{
                        height: '12px',
                        animation: 'soundWave 1s ease-in-out infinite',
                        animationDelay: '0.5s'
                      }}
                    ></div>
                  </div>
                </div>
              </div>
              <div className="bg-black rounded-lg p-4 text-sm text-gray-300 border border-white">
                "Can you explain the difference between React hooks and class components?"
              </div>
              
              {/* Home indicator */}
              <div className="flex justify-center mt-auto pt-4">
                <div className="w-20 h-1 bg-white rounded-full opacity-50"></div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Right Phone Mockup */}
        <motion.div
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="absolute right-[-50px] top-1/2 transform -translate-y-1/2 z-10"
        >
          <div className="w-80 h-[550px] bg-black border-2 border-white rounded-[2.5rem] p-3 shadow-2xl">
            {/* Phone notch */}
            <div className="flex justify-center mb-2">
              <div className="w-20 h-1 bg-white rounded-full opacity-50"></div>
            </div>
            
            {/* Phone screen */}
            <div className="bg-black rounded-[2rem] h-full p-6 flex flex-col border border-white relative">
              {/* Status bar */}
              <div className="flex justify-between items-center mb-4 text-white text-xs">
                <div className="flex items-center space-x-1">
                  <div className="w-1 h-1 bg-white rounded-full"></div>
                  <div className="w-1 h-1 bg-white rounded-full"></div>
                  <div className="w-1 h-1 bg-white rounded-full opacity-50"></div>
                </div>
                <div className="flex items-center space-x-1">
                  <span>100%</span>
                  <div className="w-6 h-3 border border-white rounded-sm">
                    <div className="w-full h-full bg-white rounded-sm"></div>
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-center mb-6">
                <div className="text-6xl font-bold text-white">85%</div>
              </div>
              <div className="text-center mb-6">
                <h4 className="text-white font-semibold text-lg">Your Score</h4>
              </div>
              <div className="space-y-4">
                <div className="flex justify-between items-center bg-black rounded-lg p-3 border border-white">
                  <span className="text-gray-300 text-base">Technical</span>
                  <span className="text-white font-semibold text-lg">90%</span>
                </div>
                <div className="flex justify-between items-center bg-black rounded-lg p-3 border border-white">
                  <span className="text-gray-300 text-base">Communication</span>
                  <span className="text-white font-semibold text-lg">78%</span>
                </div>
                <div className="flex justify-between items-center bg-black rounded-lg p-3 border border-white">
                  <span className="text-gray-300 text-base">Problem Solving</span>
                  <span className="text-white font-semibold text-lg">87%</span>
                </div>
              </div>
              
              {/* Home indicator */}
              <div className="flex justify-center mt-auto pt-4">
                <div className="w-20 h-1 bg-white rounded-full opacity-50"></div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Central Content */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="text-center z-20"
        >
          <h1 className="text-7xl font-bold text-white mb-8 leading-tight">
            Ace Your<br />
            Next Interview
          </h1>
          
          <div className="flex justify-center mb-8">
            <div 
              className="w-32 h-32 bg-black rounded-full flex items-center justify-center border-2 border-gray-700"
              style={{
                animation: 'brainPulse 2s ease-in-out infinite'
              }}
            >
              <Brain className="w-16 h-16 text-white" />
            </div>
          </div>
          
          <p className="text-gray-400 text-xl mb-4">
            AI-powered mock interviews that feel real
          </p>
          
          <h2 className="text-3xl font-bold text-white mb-8">
            Prep Loud. Land Proud.
          </h2>
          
          <Button
            asChild
            className="bg-white text-black hover:bg-gray-200 font-semibold px-12 py-4 text-lg rounded-full"
          >
            <Link href="/interview">Get Started</Link>
          </Button>
        </motion.div>

        {/* CSS Animations */}
        <style jsx>{`
          @keyframes soundWave {
            0%, 100% {
              transform: scaleY(0.5);
            }
            50% {
              transform: scaleY(1.5);
            }
          }
          
          @keyframes brainPulse {
            0%, 100% {
              transform: scale(1);
              box-shadow: 0 0 0 0 rgba(255, 255, 255, 0.3);
            }
            50% {
              transform: scale(1.05);
              box-shadow: 0 0 0 10px rgba(255, 255, 255, 0);
            }
          }
        `}</style>
      </motion.div>

      {/* How It Works Section */}
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.8 }}
        className="py-20 px-4"
      >
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-white mb-4">How It Works</h2>
            <p className="text-gray-400 text-xl max-w-2xl mx-auto">
              Get interview-ready in just 3 simple steps with our AI-powered platform
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Step 1 */}
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 1.0 }}
              className="text-center p-8 border border-white rounded-xl bg-black"
            >
              <div className="relative mb-8">
                <div className="w-24 h-24 bg-black border-2 border-white rounded-full flex items-center justify-center mx-auto mb-4">
                  <div className="text-3xl font-bold text-white">1</div>
                </div>
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-32 h-32 border-2 border-gray-700 rounded-full opacity-20"></div>
              </div>
              <h3 className="text-2xl font-semibold text-white mb-4">Choose Your Role</h3>
              <p className="text-gray-400 text-lg">
                Select your target position and skill level. Our AI will customize questions specifically for your career goals.
              </p>
            </motion.div>

            {/* Step 2 */}
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 1.2 }}
              className="text-center p-8 border border-white rounded-xl bg-black"
            >
              <div className="relative mb-8">
                <div className="w-24 h-24 bg-black border-2 border-white rounded-full flex items-center justify-center mx-auto mb-4">
                  <Mic className="w-10 h-10 text-white" />
                </div>
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-32 h-32 border-2 border-gray-700 rounded-full opacity-20"></div>
              </div>
              <h3 className="text-2xl font-semibold text-white mb-4">Practice Live</h3>
              <p className="text-gray-400 text-lg">
                Engage in real-time conversations with our AI interviewer. Experience realistic interview scenarios with voice interaction.
              </p>
            </motion.div>

            {/* Step 3 */}
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 1.4 }}
              className="text-center p-8 border border-white rounded-xl bg-black"
            >
              <div className="relative mb-8">
                <div className="w-24 h-24 bg-black border-2 border-white rounded-full flex items-center justify-center mx-auto mb-4">
                  <BarChart3 className="w-10 h-10 text-white" />
                </div>
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-32 h-32 border-2 border-gray-700 rounded-full opacity-20"></div>
              </div>
              <h3 className="text-2xl font-semibold text-white mb-4">Get Feedback</h3>
              <p className="text-gray-400 text-lg">
                Receive detailed analysis of your performance with personalized recommendations to improve your interview skills.
              </p>
            </motion.div>
          </div>

          {/* Call to Action */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 1.6 }}
            className="text-center mt-16"
          >
            <Button
              asChild
              className="bg-white text-black hover:bg-gray-200 font-semibold px-12 py-4 text-lg rounded-full"
            >
              <Link href="/interview">Start Your First Interview</Link>
            </Button>
          </motion.div>
        </div>
      </motion.div>

      {/* Resume Analyzer Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        {/* Grid Pattern Background with Linear Gradient */}
        <GridPattern
          width={20}
          height={20}
          x={-1}
          y={-1}
          className={cn(
            "absolute inset-0 [mask-image:linear-gradient(to_bottom_right,white,transparent,white)]",
          )}
        />
        <div className="relative max-w-6xl mx-auto">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-5xl font-bold text-white mb-4">AI-Resume Analyzer</h2>
            <p className="text-gray-400 text-xl max-w-2xl mx-auto">
              Upload your resume and get comprehensive analysis with personalized recommendations
            </p>
          </motion.div>
          
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            <ResumeAnalyzer />
          </motion.div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl font-bold text-white mb-4">Choose Your Plan</h2>
            <p className="text-gray-400 text-xl max-w-2xl mx-auto">
              Start free, upgrade when you're ready to dominate
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Free Plan */}
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="p-8 border border-white rounded-xl bg-black relative"
            >
              <div className="text-center mb-8">
                <h3 className="text-2xl font-semibold text-white mb-2">Free</h3>
                <div className="text-4xl font-bold text-white mb-4">$0</div>
                <p className="text-gray-400">Perfect for getting started</p>
              </div>
              
              <ul className="space-y-4 mb-8">
                <li className="flex items-center text-gray-300">
                  <div className="w-2 h-2 bg-white rounded-full mr-3"></div>
                  3 mock interviews per month
                </li>
                <li className="flex items-center text-gray-300">
                  <div className="w-2 h-2 bg-white rounded-full mr-3"></div>
                  Basic feedback analysis
                </li>
                <li className="flex items-center text-gray-300">
                  <div className="w-2 h-2 bg-white rounded-full mr-3"></div>
                  Resume analysis (1 per month)
                </li>
                <li className="flex items-center text-gray-300">
                  <div className="w-2 h-2 bg-white rounded-full mr-3"></div>
                  Standard question bank
                </li>
              </ul>
              
              <Button
                asChild
                className="w-full bg-white text-black hover:bg-gray-200 font-semibold py-3 rounded-lg"
              >
                <Link href="/sign-up">Get Started Free</Link>
              </Button>
            </motion.div>

            {/* Pro Plan */}
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="p-8 border-2 border-white rounded-xl bg-black relative"
            >
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <div className="bg-white text-black px-6 py-2 rounded-full text-sm font-semibold">
                  Most Popular
                </div>
              </div>
              
              <div className="text-center mb-8">
                <h3 className="text-2xl font-semibold text-white mb-2">Pro</h3>
                <div className="text-4xl font-bold text-white mb-4">$19<span className="text-lg text-gray-400">/month</span></div>
                <p className="text-gray-400">For serious job seekers</p>
              </div>
              
              <ul className="space-y-4 mb-8">
                <li className="flex items-center text-gray-300">
                  <div className="w-2 h-2 bg-white rounded-full mr-3"></div>
                  Unlimited mock interviews
                </li>
                <li className="flex items-center text-gray-300">
                  <div className="w-2 h-2 bg-white rounded-full mr-3"></div>
                  Advanced AI feedback
                </li>
                <li className="flex items-center text-gray-300">
                  <div className="w-2 h-2 bg-white rounded-full mr-3"></div>
                  Unlimited resume analysis
                </li>
                <li className="flex items-center text-gray-300">
                  <div className="w-2 h-2 bg-white rounded-full mr-3"></div>
                  Industry-specific questions
                </li>
                <li className="flex items-center text-gray-300">
                  <div className="w-2 h-2 bg-white rounded-full mr-3"></div>
                  Performance tracking
                </li>
                <li className="flex items-center text-gray-300">
                  <div className="w-2 h-2 bg-white rounded-full mr-3"></div>
                  Priority support
                </li>
              </ul>
              
              <Button
                asChild
                className="w-full bg-white text-black hover:bg-gray-200 font-semibold py-3 rounded-lg"
              >
                <Link href="/sign-up">Start Pro Trial</Link>
              </Button>
            </motion.div>

            {/* Enterprise Plan */}
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="p-8 border border-white rounded-xl bg-black relative"
            >
              <div className="text-center mb-8">
                <h3 className="text-2xl font-semibold text-white mb-2">Enterprise</h3>
                <div className="text-4xl font-bold text-white mb-4">Custom</div>
                <p className="text-gray-400">For teams and organizations</p>
              </div>
              
              <ul className="space-y-4 mb-8">
                <li className="flex items-center text-gray-300">
                  <div className="w-2 h-2 bg-white rounded-full mr-3"></div>
                  Everything in Pro
                </li>
                <li className="flex items-center text-gray-300">
                  <div className="w-2 h-2 bg-white rounded-full mr-3"></div>
                  Team management
                </li>
                <li className="flex items-center text-gray-300">
                  <div className="w-2 h-2 bg-white rounded-full mr-3"></div>
                  Custom integrations
                </li>
                <li className="flex items-center text-gray-300">
                  <div className="w-2 h-2 bg-white rounded-full mr-3"></div>
                  Analytics dashboard
                </li>
                <li className="flex items-center text-gray-300">
                  <div className="w-2 h-2 bg-white rounded-full mr-3"></div>
                  Dedicated support
                </li>
                <li className="flex items-center text-gray-300">
                  <div className="w-2 h-2 bg-white rounded-full mr-3"></div>
                  SLA guarantee
                </li>
              </ul>
              
              <Button
                asChild
                className="w-full bg-white text-black hover:bg-gray-200 font-semibold py-3 rounded-lg"
              >
                <Link href="/contact">Contact Sales</Link>
              </Button>
            </motion.div>
          </div>

          {/* Additional Info */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 1.0 }}
            className="text-center mt-16"
          >
            <p className="text-gray-400 text-lg mb-4">
              All plans include a 7-day free trial. No credit card required.
            </p>
            <p className="text-gray-500 text-sm">
              Cancel anytime • Upgrade or downgrade as needed
            </p>
          </motion.div>
        </div>
      </section>

      {/* Our Products Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl font-bold text-white mb-4">Our Products</h2>
            <p className="text-gray-400 text-xl max-w-2xl mx-auto">
              Discover our suite of AI-powered tools designed to accelerate your coding journey
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* NotesLo Banner */}
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="relative group cursor-pointer"
            >
              <div className="relative overflow-hidden rounded-xl border border-white bg-black h-[400px]">
                <img 
                  src="/NotesLoBanner.png" 
                  alt="Notesलो - AI Coding Notetaker" 
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300"></div>
                
                {/* Try Now Button Overlay */}
                <div className="absolute bottom-8 right-8">
                  <Button
                    asChild
                    className="bg-white text-black hover:bg-gray-200 font-semibold px-8 py-3 rounded-full shadow-lg transition-all duration-300 group-hover:scale-110"
                  >
                    <a href="https://https://notes-16q6.vercel.app" target="_blank" rel="noopener noreferrer">
                      Try Now
                    </a>
                  </Button>
                </div>
              </div>
            </motion.div>

            {/* GuidanceLo Banner */}
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="relative group cursor-pointer"
            >
              <div className="relative overflow-hidden rounded-xl border border-white bg-black h-[400px]">
                <img 
                  src="/GuidanceLoBanner.png" 
                  alt="Guidanceलो - Visual Roadmap Maker" 
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300"></div>
                
                {/* Try Now Button Overlay */}
                <div className="absolute bottom-8 right-8">
                  <Button
                    asChild
                    className="bg-white text-black hover:bg-gray-200 font-semibold px-8 py-3 rounded-full shadow-lg transition-all duration-300 group-hover:scale-110"
                  >
                    <a href="https://guidance-lo.vercel.app" target="_blank" rel="noopener noreferrer">
                      Try Now
                    </a>
                  </Button>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Create Interview Button */}
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.4 }}
        className="text-center mb-16"
      >
        <Button
          asChild
          className="bg-white text-black hover:bg-gray-200 font-semibold px-8 py-3 text-lg rounded-lg"
        >
          <Link href="/interview">Create Interview</Link>
        </Button>
      </motion.div>

      {/* Your Interviews Section */}
      <section className="flex flex-col gap-6 mt-8">
        <h2 className="text-white text-2xl font-semibold">Your Interviews</h2>

        <div className="interviews-section">
          {hasPastInterviews ? (
            userInterviews?.map((interview) => (
              <InterviewCard
                key={interview.id}
                userId={userId}
                interviewId={interview.id}
                role={interview.role}
                type={interview.type}
                techstack={interview.techstack}
                createdAt={interview.createdAt}
                feedback={interview.feedback}
              />
            ))
          ) : (
            <p className="text-light-100">
              You haven&apos;t taken any interviews yet
            </p>
          )}
        </div>
      </section>

      {/* Take an Interview Section */}
      <section className="flex flex-col gap-6 mt-8">
        <h2 className="text-white text-2xl font-semibold">Take an Interview</h2>

        <div className="interviews-section">
          {hasUpcomingInterviews ? (
            latestInterviews?.map((interview) => (
              <InterviewCard
                key={interview.id}
                userId={userId}
                interviewId={interview.id}
                role={interview.role}
                type={interview.type}
                techstack={interview.techstack}
                createdAt={interview.createdAt}
                feedback={interview.feedback}
              />
            ))
          ) : (
            <p className="text-light-100">
              There are no new interviews available
            </p>
          )}
        </div>
      </section>

      {/* DSA Learning Path Section */}
      <DSALearningPath />

      {/* Development Learning Path Section */}
      <DevelopmentLearningPath />

      {/* ML + Python Backend Learning Path Section */}
      <MLPythonLearningPath />
    </div>
  );
};
export default Page;
