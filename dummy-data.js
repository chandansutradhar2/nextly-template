const CUSTOM_EVENTS = [
  {
    id: 1,
    title: "Clean Coding  for everyone",
    start: new Date(2023, 6, 1, 10, 0, 0),
    end: new Date(2023, 6, 1, 12, 0, 0),
    resourceId: 1,
    description: "best practices for clean coding",
    isFeatured: false,
    imageUrl: "/img/events/clean-coding.jpg",
  },
  {
    id: 2,
    title: "Networking for beginners",
    start: new Date(2023, 6, 1, 10, 0, 0),
    end: new Date(2023, 6, 1, 12, 0, 0),
    resourceId: 2,
    description: "Learn the fundamentals of networking",
    isFeatured: false,
    imageUrl: "/img/events/networking.jpg",
  },
  {
    id: 3,
    title: "How to build a website",
    start: new Date(2023, 6, 1, 10, 0, 0),
    end: new Date(2023, 6, 1, 12, 0, 0),
    resourceId: 3,
    description: "Learn how to build a website from scratch",
    isFeatured: false,
    imageUrl: "/img/events/website.jpg",
  },
  {
    id: 4,
    title: "How to build a mobile app",
    start: new Date(2023, 6, 1, 10, 0, 0),
    end: new Date(2023, 6, 1, 12, 0, 0),
    resourceId: 4,
    description: "Learn how to build a mobile app from scratch",
    isFeatured: false,
    imageUrl: "/img/events/mobile-app.jpg",
  },
  {
    id: 5,
    title: "Angular 16 for beginners",
    start: new Date(2023, 6, 1, 10, 0, 0),
    end: new Date(2023, 6, 1, 12, 0, 0),
    resourceId: 5,
    description: "Learn the fundamentals of Angular 16",
    isFeatured: false,
    imageUrl: "/img/events/angular.jpg",
  },
  {
    id: 6,
    title: "React for beginners",
    start: new Date(2023, 6, 1, 10, 0, 0),
    end: new Date(2023, 6, 1, 12, 0, 0),
    resourceId: 6,
    description: "Learn the fundamentals of React",
    isFeatured: false,
    imageUrl: "/img/events/react.jpg",
  },
];

export function getAllEvents() {
  return CUSTOM_EVENTS;
}

export function getFeaturedEvents() {
  return CUSTOM_EVENTS.filter((event) => event.isFeatured);
}

export function getEventById(id) {
  return CUSTOM_EVENTS.find((event) => event.id === id);
}

export function getFilteredEvents(dateFilter) {
  const { year, month } = dateFilter;
  let filteredEvents = CUSTOM_EVENTS.filter((event) => {
    const eventDate = new Date(event.date);
    return (
      eventDate.getFullYear() === year && eventDate.getMonth() === month - 1
    );
  });
  return filteredEvents;
}
