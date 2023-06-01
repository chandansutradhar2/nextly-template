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
      events: getAllEvents(),
    },
  };
}
