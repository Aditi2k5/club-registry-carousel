import React, {useState, useEffect} from 'react';
import Modal from './Modal';
import './Homepage.css';

// Import your logo and background image
import logo1 from './logo1-1919x959.jpg';
import backgroundImage from './1584766245phpeMvi5L.jpeg';

const Homepage = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [scale, setScale] = useState(1);

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    useEffect(() => {
      const handleResize = () => {
        const newScale = Math.min(window.innerWidth / 1920, window.innerHeight / 1080);
        setScale(newScale);
      };
  
      window.addEventListener('resize', handleResize);
      handleResize(); // Initial call
  
      return () => window.removeEventListener('resize', handleResize);
    }, []);
  
    return (
      <div className="homepage" style={{ backgroundImage: `url(${backgroundImage})` }}>
        <div className="overlay">
          <div className="content" style={{ transform: `scale(${scale})` }}>
            <h1>Welcome to ClubHub!</h1>
            <p>SRM University, Ramapuram, offers a wide range of student clubs aimed at promoting extracurricular activities, skill development, and fostering a sense of community among students. These clubs cover various interests such as programming, debates, social services, singing, writing, reading, art and much more.
               <br></br>Discover a world of opportunities, make new friends, and pursue your passions through our diverse range of university clubs.</p>
            <button className="login-button" onClick={openModal}>Get Started</button>
            <Modal isOpen={isModalOpen} onClose={closeModal} />
          </div>
          <img src={logo1} alt="Logo 1" className="logo logo1" style={{ transform: `scale(${scale})` }} />
        </div>
      </div>
    );
  };

export default Homepage;