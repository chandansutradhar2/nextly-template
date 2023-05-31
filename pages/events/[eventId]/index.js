import { useRouter } from "next/router";
export default function SelectedEventPage() {
  const router = useRouter();
  console.log(router.query.eventId);
  return (
    <>
      <h2>{props.events.title}</h2>
    </>
  );
}
