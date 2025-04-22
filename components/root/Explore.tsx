"use client"
import React, { useEffect, useRef, useState } from 'react';

const Explore: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  
  // Video references
  const ldiRef = useRef<HTMLImageElement>(null);
  const ldiIframeRef = useRef<HTMLIFrameElement>(null);

  const sdRef = useRef<HTMLImageElement>(null);
  const sdIframeRef = useRef<HTMLIFrameElement>(null);

  const tarunRef = useRef<HTMLImageElement>(null);
  const tarunIframeRef = useRef<HTMLIFrameElement>(null);

  // Check if we're on mobile
  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkIsMobile();
    window.addEventListener('resize', checkIsMobile);
    
    return () => {
      window.removeEventListener('resize', checkIsMobile);
    };
  }, []);

  const handleClick = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.classList.add("i-frame__visible");
    }
  };
  

  // Generic function to postMessage to pause YouTube videos
  const pauseYouTubeVideo = (iframe: HTMLIFrameElement) => {
    iframe.contentWindow?.postMessage('{"event":"command","func":"pauseVideo","args":""}', '*');
  };

  // Pause all videos when changing slides
  const pauseAllVideos = () => {
    if (ldiIframeRef.current) pauseYouTubeVideo(ldiIframeRef.current);
    if (sdIframeRef.current) pauseYouTubeVideo(sdIframeRef.current);
    if (tarunIframeRef.current) pauseYouTubeVideo(tarunIframeRef.current);
  };

  // Carousel navigation
  const goToNextSlide = () => {
    pauseAllVideos();
    setCurrentSlide((prev) => (prev === carouselItems.length - 1 ? 0 : prev + 1));
  };

  const goToPrevSlide = () => {
    pauseAllVideos();
    setCurrentSlide((prev) => (prev === 0 ? carouselItems.length - 1 : prev - 1));
  };

  useEffect(() => {
    // Setup handlers for LDI video
    const ldiImg = ldiRef.current;
    const ldiIframe = ldiIframeRef.current;
    
    if (ldiImg && ldiIframe) {
      const handleLdiMouseEnter = () => {
        ldiImg.style.display = 'none';
        ldiIframe.style.display = 'block';
      };
      
      const handleLdiMouseLeave = () => {
        pauseYouTubeVideo(ldiIframe);
        ldiImg.style.display = 'block';
        ldiIframe.style.display = 'none';
      };
      
      ldiImg.addEventListener('mouseenter', handleLdiMouseEnter);
      ldiIframe.addEventListener('mouseleave', handleLdiMouseLeave);
      
      // Cleanup event listeners
      return () => {
        ldiImg.removeEventListener('mouseenter', handleLdiMouseEnter);
        ldiIframe.removeEventListener('mouseleave', handleLdiMouseLeave);
      };
    }
  }, []);

  useEffect(() => {
    // Setup handlers for SD video
    const sdImg = sdRef.current;
    const sdIframe = sdIframeRef.current;
    
    if (sdImg && sdIframe) {
      const handleSdMouseEnter = () => {
        sdImg.style.display = 'none';
        sdIframe.style.display = 'block';
      };
      
      const handleSdMouseLeave = () => {
        pauseYouTubeVideo(sdIframe);
        sdImg.style.display = 'block';
        sdIframe.style.display = 'none';
      };
      
      sdImg.addEventListener('mouseenter', handleSdMouseEnter);
      sdIframe.addEventListener('mouseleave', handleSdMouseLeave);
      
      // Cleanup event listeners
      return () => {
        sdImg.removeEventListener('mouseenter', handleSdMouseEnter);
        sdIframe.removeEventListener('mouseleave', handleSdMouseLeave);
      };
    }
  }, []);

  useEffect(() => {
    // Setup handlers for Tarun video
    const tarunImg = tarunRef.current;
    const tarunIframe = tarunIframeRef.current;
    
    if (tarunImg && tarunIframe) {
      const handleTarunMouseEnter = () => {
        tarunImg.style.display = 'none';
        tarunIframe.style.display = 'block';
      };
      
      const handleTarunMouseLeave = () => {
        pauseYouTubeVideo(tarunIframe);
        tarunImg.style.display = 'block';
        tarunIframe.style.display = 'none';
      };
      
      tarunImg.addEventListener('mouseenter', handleTarunMouseEnter);
      tarunIframe.addEventListener('mouseleave', handleTarunMouseLeave);
      
      // Cleanup event listeners
      return () => {
        tarunImg.removeEventListener('mouseenter', handleTarunMouseEnter);
        tarunIframe.removeEventListener('mouseleave', handleTarunMouseLeave);
      };
    }
  }, []);

  // Carousel items for mobile view
  const carouselItems = [
    {
      id: "curiosity-compass",
      content: <img src="/curiosity_compass.svg" alt="curiosity compass" className="w-full" />
    },
    {
      id: "ldi-video",
      content: (
        <div className="relative w-full">
          <img 
            id="LDI" 
            src="/ldi.svg" 
            alt="LDI" 
            ref={ldiRef} 
            style={{ cursor: 'pointer' }} 
            className="w-full"
          />
          <iframe
            id="LDI_iframe"
            className="w-full rounded-lg"
            height="243"
            src="https://www.youtube.com/embed/xhM_Z8m7iNo?enablejsapi=1"
            ref={ldiIframeRef}
            style={{ display: 'none', borderRadius: '10.64px' }}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>
      )
    },
    {
      id: "leadership-journey",
      content: <img src="/leadership journey.svg" alt="Leadership Journey" className="w-full" />
    },
    {
      id: "ubs",
      content: <img src="/ubs.svg" alt="UBS" className="w-full" />
    },
    {
      id: "sd-video",
      content: (
        <div className="relative w-full">
          <img 
            className="w-full" 
            id="SD" 
            src="/SD.svg" 
            alt="SD" 
            ref={sdRef} 
            style={{ cursor: 'pointer' }} 
          />
          <iframe
            id="SD_iframe"
            className="w-full rounded-lg"
            height="289"
            src="https://www.youtube.com/embed/ByyygCNbM7c?enablejsapi=1"
            ref={sdIframeRef}
            style={{ display: 'none', borderRadius: '10.64px' }}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>
      )
    },
    {
      id: "tarun-video",
      content: (
        <div className="relative w-full">
          <img 
            className="w-full"
            id="tarun" 
            src="/tarun1.svg" 
            alt="Tarun Video" 
            ref={tarunRef} 
            style={{ cursor: 'pointer' }} 
          />
          <iframe
            id="tarun_iframe"
            className="w-full rounded-lg"
            height="239"
            src="https://www.youtube.com/embed/Zuv87TkKPB8?enablejsapi=1"
            ref={tarunIframeRef}
            style={{ display: 'none', borderRadius: '10.64px' }}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>
      )
    },
    {
      id: "workshop",
      content: <img src="/workshop.svg" alt="Workshop" className="w-full" />
    }
  ];

  // Mobile Carousel View
  const MobileView = () => (
    <div className="relative w-full px-4 py-8">
      <div className="carousel-container overflow-hidden">
        <div className="w-full">
          {carouselItems[currentSlide].content}
        </div>
      </div>
      
      {/* Navigation controls */}
      <div className="flex justify-between mt-4">
        <button 
          onClick={goToPrevSlide}
          className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-2 px-4 rounded-full"
        >
          <i className="ri-arrow-left-line"></i>
        </button>
        
        {/* Dots indicator */}
        <div className="flex items-center justify-center gap-2">
          {carouselItems.map((_, index) => (
            <button 
              key={index}
              className={`h-3 w-3 rounded-full ${currentSlide === index ? 'bg-blue-600' : 'bg-gray-300'}`}
              onClick={() => {
                pauseAllVideos();
                setCurrentSlide(index);
              }}
            />
          ))}
        </div>
        
        <button 
          onClick={goToNextSlide}
          className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-2 px-4 rounded-full"
        >
          <i className="ri-arrow-right-line"></i>
        </button>
      </div>
    </div>
  );

  // Desktop View (Original Layout)
  const DesktopView = () => (
    <div className="collage">
      <div className="collage__left">
        <div className="collage__left--top">
          <img src="/curiosity_compass.svg" alt="curiosity compass" />
          <img 
            id="LDI" 
            src="/ldi.svg" 
            alt="LDI" 
            ref={ldiRef} 
            style={{ cursor: 'pointer' }} 
          />
          <iframe
            id="LDI_iframe"
            width="519"
            height="243"
            src="https://www.youtube.com/embed/xhM_Z8m7iNo?enablejsapi=1"
            ref={ldiIframeRef}
            style={{ display: 'none', borderRadius: '10.64px' }}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>
        <div className="collage__left--bottom">
          <img src="/leadership journey.svg" alt="Leadership Journey" />
          <img className="small_img" src="/small_img.svg" alt="Small image" />
        </div>
      </div>
      <div className="collage__right">
        <div className="collage__right--top">
          <img src="/ubs.svg" alt="UBS" />
          <img 
            className="large_img" 
            id="SD" 
            src="/SD.svg" 
            alt="SD" 
            ref={sdRef} 
            style={{ cursor: 'pointer' }} 
          />
          <iframe
            id="SD_iframe"
            width="672"
            height="289"
            src="https://www.youtube.com/embed/ByyygCNbM7c?enablejsapi=1"
            ref={sdIframeRef}
            style={{ display: 'none', borderRadius: '10.64px' }}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>
        <div className="collage__right--bottom">
          <img 
            id="tarun" 
            src="/tarun1.svg" 
            alt="Tarun Video" 
            ref={tarunRef} 
            style={{ cursor: 'pointer' }} 
          />
          <iframe
            id="tarun_iframe"
            width="422"
            height="239"
            src="https://www.youtube.com/embed/Zuv87TkKPB8?enablejsapi=1"
            ref={tarunIframeRef}
            style={{ display: 'none', borderRadius: '10.64px' }}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
          <img src="/workshop.svg" alt="Workshop" />
        </div>
      </div>
    </div>
  );

  return (
    <div className="collage_container">
      <h2 className="collage_heading text-center md:text-left px-4 md:px-0">Explore DT Valley</h2>
      {isMobile ? <MobileView /> : <DesktopView />}
    </div>
  );
};

export default Explore;