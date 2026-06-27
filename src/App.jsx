import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TrustedBy from './components/TrustedBy';
import ServicesTeaser from './components/ServicesTeaser';
import Services from './components/Services';
import LivePipelineDemo from './components/LivePipelineDemo';
import Outcomes from './components/Outcomes';
import ProcessRoadmap from './components/ProcessRoadmap';
import Industries from './components/Industries';
import CaseStudies from './components/CaseStudies';
import TechStack from './components/TechStack';
import FinalCTA from './components/FinalCTA';
import Footer from './components/Footer';
import ServiceDetail from './components/ServiceDetail';
import CaseStudyDetail from './components/CaseStudyDetail';

export default function App() {
  const [currentHash, setCurrentHash] = useState(window.location.hash || '#/');

  useEffect(() => {
    // If user accesses /services directly, redirect to /#/services
    if (window.location.pathname.startsWith('/services')) {
      window.history.replaceState({}, '', '/#/services');
      setCurrentHash('#/services');
    }
  }, []);

  useEffect(() => {
    const handleHashChange = () => {
      setCurrentHash(window.location.hash || '#/');
      const hash = window.location.hash;
      if (hash === '#/services' || hash === '' || hash === '#/') {
        window.scrollTo(0, 0);
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  useEffect(() => {
    const hash = window.location.hash;
    // Only scroll to element if we are on the homepage (hash starts with #/ but is not a detail page path)
    if (hash && !hash.startsWith('#/services/') && !hash.startsWith('#/case-studies/') && hash !== '#/services') {
      const elementId = hash.replace(/^#\/?/, '');
      if (elementId && elementId !== '/') {
        setTimeout(() => {
          const element = document.getElementById(elementId);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
          }
        }, 150);
      }
    }
  }, [currentHash]);

  let mainContent;
  if (currentHash.startsWith('#/services/')) {
    const serviceId = currentHash.substring('#/services/'.length);
    mainContent = (
      <>
        <ServiceDetail serviceId={serviceId} />
        <FinalCTA />
      </>
    );
  } else if (currentHash.startsWith('#/case-studies/')) {
    const caseStudyId = currentHash.substring('#/case-studies/'.length);
    mainContent = (
      <>
        <CaseStudyDetail caseStudyId={caseStudyId} />
        <FinalCTA />
      </>
    );
  } else if (currentHash === '#/services') {
    mainContent = (
      <>
        <div className="services-page-hero">
          <div className="container">
            <h1 className="font-display-lg services-page-hero__title">Our Services</h1>
            <p className="font-body-lg services-page-hero__desc">
              Enterprise-grade data platforms, custom cloud architectures, and intelligence systems built to scale.
            </p>
          </div>
        </div>
        <Services />
        <FinalCTA />
      </>
    );
  } else {
    mainContent = (
      <>
        <Hero />
        <TrustedBy />
        <ServicesTeaser />
        <LivePipelineDemo />
        <Outcomes />
        <ProcessRoadmap />
        <Industries />
        <CaseStudies />
        <TechStack />
        <FinalCTA />
      </>
    );
  }

  return (
    <>
      <a href="#main-content" className="skip-link">
        Skip to content
      </a>
      <Navbar />

      <main id="main-content">
        {mainContent}
      </main>

      <Footer />
    </>
  );
}
