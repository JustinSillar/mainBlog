import React from 'react';
import Helmet from 'react-helmet';
import Header from '../components/Header/Header';
import Container from '../components/Container/Container';
import Footer from '../components/Footer/Footer';
import config from '../../config/SiteConfig';

const About = () => (
  <div className="container about-container">
    <Helmet title={`About | ${config.siteTitle}`} />
    <Header>About</Header>
    <Container text>
      
      <p>
      My name is Justin from Toronto, Canada. Enthusiastic to share my thoughts, ideas and opinions about basketball. 
      </p>
    </Container>
    <Footer />
  </div>
);

export default About;
