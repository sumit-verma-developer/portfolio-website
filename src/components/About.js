import React from 'react';
import styled from 'styled-components';

const AboutSection = styled.section`
  padding: 4rem 0;
  background: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.text};

  h2 {
    text-align: center;
    margin-bottom: 2rem;
  }

  p {
    max-width: 800px;
    margin: 0 auto;
    line-height: 1.6;
    text-align: center;
  }
`;

const About = () => {
  return (
    <AboutSection>
      <h2>About Me</h2>
      <p>
        Hey there! 👋 I've spent over 3.5 years diving deep into React Native and React JS development, focusing on creating awesome websites and mobile apps. 📱 I've had the pleasure of working on a variety of projects for different clients, from cool startups to small and mid-level companies.
      </p>
      <p>
        My knack lies in seamlessly integrating third-party tools and APIs to make sure everything runs smoothly and users have a great experience. I love building scalable solutions that fit exactly what my clients need, using my skills in front-end development, thoughtful UI/UX design, and making sure everything looks great on any device.
      </p>
      <p>
        My portfolio shows my passion for crafting top-notch work that goes beyond expectations. 🚀 I'm known for hitting deadlines and sticking to budgets, and I thrive in teams where we can tackle challenges and make something amazing together. Let's create something awesome! 💪
      </p>
    </AboutSection>
  );
};

export default About;
