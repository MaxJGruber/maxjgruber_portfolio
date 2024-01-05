// MAIN TYPE FOR OBJECT BEING RETURNED FROM MD FILES
type TextProps = {
  titles: TitlesProps;
  contactForm: ContactFormProps;
  aboutMe: AboutMeProps;
  heroSection: HeroSectionProps;
  faq: FaqProps;
  notifications: NotificationProps;
  knowledge: KnowledgeProps;
  skillsSection: SkillSectionProps;
  projectSection: ProjectsSectionProps;
  projectsList: ProjectsListProps;
  funFacts: FunFactsProps;
};

type TitlesProps = {
  about: string;
  knowledgeSkills: string;
  projects: string;
  blog: string;
  faq: string;
  before: string;
  after: string;
};

// TYPES RELATED TO CONTACT FORM
type ContactFormProps = {
  title: string;
  intro: string[];
  formTitle: string;
  requiredWarning: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  optional: string;
  subject: string;
  message: string;
  submit: string;
};
type NotificationProps = {
  successMessage1: string;
  successMessage2: string;
  failedMessage1: string;
  failedMessage2: string;
};

// TYPES RELATED TO BIO SECTION
type AboutMeProps = {
  title: string;
  intro: string[];
  text: string[];
};
type FunFactsFeatureProps = {
  name: string;
  description: string;
};
type FunFactsProps = {
  title: string;
  features: FunFactsFeatureProps[];
};

type FaqFeatureProps = {
  id: number;
  question: string;
  answer: string;
};
type FaqProps = {
  faq: FaqFeatureProps[];
};

type HeroSectionProps = {
  profession: string;
  intro: string[];
};

// TYPES RELATED TO KNOWLEDGE & SKILLS SECTION
type KnowledgeFeatureProps = {
  name: string;
  icon: string;
  description: string;
};
type KnowledgeProps = {
  title: string;
  features: KnowledgeFeatureProps[];
};
type SkillFeatureProps = {
  name: string;
  description: string;
  currentlyLearning?: boolean;
};
type SkillSectionProps = {
  title: string;
  features: SkillFeatureProps[];
};

// TYPES RELATED TO PROJECTS SECTION
type ProjectsSectionProps = {
  description: string;
  specialFeatures: string;
  technologiesUsed: string;
  linkText: string;
};
type ProjectsProps = {
  name: string;
  type: string;
  intro: string;
  technologies: string;
  intro: string;
  description: string;
  landingPagePic: string;
  oldLandingPage?: string;
  contain: boolean;
  projectLink?: string;
  specialFeatures?: string;
  stats: { label: string; value: string }[];
};
type ProjectsListProps = {
  upcomingProjects: ProjectsProps[];
  projects: ProjectsProps[];
};
