/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { TeamMember, Project, SocialMetric, CaseStudy } from './types';

export const teamMembers: TeamMember[] = [
  {
    id: '1',
    name: 'Vaibhav Kadnar',
    role: 'Founder & Lead Creator',
    bio: 'Visionary content strategist with over 8 years of experience in the digital media landscape.',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200&h=200',
    socials: {
      youtube: '#',
      instagram: '#',
      twitter: '#',
    },
  },
  {
    id: '2',
    name: 'Aryan Sharma',
    role: 'Head of Content Strategy',
    bio: 'Expert in viral mechanics and audience growth across multiple social platforms.',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=200&h=200',
    socials: {
      instagram: '#',
      linkedin: '#',
    },
  },
  {
    id: '3',
    name: 'Priya Verma',
    role: 'Creative Director',
    bio: 'Passionate about storytelling and visual aesthetics that resonate with Gen-Z.',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=200&h=200',
    socials: {
      instagram: '#',
      twitter: '#',
    },
  },
];

export const projects: Project[] = [
  {
    id: 'p1',
    title: 'Modern Tech Review Series',
    category: 'YouTube Content',
    thumbnail: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=600&h=400',
    description: 'A deep dive into latest gadgets with high-production value and creative storytelling.',
    metrics: 'Avg. 1.2M views per episode',
    videos: [
      { title: 'The Future of AI Phones', link: '#', engagement: '150K Likes' },
      { title: 'Gaming PC Build 2024', link: '#', engagement: '200K Likes' },
    ],
    relatedChannels: ['Tech Hub', 'Vaibhav Reviews'],
  },
  {
    id: 'p2',
    title: 'Short Form Viral Skits',
    category: 'YouTube Shorts / TikTok',
    thumbnail: 'https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&q=80&w=600&h=400',
    description: 'Engaging, fast-paced comedy skits designed for maximum shareability.',
    metrics: 'Aggregate 50M+ views monthly',
    videos: [
      { title: 'Relatable Office Moments', link: '#', engagement: '1M+ Shares' },
      { title: 'Holiday Hassles', link: '#', engagement: '800K Shares' },
    ],
    relatedChannels: ['Quick Laughs', 'The Vaibhav Show'],
  },
  {
    id: 'p3',
    title: 'Masterclass: Content Creation',
    category: 'Educational',
    thumbnail: 'https://images.unsplash.com/photo-1478720143907-1714fa4b0f37?auto=format&fit=crop&q=80&w=600&h=400',
    description: 'Comprehensive tutorials teaching the next generation of creators how to build an audience.',
    metrics: '10K+ students enrolled',
    videos: [
      { title: 'Editing Like a Pro', link: '#', engagement: '4.8/5 Rating' },
      { title: 'Hook Your Audience', link: '#', engagement: '5K+ Comments' },
    ],
    relatedChannels: ['Creator Lab'],
  },
  {
    id: 'p4',
    title: 'Brand Partnership: Eco-Drive',
    category: 'Collaboration',
    thumbnail: 'https://images.unsplash.com/photo-1542601906970-3756756427a2?auto=format&fit=crop&q=80&w=600&h=400',
    description: 'A sustainable living campaign integrated into lifestyle content.',
    metrics: '25% increase in brand awareness',
    videos: [
      { title: 'My Eco-Friendly Day', link: '#', engagement: '500K Views' },
    ],
    relatedChannels: ['Vaibhav Lifestyle'],
  },
];

export const socialMetrics: SocialMetric[] = [
  { platform: 'YouTube', count: '500K+', label: 'Subscribers', icon: 'Youtube', color: '#FF0000' },
  { platform: 'Instagram', count: '250K+', label: 'Followers', icon: 'Instagram', color: '#E4405F' },
  { platform: 'TikTok', count: '1M+', label: 'Followers', icon: 'Music', color: '#000000' },
  { platform: 'Twitter', count: '100K+', label: 'Followers', icon: 'Twitter', color: '#1DA1F2' },
];

export const caseStudies: CaseStudy[] = [
  {
    id: 'cs1',
    title: 'Scaling Tech-Talk',
    overview: 'Helping a niche tech channel reach mainstream audiences through calculated thumbnails and pacing.',
    created: ['15 Long Form Videos', '40 Shorts', 'Weekly Newsletter'],
    results: '300% growth in subscriber count within 6 months.',
    links: [{ label: 'View Channel', url: '#' }],
  },
  {
    id: 'cs2',
    title: 'The Viral Campaign',
    overview: 'Executed a multi-platform challenge that trended for 7 consecutive days.',
    created: ['AR Filters', 'Influencer Seed Kits', 'Daily Recaps'],
    results: '200M+ total impressions across all platforms.',
    links: [{ label: 'Case Video', url: '#' }],
  },
];
