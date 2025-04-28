import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import SocialLinks from './SocialLinks';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="relative">
      <Navbar />
      <main>{children}</main>

      {/* Side Elements */}
      <div className="fixed bottom-0 left-5 hidden lg:block">
        <div className="flex flex-col items-center">
          <SocialLinks isVertical={true} />
          <div className="w-px h-24 bg-text-secondary mt-5"></div>
        </div>
      </div>

      <div className="fixed bottom-0 right-5 hidden lg:block">
        <div className="flex flex-col items-center">
          <a
            href="mailto:your.email@example.com"
            className="font-mono text-text-secondary hover:text-accent transition-colors duration-300 vertical-text"
            style={{
              writingMode: 'vertical-rl',
              textOrientation: 'mixed',
            }}
          >
            kundan234432@gmail.com
          </a>
          <div className="w-px h-24 bg-text-secondary mt-5"></div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Layout;