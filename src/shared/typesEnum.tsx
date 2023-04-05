export enum SelectedPageEnum {
  Home = "home",
  Benefits = "benefits",
  Categories = "categories",
  ContactUs = "contactus"
}

export interface BenefitType {
  icon: JSX.Element;
  title: string;
  description: string;
}

export interface ClassType {
  name: string;
  description?: string;
  image: string;
}