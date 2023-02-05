import Image from "next/image";
import React from "react";
import Container from "../Container/Container";
import heroImage from "../../../public/hero-img.jpg";
import Text from "../Text/Text";

const Hero = () => {
  return (
    <Container>
      <div className="hero-container w-full flex flex-col md:flex-row">
        <div className="md:max-w-2xl lg:max-w-3xl md:flex-grow bg-polygon">
          <Image
            src={heroImage}
            alt="image de ma personne"
            className="w-full"
          />
        </div>
        <div className="md:flex-grow flex flex-col justify-center text-center">
          <Text type="hero">Bienvenue dans mon mini monde</Text>
        </div>
      </div>
    </Container>
  );
};

export default Hero;
