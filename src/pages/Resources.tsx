import React from 'react';
import { BookOpen, Video, FileText, Download, ExternalLink } from 'lucide-react';

const resources = [
  {
    category: 'Guides & Tutorials',
    items: [
      {
        title: 'Getting Started with LexeraLife',
        description: 'A comprehensive guide for new users',
        type: 'PDF',
        icon: FileText
      },
      {
        title: 'Understanding Dyslexia',
        description: 'Educational video series',
        type: 'Video',
        icon: Video
      },
      {
        title: 'Parents Guide to Support',
        description: 'Tips and strategies for parents',
        type: 'PDF',
        icon: FileText
      }
    ]
  },
  {
    category: 'Learning Materials',
    items: [
      {
        title: 'Interactive Reading Exercises',
        description: 'Practice materials for all levels',
        type: 'Interactive',
        icon: BookOpen
      },
      {
        title: 'Writing Templates',
        description: 'Structured writing aids',
        type: 'Download',
        icon: Download
      },
      {
        title: 'Progress Tracking Sheets',
        description: 'Monitor your learning journey',
        type: 'Download',
        icon: Download
      }
    ]
  },
  {
    category: 'Research & Articles',
    items: [
      {
        title: 'Latest Dyslexia Research',
        description: 'Recent studies and findings',
        type: 'External',
        icon: ExternalLink
      },
      {
        title: 'Success Stories',
        description: 'Real experiences from our users',
        type: 'Blog',
        icon: FileText
      },
      {
        title: 'Educational Insights',
        description: 'Expert articles and analysis',
        type: 'Blog',
        icon: FileText
      }
    ]
  }
];

export default function Resources() {
  return (
    <div className="pt-16 min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
            Learning Resources
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Access our comprehensive collection of educational materials, guides, and research to support your learning journey.
          </p>
        </div>

        <div className="space-y-16">
          {resources.map((section, index) => (
            <div key={index}>
              <h2 className="text-2xl font-bold mb-8 text-gray-900">
                {section.category}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {section.items.map((item, itemIndex) => (
                  <div
                    key={itemIndex}
                    className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
                  >
                    <div className="flex items-center mb-4">
                      <div className="bg-indigo-100 p-3 rounded-lg">
                        <item.icon className="w-6 h-6 text-indigo-600" />
                      </div>
                      <div className="ml-4">
                        <h3 className="text-lg font-semibold text-gray-900">
                          {item.title}
                        </h3>
                        <span className="text-sm text-indigo-600">{item.type}</span>
                      </div>
                    </div>
                    <p className="text-gray-600">{item.description}</p>
                    <button className="mt-4 text-indigo-600 font-medium hover:text-indigo-700 transition-colors inline-flex items-center">
                      Access Resource
                      <ExternalLink className="w-4 h-4 ml-2" />
                    </button>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}