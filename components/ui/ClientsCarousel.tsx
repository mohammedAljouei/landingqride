'use client';

import React, { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import styles from './ClientsCarousel.module.css'; // Import your custom CSS module

// Dynamically import react-slick to avoid SSR issues
const Slider = dynamic(() => import('react-slick'), { ssr: false });

const ClientsCarousel: React.FC = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null; // Render nothing on the server
  }

  const settings = {
    dots: false,
    infinite: true,
    speed: 200,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000, // Adjust the speed as needed
    autoplayHoverPause: false, // Ensure it doesn't pause on hover
    rtl: true, // Enable right-to-left support
    cssEase: 'linear', // Ensure smooth linear transition for continuous movement
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="row">
      <Slider {...settings} className={styles.carousel}>

        <div className={styles.clientItem}>
          <img src="https://qlub.io/wp-content/uploads/2023/10/Paul.png" alt="Paul" className={styles.clientImage} />
        </div>
     
        <div className={styles.clientItem}>
          <img src="https://qlub.io/wp-content/uploads/2023/10/Molten-Chocolate.png" alt="Molten Chocolate" className={styles.clientImage} />
        </div>
    
        <div className={styles.clientItem}>
          <img src="https://qlub.io/wp-content/uploads/2023/10/Life-with-Cacao.png" alt="Life with Cacao" className={styles.clientImage} />
        </div>
        <div className={styles.clientItem}>
          <img src="https://qlub.io/wp-content/uploads/2023/10/Karazah.png" alt="Karazah" className={styles.clientImage} />
        </div>
        {/* Add more items as needed */}
      </Slider>
    </div>
  );
};

export default ClientsCarousel;
