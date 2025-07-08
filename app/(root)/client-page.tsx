'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Button } from "@/components/ui/button";
import Link from "next/link";
import InterviewCard from "@/components/InterviewCard";
import { Brain, Mic, BarChart3 } from 'lucide-react';

interface PageProps {
  userInterviews?: any[];
  latestInterviews?: any[];
}

const Page: React.FC<PageProps> = ({ userInterviews = [], latestInterviews = [] }) => {
    const hasPastInterviews = userInterviews?.length > 0;
    const hasUpcomingInterviews = latestInterviews?.length > 0;

    return (
        <div className="container mx-auto px-4 py-12">
            {/* Header */}
            <motion.div 
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                className="text-center mb-16"
            >
                <h1 className="text-6xl font-bold text-white mb-4">
                    Interviewलो
                </h1>
                <p className="text-light-100 text-xl max-w-2xl mx-auto">
                    Your AI-powered interview companion. Practice with realistic mock interviews 
                    and get personalized feedback to ace your next job interview.
                </p>
            </motion.div>

            {/* Features */}
            <motion.div 
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="grid md:grid-cols-3 gap-6 mb-16"
            >
                <div className="text-center p-6 rounded-xl bg-dark-200/50 border border-dark-200">
                    <Brain className="w-12 h-12 text-primary-200 mx-auto mb-4" />
                    <h3 className="text-white font-semibold mb-2">AI-Powered</h3>
                    <p className="text-light-100 text-sm">Smart questions tailored to your experience level</p>
                </div>
                <div className="text-center p-6 rounded-xl bg-dark-200/50 border border-dark-200">
                    <Mic className="w-12 h-12 text-primary-200 mx-auto mb-4" />
                    <h3 className="text-white font-semibold mb-2">Real-time Voice</h3>
                    <p className="text-light-100 text-sm">Natural conversation with voice AI agent</p>
                </div>
                <div className="text-center p-6 rounded-xl bg-dark-200/50 border border-dark-200">
                    <BarChart3 className="w-12 h-12 text-primary-200 mx-auto mb-4" />
                    <h3 className="text-white font-semibold mb-2">Detailed Feedback</h3>
                    <p className="text-light-100 text-sm">Comprehensive analysis and improvement tips</p>
                </div>
            </motion.div>

            {/* Create Interview Button */}
            <motion.div 
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="text-center mb-16"
            >
                <Button asChild className="bg-white text-black hover:bg-gray-200 font-semibold px-8 py-3 text-lg rounded-lg">
                    <Link href="/interview">
                        Create Interview
                    </Link>
                </Button>
            </motion.div>

            {/* Original functionality preserved */}
            <section className="flex flex-col gap-6 mt-8">
                <h2 className="text-white">Your Interviews</h2>

                <div className="interviews-section">
                    {hasPastInterviews ? (
                        userInterviews?.map((interview) => (
                            <InterviewCard {...interview} key={interview.id}/>
                        ))) : (
                            <p className="text-light-100">You haven&apos;t taken any interviews yet</p>
                    )}
                </div>
            </section>

            <section className="flex flex-col gap-6 mt-8">
                <h2 className="text-white">Take an Interview</h2>

                <div className="interviews-section">
                    {hasUpcomingInterviews ? (
                        latestInterviews?.map((interview) => (
                            <InterviewCard {...interview} key={interview.id}/>
                        ))) : (
                        <p className="text-light-100">There are no new interviews available</p>
                    )}
                </div>
            </section>
        </div>
    )
}
export default Page
