/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  image: string;
  socials: {
    instagram?: string;
    twitter?: string;
    youtube?: string;
    linkedin?: string;
  };
}

export interface Project {
  id: string;
  title: string;
  category: string;
  thumbnail: string;
  description: string;
  metrics: string;
  videos: { title: string; link: string; engagement: string }[];
  relatedChannels: string[];
}

export interface SocialMetric {
  platform: 'Instagram' | 'YouTube' | 'TikTok' | 'Twitter';
  count: string;
  label: string;
  icon: string;
  color: string;
}

export interface CaseStudy {
  id: string;
  title: string;
  overview: string;
  created: string[];
  results: string;
  links: { label: string; url: string }[];
}
