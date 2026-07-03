export interface GameInfo {
  title: string;
  subtitle: string;
  description: string;
  heroTitle: string;
  heroSubtitle: string;
  quickFacts: QuickFact[];
  heroStats: HeroStat[];
}

export interface QuickFact {
  label: string;
  value: string;
}

export interface HeroStat {
  label: string;
  value: string;
}

export interface ClassData {
  id: string;
  name: string;
  icon: string;
  tag: string;
  description: string;
  shortDescription: string;
  role: string;
  difficulty: string;
  rating: string;
  weaponType: string;
  armorType: string;
  abilities: string[];
  tips: string;
}

export interface Region {
  id: string;
  name: string;
  tag: string;
  levelRange: string;
  description: string;
  features: string[];
  pointsOfInterest: string[];
}

export interface JourneyCard {
  icon: string;
  title: string;
  description: string;
  href: string;
}

export interface ToolCard {
  icon: string;
  tag: string;
  title: string;
  description: string;
  href: string;
}

export interface GuideItem {
  tag: string;
  title: string;
  description: string;
  href: string;
}

export interface NewsItem {
  date: string;
  content: string;
}

export interface FAQ {
  question: string;
  answer: string;
}

export interface Weapon {
  name: string;
  type: string;
  class: string;
  damage: string;
  speed: string;
  range: string;
  description: string;
}

export interface WeaponType {
  name: string;
  description: string;
  classes: string[];
}

export interface Boss {
  name: string;
  location?: string;
  level?: string;
  description: string;
  drops?: string[];
  type: "normal" | "world" | "dungeon" | "elite" | "boss";
}

export interface Dungeon {
  name: string;
  level: string;
  description: string;
  bosses: string[];
  rewards: string[];
}

export interface Profession {
  name: string;
  icon: string;
  description: string;
}

export interface SystemRequirement {
  category: string;
  items: { label: string; value: string }[];
}

export interface ReleaseDateInfo {
  phase: string;
  date: string;
  description: string;
}

export interface RoadmapItem {
  phase: string;
  title: string;
  items: string[];
  status: "completed" | "in-progress" | "planned";
}

export interface FAQCategory {
  category: string;
  questions: FAQ[];
}
