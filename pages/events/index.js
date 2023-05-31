import EventFilter from "../../components/events/event-filter";
import EventList from "../../components/events/event-list";
import { getAllEvents } from "../../dummy-data";

export default function EventPage(props) {
  return (
    <>
     
      <div className="flex justify-start">
        <EventFilter />
        <EventList events={props.events} />
      </div>
    </>
  );
}

export function getStaticProps() {
  return {
    props: {
      events: [
        {
          id: 1,
          title: "How to build a website",
          resourceId: 1,
          description: "Learn how to build a website from scratch",
        },
        {
          id: 2,
          title: "How to build a mobile app",
          resourceId: 2,
          description: "Learn how to build a mobile app from scratch",
        },
      ],
    },
    revalidate: 10,
  };
}
