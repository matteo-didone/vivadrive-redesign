// app/careers/components/JobTypes.ts

export interface JobBenefit {
    icon: string;
    text: string;
  }
  
  export interface JobRequirement {
    required: boolean;
    text: string;
  }
  
  export interface JobResponsibility {
    text: string;
  }
  
  export interface JobPosition {
    id: string;
    slug: string;
    title: string;
    subtitle?: string;
    location: string;
    type: "FULL_TIME" | "PART_TIME" | "CONTRACT" | "INTERNSHIP" | "REMOTE";
    category: "ENGINEERING" | "DESIGN" | "MARKETING" | "BUSINESS" | "DATA" | "OTHER";
    postedDate: string;
    description: string;
    shortDescription: string;
    requirements: JobRequirement[];
    responsibilities: JobResponsibility[];
    benefits: JobBenefit[];
    salary?: {
      min: number;
      max: number;
      currency: string;
    };
    applicationUrl?: string;
    department: string;
    featured: boolean;
    translations?: {
      [key: string]: {
        slug?: string;
        title: string;
        subtitle?: string;
        location?: string;
        description: string;
        shortDescription: string;
        requirements?: JobRequirement[];
        responsibilities?: JobResponsibility[];
        benefits?: JobBenefit[];
        department?: string;
      }
    };
  }