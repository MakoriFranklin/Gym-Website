export enum SelectedPage{
    Home = "home",
    Benefits = "benefits",
    OurClasses = "ourclasses",
    ContactUs = "contactus"
}

export interface BenefitType{
    id: number;
    icon: JSX.Element;
    title: String;
    description: String;
}