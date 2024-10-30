import React, { useState } from "react";
import './ClubRegistry.css';
import { FaInstagramSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { RxExternalLink } from "react-icons/rx";
import Navbar from "./HomeNavbar";

const clubs = [
    { 
        id:1,
        name: 'SKETCH', 
        description: 'Training students who are interested in artistic ability', 
        type:'technical',
        domains:'Design, Media, Content, PR, Marketing, R&D',
        events:'No event as of now',
        logo: '/logos/SKETCH.jpeg',
        leads:'President:Shanjo,Vice-President:Adesh, Marketing Lead:Monica',
        instagram: 'https://www.instagram.com/cyborg_club_srm_ist/',
        linkedin:'https://www.linkedin.com/company/sketch-srm/posts/?feedView=all',
        applyLink: 'https://yourschool.edu/apply-chess-club',
        isRecruiting:false
    },
    { 
        name: 'CYBORG', 
        id:2,
        description: 'Illustrate on what robotics is, along with the various types of robots',
        type:'technical',
        events:'No event as of now',
        leads:'President: Othi Raja, Vice President: Vinay Medida, Secretary: Sanjaai',
        logo: '/logos/CYBORG.jpg',
        instagram: 'https://www.instagram.com/cyborg_club_srm_ist/',
        linkedin:'https://www.linkedin.com/company/cyborg-club-srm/',
        applyLink: 'https://yourschool.edu/apply-chess-club',
        isRecruiting:false
    },
    { 
        name: 'INTELLECTS', 
        id:3,
        description: 'Conduct events on various technologies where the topics are beyond the scope of the curriculum and have the better understanding about the topics, hands-on sessions on various technologies such as JavaScript for Gaming Application, Android and iOS Development, Internet of Things etc.',
        type:'technical', 
        events:'No event as of now',
        logo: '/logos/INTELLECTS.png',
        instagram: 'https://www.instagram.com/cyborg_club_srm_ist/',
        applyLink: 'https://yourschool.edu/apply-chess-club',
        isRecruiting:false  
    },
    { 
        name: 'SLUG N PLUG', 
        id:4,
        description: 'From technical progress to personality development, we as a family look into everything and make sure the team manages to happily work together in order to create a better tomorrow for themselves and the world of IT',
        type:'technical', 
        domains:'Technical, Content, Design, Marketing Management',
        events:'No event as of now',
        logo: '/logos/SLUG N PLUG.png',
        instagram: 'https://www.instagram.com/slugnplug/',
        linkedin:'https://www.linkedin.com/company/slug-n-plug/',
        website:'https://slugnplug.vercel.app/',
        applyLink: 'https://forms.gle/eR57YJVEN8Qhsbmg8',
        isRecruiting:false 
    },
    { 
        name: 'TECH PRO', 
        id:5,
        description: 'Aims in creating and raising the scientific and practical efficiency and help students to achieve their academic goals to overcome technical problems by facilitating the young minds to develop their skills, and give them opportunities to solve technical problems',
        type:'technical', 
        domains:'Technical, Design, Management',
        leads:'Tech- Stuti, Design- Auston, Management- Divyasree',
        events:'No event as of now',
        logo: '/logos/TECH PRO.jpeg',
        instagram: 'https://www.instagram.com/techpro_club?igsh=Y3B4eXBhNXQ0dTZ4',
        linkedin:'https://www.linkedin.com/company/tech-pro-club/',
        applyLink: 'https://yourschool.edu/apply-chess-club',
        isRecruiting:false
    },
    { 
        name: 'TECH VAYUNA', 
        id:6,
        description: 'A culinary dish of technology, innovation and entrepreneurship', 
        type:'technical', 
        domains:'Technical, RND, Content, Media, Design, PR',
        leads:'President- Karthik, Tech- Dhruv, Non-tech- Sabarish',
        events:'No event as of now',
        logo: '/logos/TECH VAYUNA.jpg',
        instagram: 'https://www.instagram.com/tech_vayuna/',
        linkedin:'https://www.linkedin.com/company/techvayuna/?originalSubdomain=in',
        applyLink: 'https://yourschool.edu/apply-chess-club',
        isRecruiting:false 
    },
    { 
        name: 'LOGIC PLAY', 
        id:7,
        description: 'Increase the creative and logical thinking of students by organizing various events such as seminars, activities etc.',
        type:'technical',
        domains:'Technical, Design, Management, Video Editing, PR',
        leads:'President- Priyanka Chitirala, Tech-Madhumita Jha, Management-Shambhavi Pandey, Design-Akhilesh',
        events:'No event as of now',
        logo: '/logos/LOGIC PLAY.png',
        instagram: 'https://www.instagram.com/logic_play/',
        linkedin:'https://www.linkedin.com/company/logic-play/?lipi=urn%3Ali%3Apage%3Ad_flagship3_company%3BGITLIpspTH%2BcTsx8Jjc%2B%2FA%3D%3D',
        applyLink: 'https://yourschool.edu/apply-chess-club',
        isRecruiting:false  
    },
    { 
        name: 'TECH WIZ', 
        id:8,
        description: 'Impart knowledge to students about emerging technologies like Big Data, RTOS, Quantum Computing, etc.',
        type:'technical', 
        domains:'Technical, Content, Design, Management',
        leads:'President-Om Daq, Tech-Aayush Barik, Design-Sathvik, Marketing-Anushka Kai, Media- Pratyush',
        events:'No event as of now',
        logo: '/logos/TECH WIZ.jpeg',
        instagram: 'https://www.instagram.com/techwiz_rmp/',
        linkedin:'https://www.linkedin.com/company/techwiz-srmrmp/?lipi=urn%3Ali%3Apage%3Ad_flagship3_company%3BR%2BSsR0wbRJebAQauAS8oBQ%3D%3D',
        applyLink: 'https://forms.gle/fCVsLkFn7ZD1NeHV9',
        isRecruiting:false
    },
    { 
        name: 'DEVELOPERS STUDENTS CLUB', 
        id:9,
        description: 'For university students to learn mobile and web development skills',
        type:'technical', 
        domains:'Technical, Creatives, Operations',
        leads:'President-Prashanth G',
        events:'No event as of now',
        logo: '/logos/DSC.png',
        instagram: 'https://www.instagram.com/dscsrmrmp/',
        linkedin:'https://www.linkedin.com/company/dsc-srm-ramapuram/?lipi=urn%3Ali%3Apage%3Ad_flagship3_company%3BGITLIpspTH%2BcTsx8Jjc%2B%2FA%3D%3D',
        applyLink: 'https://yourschool.edu/apply-chess-club',
        isRecruiting:false
    },
    { 
        name: 'SYNERGY', 
        id:10,
        description: 'For university students to learn mobile and web development skills',
        type:'technical', 
        domains:'Competitive Programing, Web Development, Designing, Content Writing, PR and Marketing, Photography',
        leads:'President- Abhay Singh',
        events:'No event as of now',
        logo: '/logos/SYNERGY.png',
        instagram: 'https://www.instagram.com/techpro_club?igsh=Y3B4eXBhNXQ0dTZ4',
        applyLink: 'https://yourschool.edu/apply-chess-club',
        isRecruiting:false
    },
    { 
        name: 'CODEZILLA', 
        id:11,
        description: 'Focus on the open-source projects, featuring different club activities and provide different resources',
        type:'technical', 
        domains:'Technical, Content, Design, Management',
        leads:'President-Ketaki Shinde, Tech-Sahil, Design-Prathmesh Bajpai, Management and content- Animesh Kumar',
        events:'No event as of now',
        logo: '/logos/CODEZILLA.png',
        instagram: 'https://www.instagram.com/codezillaclub/',
        linkedin:'https://www.linkedin.com/company/codezillaclub/',
        website:'https://www.codezillaclub.tech/',
        applyLink: 'https://yourschool.edu/apply-chess-club',
        isRecruiting:false
    },
    { 
        name: 'ANDROPEDIA', 
        id:12,
        description: 'Application oriented community at SRM University, which aims at nurturing students by making them aware of current trends in technology',
        type:'technical', 
        domains:'Technical, Content, Design, Management',
        events:'No event as of now',
        logo: '/logos/ANDROPEDIA.png',
        instagram: 'https://www.instagram.com/andropedia_srm.rmp/',
        applyLink: 'https://yourschool.edu/apply-chess-club',
        isRecruiting:false
    },
    { 
        name: 'National Service Scheme(NSS)', 
        id:13,
        description: 'Mainly focused on Community Development Services, Social Services, Environmental Awareness Programs, Health Awareness Programs and Technology Transfer Programs', 
        type:'student', 
        leads:'President- Gireesh',
        events:'No event as of now',
        logo: '/logos/NSS.png',
        instagram: 'https://www.instagram.com/srmist_nss/',
        applyLink: 'https://yourschool.edu/apply-chess-club',
        isRecruiting:false
    },
    { 
        name: 'GAMECOM', 
        id:14,
        description: 'Train students in various aspects of game engineering like Game Development, Animation and Multimedia',
        type:'technical', 
        domains:'Technical, Content, Design, Management',
        events:'No event as of now',
        logo: '/logos/GAMECOM.png',
        linkedin: 'https://www.linkedin.com/company/gamecomclub/',
        applyLink: 'https://yourschool.edu/apply-chess-club',
        isRecruiting:false
    },
    { 
        name: 'CODEKRAFTERS', 
        id:15,
        description: 'The perfect destination for programmers, content writers, developers, designers, and innovators who have the potential to brainstorm new and creative ideas',
        type:'technical',
        domains:'Technical, Content, Design, Marketing Management',
        leads:'Technical- Stuti, Design- Auston, Management- Divyasree',
        events:'No event as of now',
        logo: '/logos/CODEKRAFTERS.png',
        instagram: 'https://www.instagram.com/codekrafterssrm.rmp/',
        linkedin:'https://in.linkedin.com/company/codechef-srmrmp',
        applyLink: 'https://forms.gle/EbJuufCQbZcE4cmS6',
        isRecruiting:false
    },
    { 
        name: 'LITERARY CLUB', 
        id:16,
        description: 'Help the students identify and groom their LSRW skills',
        type:'non-technical', 
        domains:'Content, Design, Events, PR',
        leads:'President- Varsha Anbumani, Content- Marilyn Judith, Design- Kaviya Priya, PR - Vidhiya Shri, Events- Ayshaniya',
        events:'No event as of now',
        logo: '/logos/LITERARY.png',
        instagram: 'https://www.instagram.com/techpro_club?igsh=Y3B4eXBhNXQ0dTZ4',
        linkedin:'https://www.linkedin.com/company/the-literary-club-srmist/?lipi=urn%3Ali%3Apage%3Ad_flagship3_company%3BGITLIpspTH%2BcTsx8Jjc%2B%2FA%3D%3D',
        applyLink: 'https://yourschool.edu/apply-chess-club',
        isRecruiting:false
    },
    { 
        name: 'CHIPSET', 
        id:17,
        description: 'To develop the industry related applications and enhance the students to develop industry related project work, especially in hacking & Robotics making White hackers',
        type:'technical', 
        domains:'Technical, Content, Design, Marketing Management',
        events:'No event as of now',
        logo: '/logos/CHIPSET.png',
        instagram: 'https://www.instagram.com/chipsetsrmrmp/',
        linkedin:'https://www.linkedin.com/company/chipsetsrmramapuram',
        applyLink: 'https://yourschool.edu/apply-chess-club',
        isRecruiting:false
    },

    { 
        name: 'FOREIGN LANGUAGE CLUB', 
        id:18,
        description: 'Express your creativity through various art mediums',
        type:'non-technical', 
        domains:'Content, Design, Events, PR, Media',
        leads:'President-Charanya R, Design-Harsshita S, Content- Aishwarya R, PR- Abirami S, Events- Ruhi Fatima, Media- Vikram Rakshit',
        events:'No event as of now',
        logo: '/logos/FLC.png',
        instagram: 'https://www.instagram.com/flc_srmist_rmp_/',
        linkedin:'https://www.linkedin.com/company/foreign-language-club-srmist/?lipi=urn%3Ali%3Apage%3Ad_flagship3_company%3BGITLIpspTH%2BcTsx8Jjc%2B%2FA%3D%3D',
        applyLink: 'https://forms.gle/xYANVt7mzAWbUP3t5',
        isRecruiting:false
    },
    { 
      name: 'FEMCODES', 
      id:19,
      description: 'Create a platform to help programmers make it big in the world of algorithms and computer programming',
      type:'technical', 
      events:'No event as of now',
      leads:'President: S.Melba, Vice-President: R.B. Vanmathi',
      logo: '/logos/FEMCODES.png',
      instagram: 'https://www.instagram.com/femcodesitsrm/?utm_source=qr&igshid=MzNlNGNkZWQ4Mg%3D%3D',
      linkedin:'https://www.linkedin.com/company/femcodes-srm-rmp',
      applyLink: 'https://yourschool.edu/apply-chess-club',
      isRecruiting:false
    },
    { 
      name: 'GEEKS FOR GEEKS', 
      id:20,
      description: 'Create a platform to help programmers make it big in the world of algorithms and computer programming',
      type:'technical', 
      logo: './logos/GFG.png',
      events:'No event as of now',
      linkedin:'https://www.linkedin.com/company/geeksforgeeks-srm-rmp/',
      applyLink: 'https://yourschool.edu/apply-chess-club',
      isRecruiting:false
    },
    { 
      name: 'CAM O GENICS', 
      id:21,
      description: 'Create a platform to help programmers make it big in the world of algorithms and computer programming',
      type:'non-technical',
      domains: 'Photography, Videography',
      events:'No event as of now',
      leads:'President - Sabari Vasan, Secretary - Saran, Treasurer - Praisy Daffodil, Head of Photography - Vinith Kumar, Head of Videography - Dhinesh Kumar',
      logo: '/logos/CAM O GENICS.png',
      instagram: 'https://www.instagram.com/srmrcog/',
      applyLink: 'https://forms.gle/GCaeQoYkskujBPzs6',
      isRecruiting:false
    },
    { 
      name: 'Computer Society of India(CSI)', 
      id:22,
      description: 'Formed In 1965,CSI Has been Instrumental In Guiding The Indian IT Industry .Today, The CSI has 72 Chapters,511 Student Branches & More Than 100000 Members',
      type:'student',
      events:'No event as of now',
      leads:'Student Coordinators: A.R.Madhesh, Jayesh. D',
      logo: '/logos/CSI.png',
      applyLink: 'https://forms.gle/GCaeQoYkskujBPzs6',
      isRecruiting:false
    },
    {
      name: 'SRM E&T Campus Life', 
      id:23,
      description: 'Society with a stimulating environment for cultural activities, encouraging students to venture beyond the realms of academics',
      type:'student',
      events:'No event as of now',
      leads:'President - Gireesh ',
      logo: '/logos/CAMPUSLIFE.png',
      instagram: 'https://www.instagram.com/srmrcampuslife.fet/',
      applyLink: 'https://forms.gle/GCaeQoYkskujBPzs6',
      isRecruiting:false
    },
    
]

const ClubCard = ({ club }) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const toggleFlip = () => setIsFlipped(!isFlipped);


  return (
    <div className={`club-card ${isFlipped ? 'flipped' : ''}`} onClick={toggleFlip}>
      <div className="card-inner">
        <div className="card-front">
          <span className={`badge ${club.type}`}>{club.type}</span>
          <img src={club.logo} className="club-logo" />
          <h2 className="club-name">{club.name}</h2>
          <button className="flip-button">Know More</button>
          <div className="badges">
        {club.isRecruiting && <span className="recruiting-badge"> Recruiting</span>}
 
      </div>
        </div>
        <div className="card-back">
          <p><strong>Description:</strong><br></br> {club.description}</p>
          <p><strong>Events:</strong><br></br> {club.events}</p>
          {club.leads && (
                <div className="club-leads">
                    <strong>Leads:</strong><br></br> {club.leads}
                </div>
            )}
          {club.domains && (
                <div className="club-domains">
                    <strong>Domains:</strong><br></br> {club.domains}
                </div>
            )}
          <div className="card-actions"> 
            <div className="socials">
            {club.instagram && (
                    <a href={club.instagram} target="_blank" rel="noopener noreferrer" className="instagram-link">
                      <FaInstagramSquare size={50} />
                    </a>
                  )}
                  {club.linkedin && (
                    <a href={club.linkedin} target="_blank" rel="noopener noreferrer" className="linkedin-link">
                      <FaLinkedin size={50} />
                    </a>
                  )}
                  {club.website && (
                    <a href={club.website} target="_blank" rel="noopener noreferrer" className="linkedin-link">
                      <RxExternalLink size={50} />
                    </a>
                  )}
            </div>

          </div>
          <div className="button-container">
          {club.isRecruiting && (
              <a href={club.applyLink} className="apply-button">Apply</a>
            )}
          <button className="flip-button">Back</button>
          </div>
          
        </div>
      </div>
    </div>
  );
};


const ClubRegistry = () => {
  const [filteredClubs, setFilteredClubs] = useState(clubs);  // Show all clubs by default
  
  // Function to filter clubs by type
  const filterClubs = (type) => {
    if (type === 'all') {
      setFilteredClubs(clubs);  // Show all clubs
    } else {
      const filtered = clubs.filter(club => club.type === type);
      setFilteredClubs(filtered);  // Show filtered clubs
    }
  };

  return (
    <div>
      {/* Navbar to filter clubs */}
      <Navbar filterClubs={filterClubs} />

      {/* Display filtered clubs using the ClubCard component */}
      <div className="club-cards">
        {filteredClubs.map(club => (
          <ClubCard key={club.id} club={club} />
        ))}
      </div>
    </div>
  );
};
export default ClubRegistry;