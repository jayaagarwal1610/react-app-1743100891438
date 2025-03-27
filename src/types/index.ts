export interface ButtonProps {
  primary?: boolean;
  onClick?: () => void;
  children: React.ReactNode;
  type?: 'button' | 'submit' | 'reset';
}

export interface TestimonialType {
  text: string;
  author: string;
  role: string;
  image: string;
}

export interface PricingPlanType {
  name: string;
  price: string;
  popular: boolean;
  features: string[];
}

export interface FAQItemType {
  question: string;
  answer: string;
  }
