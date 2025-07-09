"use client";

import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import InterviewCard from "@/components/InterviewCard";
import ResumeAnalyzer from "@/components/ResumeAnalyzer";
import DSALearningPath from "@/components/DSALearningPath";
import DevelopmentLearningPath from "@/components/DevelopmentLearningPath";
import MLPythonLearningPath from "@/components/MLPythonLearningPath";
import { Brain, Mic, BarChart3 } from "lucide-react";

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
        className="relative flex items-center justify-center min-h-[90vh] mb-16"
      >
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

      {/* Resume Analyzer Section */}
      <section className="mt-16">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="mb-8"
        >
          <h2 className="text-white text-2xl font-semibold mb-4">Resume Analyzer</h2>
          <p className="text-light-100">
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
      </section>
    </div>
  );
};
export default Page;
