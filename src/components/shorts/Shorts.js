import React, { useState, useRef, useEffect } from 'react';
import styles from './Shorts.module.css';

const LazyYoutubeEmbed = ({ videoId, index }) => {
  const ref = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  // Lazy load detection
  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
        observer.disconnect();
      }
    });
    if (ref.current) {
      observer.observe(ref.current);
    }
    return () => observer.disconnect();
  }, []);

  // ScrollReveal effect
  useEffect(() => {
    if (ref.current) {
      const element = ref.current;
      element.style.opacity = '0';
      element.style.transform = 'translateY(30px) scale(0.95)';
      element.style.transition = 'all 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94)';

      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              element.style.opacity = '1';
              element.style.transform = 'translateY(0) scale(1)';
            }, index * 100);
            observer.unobserve(element);
          }
        });
      }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

      observer.observe(element);
      return () => observer.disconnect();
    }
  }, [index]);

  const handlePlay = () => {
    setIsPlaying(true);
  };

  // YouTube Shorts thumbnail - using oembed to get vertical frame
  const thumbnailUrl = `https://i.ytimg.com/vi/${videoId}/frame0.jpg`;
  const fallbackThumbnail = `https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`;

  return (
    <div className={styles.shortItem} ref={ref}>
      {isPlaying ? (
        <iframe
          className={styles.iframe}
          src={`https://www.youtube.com/embed/${videoId}?autoplay=1&mute=0&controls=1&modestbranding=1&rel=0&showinfo=0&playsinline=1`}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          title={`YouTube Short ${index + 1}`}
        />
      ) : (
        <div className={styles.thumbnailWrapper} onClick={handlePlay}>
          {isVisible && (
            <img
              className={styles.thumbnail}
              src={thumbnailUrl}
              alt={`Video thumbnail ${index + 1}`}
              onError={(e) => {
                e.target.src = fallbackThumbnail;
              }}
            />
          )}
          <button className={styles.playButton} aria-label="Play video">
            <svg 
              className={styles.playIcon} 
              viewBox="0 0 24 24" 
              fill="currentColor"
            >
              <path d="M8 5v14l11-7z" />
            </svg>
          </button>
          <div className={styles.playOverlay}></div>
        </div>
      )}
    </div>
  );
};

const Shorts = () => {
  const titleRef = useRef(null);

  const shortsData = [
    'https://www.youtube.com/shorts/3tfJYrvP2d4',
    'https://www.youtube.com/shorts/j1KPAZkcqmE',
  ];

  const getVideoId = (url) => {
    return url.split('/shorts/')[1];
  };

  // Title scroll reveal
  useEffect(() => {
    if (titleRef.current) {
      const element = titleRef.current;
      element.style.opacity = '0';
      element.style.transform = 'translateY(-20px)';
      element.style.transition = 'all 0.8s cubic-bezier(0.23, 1, 0.320, 1)';

      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              element.style.opacity = '1';
              element.style.transform = 'translateY(0)';
            }, 200);
            observer.unobserve(element);
          }
        });
      }, { threshold: 0.5 });

      observer.observe(element);
      return () => observer.disconnect();
    }
  }, []);

  return (
    <div>
      <h2 className={styles.title} ref={titleRef}>
        חלק מהמלווים גם רצו לדבר:
      </h2>
      <div className={styles.shortsContainer}>
        {shortsData.map((shortUrl, index) => (
          <LazyYoutubeEmbed
            key={index}
            videoId={getVideoId(shortUrl)}
            index={index}
          />
        ))}
      </div>
    </div>
  );
};

export default Shorts;