import { EmailSection } from "../../components/Contact/EmailSection";
import { DogBreeds } from "../../components/DogBreeds/DogBreeds";
import { HeroSection } from "../../components/HeroSection/HeroSection";

export const Homepage = () => {
  return (
    <div>
      <HeroSection />
      <DogBreeds />
      <EmailSection />
    </div>
  );
};
