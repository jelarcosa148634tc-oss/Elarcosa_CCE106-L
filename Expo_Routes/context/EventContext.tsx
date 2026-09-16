import React, { createContext, useContext, useState } from "react";

export type Event = {
  id: string;
  title: string;
  category: string;
  dateTime: string;
  venue: string;
  joined: boolean;
};

const initialEvents: Event[] = [
  {
    id: "1",
    title: "Campus Coding Workshop",
    category: "Academic",
    dateTime: "September 20, 2026 • 9:00 AM",
    venue: "Computer Laboratory 1",
    joined: false,
  },
  {
    id: "2",
    title: "Basketball Tournament",
    category: "Sports",
    dateTime: "September 21, 2026 • 2:00 PM",
    venue: "University Gym",
    joined: true,
  },
  {
    id: "3",
    title: "Tech Career Talk",
    category: "Academic",
    dateTime: "September 23, 2026 • 10:00 AM",
    venue: "Audio Visual Room",
    joined: false,
  },
  {
    id: "4",
    title: "Campus Music Festival",
    category: "Entertainment",
    dateTime: "September 25, 2026 • 5:00 PM",
    venue: "University Open Grounds",
    joined: false,
  },
  {
    id: "5",
    title: "Student Leadership Seminar",
    category: "Academic",
    dateTime: "September 27, 2026 • 1:00 PM",
    venue: "Student Activity Center",
    joined: false,
  },
  {
    id: "6",
    title: "Volleyball Friendly Match",
    category: "Sports",
    dateTime: "September 29, 2026 • 3:00 PM",
    venue: "University Gym",
    joined: false,
  },
];

type EventContextType = {
  events: Event[];
  toggleJoin: (id: string) => void;
  getEvent: (id: string) => Event | undefined;
  totalEvents: number;
  joinedEvents: number;
  upcomingEvents: number;
};

const EventContext = createContext<EventContextType | undefined>(undefined);

export function EventProvider({ children }: { children: React.ReactNode }) {
  const [events, setEvents] = useState<Event[]>(initialEvents);

  const toggleJoin = (id: string) => {
    setEvents((currentEvents) =>
      currentEvents.map((event) =>
        event.id === id
          ? {
              ...event,
              joined: !event.joined,
            }
          : event,
      ),
    );
  };

  const getEvent = (id: string) => {
    return events.find((event) => event.id === id);
  };

  const totalEvents = events.length;

  const joinedEvents = events.filter((event) => event.joined).length;

  const upcomingEvents = events.length;

  return (
    <EventContext.Provider
      value={{
        events,
        toggleJoin,
        getEvent,
        totalEvents,
        joinedEvents,
        upcomingEvents,
      }}
    >
      {children}
    </EventContext.Provider>
  );
}

export function useEvents() {
  const context = useContext(EventContext);

  if (!context) {
    throw new Error("useEvents must be used inside EventProvider");
  }

  return context;
}
