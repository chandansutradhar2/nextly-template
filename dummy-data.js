const CUSTOM_EVENTS = [
  {
    id: 1,
    title: "Clean Coding  for everyone",
    start: "23-06-2023 10:00:00",
    end: "23-06-2023 12:00:00",
    categories: ["coding", "programming", "clean code"],
    resourceId: 1,
    description: "best practices for clean coding",
    isFeatured: false,
    imageUrl: "/img/events/clean-coding.jpg",
  },
  {
    id: 2,
    title: "Networking for beginners",
    start: "25-06-2023 10:00:00",
    end: "25-06-2023 12:00:00",
    categories: ["networking", "internet"],
    resourceId: 2,
    description: "Learn the fundamentals of networking",
    isFeatured: false,
    imageUrl: "/img/events/networking.jpg",
  },
  {
    id: 3,
    title: "How to build a website",
    start: "27-06-2023 10:00:00",
    end: "27-06-2023 12:00:00",
    resourceId: 3,
    description: "Learn how to build a website from scratch",
    categories: ["coding", "programming", "website", "development"],
    isFeatured: false,
    imageUrl: "/img/events/website.jpg",
  },
  {
    id: 4,
    title: "How to build a mobile app",
    start: "29-06-2023 10:00:00",
    end: "29-06-2023 12:00:00",
    categories: ["coding", "programming", "mobile", "development"],
    resourceId: 4,
    description: "Learn how to build a mobile app from scratch",
    isFeatured: false,
    imageUrl: "/img/events/mobile.jpg",
  },
  {
    id: 5,
    title: "Angular 16 for beginners",
    start: "01-07-2023 10:00:00",
    end: "01-07-2023 12:00:00",
    resourceId: 5,
    description: "Learn the fundamentals of Angular 16",
    categories: ["coding", "programming", "angular"],
    isFeatured: false,
    imageUrl: "/img/events/angular.jpg",
  },
  {
    id: 6,
    title: "React for beginners",
    start: "03-07-2023 10:00:00",
    end: "03-07-2023 12:00:00",
    resourceId: 6,
    categories: ["coding", "programming", "react"],
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
