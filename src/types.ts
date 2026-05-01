export interface Project {
  id: string;
  title: string;
  shortDesc: string;
  longDesc: string;
  problem: string;
  methodology: string;
  results: string;
  category: string;
  year: string;
  subsidized: boolean;
  img: string;
  gallery: string[];
  tech: string[];
  team: {
    name: string;
    role: string;
  }[];
}

export interface LifeActivity {
  id: string;
  title: string;
  description: string;
  date: string;
  type: 'Congreso' | 'Feria' | 'Taller' | 'Integración' | 'Reunión' | 'Académica' | 'Behind the scenes' | 'Especial';
  platform: 'TikTok' | 'Instagram' | 'Facebook' | 'LinkedIn';
  url: string;
  thumbnail: string;
}
