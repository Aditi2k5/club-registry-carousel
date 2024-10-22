import React, { useState } from 'react';
import './AddClub.css';

const AddClub = () => {
  const [clubName, setClubName] = useState('');
  const [description, setDescription] = useState('');
  const [events, setEvents] = useState('');
  const [leads, setLeads] = useState('');
  const [domains, setDomains] = useState('');
  const [instagramLink, setInstagramLink] = useState('');
  const [applicationLink, setApplicationLink] = useState('');
  const [logo, setLogo] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Console log the form data (this is where backend logic would go)
    console.log({
      clubName,
      description,
      events,
      leads,
      domains,
      instagramLink,
      applicationLink,
      logo,
    });

    // Reset form after submission
    setClubName('');
    setDescription('');
    setEvents('');
    setLeads('');
    setDomains('');
    setInstagramLink('');
    setApplicationLink('');
    setLogo(null);
  };

  return (
    <div className="add-club-form">
      <h2>Add Club Info</h2>
      <form onSubmit={handleSubmit}>
        <label>Club Name:</label>
        <input
          type="text"
          value={clubName}
          onChange={(e) => setClubName(e.target.value)}
          required
        />

        <label>Description:</label>
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        ></textarea>

        <label>Events:</label>
        <textarea
          value={events}
          onChange={(e) => setEvents(e.target.value)}
          required
        ></textarea>

        <label>Club Leads Info:</label>
        <input
          type="text"
          value={leads}
          onChange={(e) => setLeads(e.target.value)}
          required
        />

        <label>Domains:</label>
        <input
          type="text"
          value={domains}
          onChange={(e) => setDomains(e.target.value)}
          required
        />

        <label>Instagram Link:</label>
        <input
          type="url"
          value={instagramLink}
          onChange={(e) => setInstagramLink(e.target.value)}
        />

        <label>Application Link:</label>
        <input
          type="url"
          value={applicationLink}
          onChange={(e) => setApplicationLink(e.target.value)}
        />

        <label>Upload Logo:</label>
        <input
          type="file"
          accept="image/*"
          onChange={(e) => setLogo(e.target.files[0])}
          required
        />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default AddClub;
