import React, { useState } from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import './CalendarPage.css';
import { Tooltip } from 'react-tooltip';
import Navbar from './CalendarNav'; // Adjust the import path as necessary

// Localizer for the calendar
const localizer = momentLocalizer(moment);

const events = [
  {
    title: 'Diwali Celebrations 2K24',
    start: new Date(2024, 9, 29, 14, 0),
    end: new Date(2024, 9, 29, 16, 0),
    location: 'FRONT OF ADMIN BLOCK',
    description: '',
    image: './logos/diwali2k24.jpg'
  }
];

const CalendarPage = () => {
  const [selectedEvent, setSelectedEvent] = useState(null);

  const handleEventClick = (event) => {
    setSelectedEvent(event);
  };

  return (
    <div className="calendar-page">
      <Navbar />
      <div className="calendar-container">
        <Calendar
          localizer={localizer}
          events={events}
          startAccessor="start"
          endAccessor="end"
          style={{ height: "calc(100vh - 60px)", width: "100vw" }} // Adjust height to account for navbar
          onSelectEvent={handleEventClick}
          popup
          views={['month']}
          eventPropGetter={(event) => ({
            style: {
              backgroundColor: '#000000', // Updated color for events
              color: '#ffff',
              borderRadius: '5px',
              padding: '1px',
              cursor: 'pointer'
            }
          })}
          components={{
            event: ({ event }) => (
              <div
                data-tooltip-id="event-tooltip"
                data-tooltip-content={event.description}
              >
                {event.title}
              </div>
            )
          }}
        />
        <Tooltip id="event-tooltip" place="top" effect="solid" />

        {selectedEvent && (
          <div className="event-details-modal">
            <button className="close-button" onClick={() => setSelectedEvent(null)}>X</button>
            {selectedEvent.image && (
      <img src={selectedEvent.image} alt={`${selectedEvent.title} poster`} className="event-poster" />
    )}
          </div>
        )}
      </div>
    </div>
  );
};

export default CalendarPage;
