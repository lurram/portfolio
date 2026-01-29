import { IconType } from 'react-icons';

export interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  category: string;
  image: string;
  link?: string;
}

export interface Skill {
  name: string;
  icon: IconType;
  description?: string;
  featured?: boolean;
}