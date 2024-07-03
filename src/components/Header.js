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

const Header = () => {
  return (
    <AboutSection>
      <div className='inline-block h-12 w-12 red '>
      <h1>
        ewfydfeyer
        ergye
      </h1>

      </div>
    </AboutSection>
  );
};

export default Header;
