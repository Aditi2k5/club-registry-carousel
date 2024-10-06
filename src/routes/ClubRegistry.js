import React, { useState } from "react";
import './ClubRegistry.css';
import {FaInstagram} from 'react-icons/fa';
import './Navbar.css';
import Navbar from "./Navbar";


const clubs = [
    { 
        name: 'SKETCH', 
        description: 'Training students who are interested in artistic ability', 
        technical:false,
        faculty:'Mrs. Bennet Praba, Mrs.V.Sathya, Mrs.R.Asha',
        events:'Photo Convention 2.0, Blend Battle, Dimensions, Ignite, Fun with Figma, Coders Call,Tresor Quest',
        logo: '/logos/SKETCH.jpeg',
        instagram: 'https://www.instagram.com/cyborg_club_srm_ist/',
        applyLink: 'https://yourschool.edu/apply-chess-club'  
    },
    { 
        name: 'CYBORG', 
        description: 'Illustrate on what robotics is, along with the various types of robots',
        technical:true,
        faculty:'Dr.Ballika.J.Chelliah, Mrs.S.VishuDharsini, Rubin Bose',
        events:'Perspective Panorama, Spotlight Saga',
        logo: '/logos/CYBORG.jpg',
        instagram: 'https://www.instagram.com/cyborg_club_srm_ist/',
        applyLink: 'https://yourschool.edu/apply-chess-club'  
    },
    { 
        name: 'INTELLECTS', 
        description: 'Conduct events on various technologies where the topics are beyond the scope of the curriculum and have the better understanding about the topics, hands-on sessions on various technologies such as JavaScript for Gaming Application, Android and iOS Development, Internet of Things etc.',
        technical:true, 
        faculty:' Mr.FeirozKhan.T.H, Ms.S.Aarthi, Ms.V.Preethi', 
        events:'Tech Summit, Game Goblins, Surf Game In',
        logo: '/logos/INTELLECTS.png',
        instagram: 'https://www.instagram.com/cyborg_club_srm_ist/',
        applyLink: 'https://yourschool.edu/apply-chess-club'  
    },
    { 
        name: 'SLUG N PLUG', 
        description: 'From technical progress to personality development, we as a family look into everything and make sure the team manages to happily work together in order to create a better tomorrow for themselves and the world of IT',
        technical:true, 
        domains:'Technical, Content, Design, Marketing Management',
        faculty:'Mrs.C.Aswini, Mrs.A.Vidhyavani', 
        events:'Innovation Quest, Mind wrap, AI Fantasia,Formula AI',
        logo: '/logos/SLUG N PLUG.png',
        instagram: 'https://www.instagram.com/slugnplug/',
        applyLink: 'https://yourschool.edu/apply-chess-club'  
    },
    { 
        name: 'TECH PRO', 
        description: 'Aims in creating and raising the scientific and practical efficiency and help students to achieve their academic goals to overcome technical problems by facilitating the young minds to develop their skills, and give them opportunities to solve technical problems',
        technical:true, 
        domains:'Technical, Design, Management',
        leads:'Tech- Stuti, Design- Auston, Management- Divyasree',
        faculty:' Mr. D. Prabhu, Mr.Raghu', 
        events:'Figma 101,Cyberverse, Innorave, Toastmasters',
        logo: '/logos/TECH PRO.jpeg',
        instagram: 'https://www.instagram.com/techpro_club?igsh=Y3B4eXBhNXQ0dTZ4',
        applyLink: 'https://yourschool.edu/apply-chess-club'
    },
    { 
        name: 'TECH VAYUNA', 
        description: 'A culinary dish of technology, innovation and entrepreneurship', 
        technical:true, 
        domains:'Technical, RND, Content, Media, Design, PR',
        leads:'President- Karthik, Tech- Dhruv, Non-tech- Sabarish',
        faculty:'Mrs.M.S.ShivaPriya , Mrs.A.SharmilaAgnal, Ms.Kalaiarasi S', 
        events:'Technowiz, CodeRed, App Fusion',
        logo: '/logos/TECH VAYUNA.jpg',
        instagram: 'https://www.instagram.com/cyborg_club_srm_ist/',
        applyLink: 'https://yourschool.edu/apply-chess-club'  
    },
    { 
        name: 'LOGIC PLAY', 
        description: 'Increase the creative and logical thinking of students by organizing various events such as seminars, activities etc.',
        technical:false, 
        domains:'Technical, Design, Management, Video Editing, PR',
        leads:'President- Priyanka Chitirala, Tech-Madhumita Jha, Management-Shambhavi Pandey, Design-Akhilesh',
        faculty:' Ms.E.Saraswathi, Mrs.DevaHEma, Ms.Sridevi', 
        events:'Code Craft, Metaplay, Fig Fiesta, App Alchemy, Spark',
        logo: '/logos/LOGIC PLAY.png',
        instagram: 'https://www.instagram.com/cyborg_club_srm_ist/',
        applyLink: 'https://yourschool.edu/apply-chess-club'  
    },
    { 
        name: 'TECH WIZ', 
        description: 'Impart knowledge to students about emerging technologies like Big Data, RTOS, Quantum Computing, etc.',
        technical:true, 
        domains:'Technical, Content, Design, Management',
        leads:'President-Om Daq, Tech-Aayush Barik, Design-Sathvik, Marketing-Anushka Kai, Media- Pratyush',
        faculty:'Mrs.M.S.Antony Vigil, Mrs.Shiela David , M S Minu', 
        events:'Code Web, Pair-a-Thon, Ignite',
        logo: '/logos/TECH WIZ.jpeg',
        instagram: 'https://www.instagram.com/techpro_club?igsh=Y3B4eXBhNXQ0dTZ4',
        applyLink: 'https://forms.gle/fCVsLkFn7ZD1NeHV9'
    },
    { 
        name: 'DEVELOPERS STUDENT CLUB', 
        description: 'For university students to learn mobile and web development skills',
        technical:true, 
        domains:'Technical, Creatives, Operations',
        leads:'President-Prashanth G',
        faculty:'Mrs. Aarthi',
        events:'Stealthcraft, Idea-Forge, Cyberthon, Tech Trivia, Web Development',
        logo: '/logos/DSC.png',
        instagram: 'https://www.instagram.com/techpro_club?igsh=Y3B4eXBhNXQ0dTZ4',
        applyLink: 'https://yourschool.edu/apply-chess-club'
    },
    { 
        name: 'SYNERGIES', 
        description: 'For university students to learn mobile and web development skills',
        technical:true, 
        domains:'competitive Programing, Web Development, Designing, Content Writing, PR and Marketing, Photography',
        leads:'President- Abhay Singh',
        faculty:'Mr.Balika.J.Chellaih, Mr.R.B.Saroo Raj, Mr.D.Prabhu', 
        events:'Funtech, Neuralink',
        logo: '/logos/SYNERGY.png',
        instagram: 'https://www.instagram.com/techpro_club?igsh=Y3B4eXBhNXQ0dTZ4',
        applyLink: 'https://yourschool.edu/apply-chess-club'
    },
    { 
        name: 'CODEZILLA', 
        description: 'Focus on the open-source projects, featuring different club activities and provide different resources',
        technical:true, 
        domains:'Technical, Content, Design, Management',
        leads:'President-Ketaki Shinde, Tech-Sahil, Design-Prathmesh Bajpai, Management and content- Animesh Kumar',
        faculty:'Mrs.S.VishnuDharsini', 
        events:'Codequest, Web It Up, 30 days of code, Autothrole, IOTcon',
        logo: '/logos/CODEZILLA.png',
        instagram: 'https://www.instagram.com/techpro_club?igsh=Y3B4eXBhNXQ0dTZ4',
        applyLink: 'https://yourschool.edu/apply-chess-club'
    },
    { 
        name: 'ANDROPEDIA', 
        description: 'Application oriented community at SRM University, which aims at nurturing students by making them aware of current trends in technology',
        technical:true, 
        domains:'Technical, Content, Design, Management',
        faculty:'Mr.S.Arun Kumar, Ms.P.Adlene Ebenezer, Ms.S.Nandhini', 
        logo: '/logos/ANDROPEDIA.png',
        instagram: 'https://www.instagram.com/techpro_club?igsh=Y3B4eXBhNXQ0dTZ4',
        applyLink: 'https://yourschool.edu/apply-chess-club'
    },
    { 
        name: 'National Service Scheme(NSS)', 
        description: 'Mainly focused on Community Development Services, Social Services, Environmental Awareness Programs, Health Awareness Programs and Technology Transfer Programs', 
        technical:false, 
        leads:'President- Gireesh',
        events:'Blood Donation, Dental Camp',
        logo: '/logos/NSS.png',
        instagram: 'https://www.instagram.com/techpro_club?igsh=Y3B4eXBhNXQ0dTZ4',
        applyLink: 'https://yourschool.edu/apply-chess-club'
    },
    { 
        name: 'GAMECOM', 
        description: 'Train students in various aspects of game engineering like Game Development, Animation and Multimedia',
        technical:true, 
        domains:'Technical, Content, Design, Management',
        faculty:'Ms.Caroline El Fiorenza, Mrs.R.Angeline, Mr.M.Prabhu, Ms.S.Rajeshwari', 
        events:'T³,Binary Brawl, Call of Duty Mobile,Genshin Impact',
        logo: '/logos/GAMECOM.png',
        instagram: 'https://www.instagram.com/techpro_club?igsh=Y3B4eXBhNXQ0dTZ4',
        applyLink: 'https://yourschool.edu/apply-chess-club'
    },
    { 
        name: 'CODEKRAFTERS', 
        description: 'The perfect destination for programmers, content writers, developers, designers, and innovators who have the potential to brainstorm new and creative ideas',
        technical:true, 
        domains:'Technical, Content, Design, Marketing Management',
        leads:'Technical- Stuti, Design- Auston, Management- Divyasree',
        events:'Figma 101,Cyberverse, Innorave, Toastmasters',
        logo: '/logos/CODEKRAFTERS.png',
        instagram: 'https://www.instagram.com/techpro_club?igsh=Y3B4eXBhNXQ0dTZ4',
        applyLink: 'https://yourschool.edu/apply-chess-club'
    },
    { 
        name: 'LITERARY CLUB', 
        description: 'Help the students identify and groom their LSRW skills',
        technical:false, 
        domains:'Content, Design, Events, PR',
        leads:'President- Varsha Anbumani, Content- Marilyn Judith, Design- Kaviya Priya, PR - Vidhiya Shri, Events- Ayshaniya',
        faculty:'',
        events:'CineTalks, Book Review',
        logo: '/logos/LITERARY.png',
        instagram: 'https://www.instagram.com/techpro_club?igsh=Y3B4eXBhNXQ0dTZ4',
        applyLink: 'https://yourschool.edu/apply-chess-club'
    },
    { 
        name: 'CHIPSET', 
        description: 'To develop the industry related applications and enhance the students to develop industry related project work, especially in hacking & Robotics making White hackers',
        technical:false, 
        domains:'Technical, Content, Design, Marketing Management',
        faculty:'Mr.S.P.Maniraj, Mr.Gowtham Sethupathi', 
        events:'',
        llogo: '/logos/CHIPSET.png',
        instagram: 'https://www.instagram.com/techpro_club?igsh=Y3B4eXBhNXQ0dTZ4',
        applyLink: 'https://yourschool.edu/apply-chess-club'
    },

    { 
        name: 'FOREIGN LANGUAGE CLUB', 
        description: 'Express your creativity through various art mediums',
        technical:false, 
        domains:'Content, Design, Events, PR, Media',
        leads:'President-Charanya R, Design-Harsshita S, Content- Aishwarya R, PR- Abirami S, Events- Ruhi Fatima, Media- Vikram Rakshit',
        events:'Foreign Language Fest',
        logo: '/logos/FLC.png',
        instagram: 'https://www.instagram.com/techpro_club?igsh=Y3B4eXBhNXQ0dTZ4',
        applyLink: 'https://forms.gle/xYANVt7mzAWbUP3t5'
    },
    { 
        name: 'JOURNAL CLUB', 
        description: 'Motivate the students to create a patent and develop working model based on the latest ideas with the help of the faculties',
        technical:false, 
        domains:'Events, Content, Design, PR',
        faculty:'Dr.SenthilSelvi, Dr.Rajee, Mrs.Kalaiarasi', 
        instagram: 'https://www.instagram.com/flc_srmist_rmp_?igsh=bG9vaGRxM212eG00',
        applyLink: 'https://yourschool.edu/apply-chess-club'
    },
    { 
        name: 'CODECHEF', 
        description: 'Create a platform to help programmers make it big in the world of algorithms and computer programming',
        technical:true, 
        faculty:'Mrs.Sabitha P, Mrs.S.Priya', 
        logo: '/logos/CODECHEF.jpg',
        instagram: 'https://www.instagram.com/techpro_club?igsh=Y3B4eXBhNXQ0dTZ4',
        applyLink: 'https://yourschool.edu/apply-chess-club'
    },
    { 
      name: 'FEMCODES', 
      description: 'Create a platform to help programmers make it big in the world of algorithms and computer programming',
      technical:true, 
      faculty:'Mrs.Sabitha P, Mrs.S.Priya', 
      logo: '/logos/FEMCODES.png',
      instagram: 'https://www.instagram.com/techpro_club?igsh=Y3B4eXBhNXQ0dTZ4',
      applyLink: 'https://yourschool.edu/apply-chess-club'
  }
]

