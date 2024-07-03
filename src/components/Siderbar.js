import React from 'react';
import styled from 'styled-components';
import { FaUser, FaEnvelope, FaPhone, FaMapMarkerAlt, FaLinkedin, FaGithub } from 'react-icons/fa';

const SidebarContainer = styled.div`
  width: 250px;
  background: ${({ theme }) => theme.colors.background};
  padding: 2rem;
  border-right: 1px solid ${({ theme }) => theme.colors.secondary};
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: 768px) {
    width: 100%;
    flex-direction: row;
    justify-content: space-around;
  }
`;

const Avatar = styled.div`
  width: 100px;
  height: 100px;
  background: gray;
  border-radius: 50%;
  margin-bottom: 1rem;

  @media (max-width: 768px) {
    margin-bottom: 0;
  }
`;

const Name = styled.h2`
  margin-bottom: 1rem;

  @media (max-width: 768px) {
    display: none;
  }
`;

const ContactInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: 768px) {
    flex-direction: row;
  }

  a {
    color: ${({ theme }) => theme.colors.text};
    margin-bottom: 0.5rem;

    @media (max-width: 768px) {
      margin: 0 0.5rem;
    }
  }
`;

const Sidebar = () => {
  return (
    <SidebarContainer>
      <Avatar />
      <Name>Gaurang Vadher</Name>
      <ContactInfo>
        <a href="mailto:vadhergaurang786@example.com"><FaEnvelope /> Email</a>
        <a href="tel:+918733914315"><FaPhone /> Phone</a>
        <a href="#"><FaMapMarkerAlt /> Surat, Gujarat, India</a>
        <a href="#"><FaLinkedin /> LinkedIn</a>
        <a href="#"><FaGithub /> GitHub</a>
      </ContactInfo>
    </SidebarContainer>
  );
};

export default Sidebar;
