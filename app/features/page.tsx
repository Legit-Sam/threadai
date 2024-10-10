import React from "react";
import { Navbar } from "@/components/Navbar";
import { Check, MessageCircle, ThumbsUp, TrendingUp, Share2, Heart, Calendar, Eye, Send } from "lucide-react";

const features = [
  {
    title: "AI-Powered Twitter Threads",
    description: "Generate engaging, professional Twitter threads with AI-crafted content.",
    icon: <MessageCircle className="w-10 h-10 text-green-500" />,
  },
  {
    title: "Instagram Caption Generator",
    description: "Create captivating captions for your Instagram posts in seconds.",
    icon: <Heart className="w-10 h-10 text-pink-500" />,
  },
  {
    title: "LinkedIn Post Assistant",
    description: "Optimize your LinkedIn posts for maximum professional impact.",
    icon: <TrendingUp className="w-10 h-10 text-blue-500" />,
  },
  {
    title: "Post Scheduler",
    description: "Schedule your social media posts across multiple platforms effortlessly.",
    icon: <Calendar className="w-10 h-10 text-yellow-500" />,
  },
  {
    title: "Engagement Analytics",
    description: "Track the performance and engagement of your social media posts.",
    icon: <Eye className="w-10 h-10 text-indigo-500" />,
  },
  {
    title: "Quick Share",
    description: "Easily share AI-generated content across all your social platforms.",
    icon: <Share2 className="w-10 h-10 text-red-500" />,
  },
  {
    title: "AI Response Generator",
    description: "Quickly reply to comments and messages with smart AI responses.",
    icon: <Send className="w-10 h-10 text-teal-500" />,
  },
  {
    title: "Performance Boost",
    description: "Increase your social media reach and engagement with AI suggestions.",
    icon: <ThumbsUp className="w-10 h-10 text-orange-500" />,
  },
  {
    title: "Custom AI Content",
    description: "Personalize your posts with custom AI content tailored to your style.",
    icon: <Check className="w-10 h-10 text-purple-500" />,
  },
];

const FeaturesPage = () => {
  return (
    <>
      <Navbar />
      <h1 className="text-5xl font-bold mt-40 text-center text-white">HERE ARE SOME COOL FEATURES ON THIS APP</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto mt-12 p-6">
        {features.map((feature, index) => (
          <div key={index} className="p-6 bg-gray-800 rounded-lg shadow-lg flex flex-col items-center text-center text-white">
            {feature.icon}
            <h2 className="text-2xl font-bold mt-4">{feature.title}</h2>
            <p className="text-gray-400 mt-2">{feature.description}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default FeaturesPage;