const ClubCard = ({ club }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const toggleFlip = () => setIsFlipped(!isFlipped);


  return (
    <div className={`club-card ${isFlipped ? 'flipped' : ''}`} onClick={toggleFlip}>
      <div className="card-inner">
        <div className="card-front">
          <div className={`club-type ${club.type}`}>{clubs.type}</div>
          <img src={club.logo} className="club-logo" />
          <h2 className="club-name">{club.name}</h2>
          <button className="flip-button">Know More</button>
        </div>
        <div className="card-back">
          <h2>{club.name}</h2>
          <p><strong>Description:</strong> {club.description}</p>
          <p><strong>Events:</strong> {club.events}</p>
          <p><strong>Faculty In-charge:</strong> {club.faculty}</p>
          <p><strong>Team Leads:</strong> {club.leads}</p>
          <p><strong>Domains:</strong> {club.domains}</p>
          <div className="social-media">
            <p><strong>Socials: {club.instagram && <a href={club.instagram} target="_blank" rel="noopener noreferrer"><FaInstagram /></a>}</strong></p>
          </div>
          <a href="/registration-form" className="apply-button">Apply Now</a>
          <button className="flip-button">Flip Back</button>
        </div>
      </div>
    </div>
  );
};
  
const ClubRegistry = () => {
  const [filter, setFilter] = useState('all');
  const filteredClubs = filter === 'all'
    ? clubs
    : clubs.filter(club => club.name === filter);

  return (
    <div>
      <Navbar setFilter={setFilter} />
      <div className="club-list">
        {filteredClubs.map((club, index) => (
          <ClubCard key={index} club={club} />
        ))}
      </div>
    </div>
  );
};
  

export default ClubRegistry;