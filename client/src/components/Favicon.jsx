import { useEffect } from 'react';
import headIcon from '../assets/head.png';

const Favicon = () => {
  useEffect(() => {
    const link = document.querySelector("link[rel~='icon']");
    if (link) {
      link.href = headIcon;
    } else {
      const newLink = document.createElement('link');
      newLink.rel = 'icon';
      newLink.href = headIcon;
      document.head.appendChild(newLink);
    }
  }, []);

  return null;
};

export default Favicon; 