import EventItem from "./event-item";
import styles from "./event-list.module.css";

export default function EventList(props) {
  const { events } = props;

  return (
    <div className={styles.container}>
      <h1>All Events</h1>
      {events.map((event) => {
        return <EventItem key={event.id} event={event} />;
      })}
    </div>
  );
}
