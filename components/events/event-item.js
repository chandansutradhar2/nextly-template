import Head from "next/head";
import Image from "next/image";

export default function EventItem({ event }) {
  return (
    <>
      <Head>
        <title>{event.title}</title>
        <meta name="description" content={event.description} />
      </Head>
      <div className="p-2 mb-2 max-w-sm mx-auto w-9/12 h-56 bg-white rounded-sm shadow-lg flex items-center space-x-4">
        <div className="shrink-0">
          <Image
            className="h-32 w-48"
            src={event.imageUrl}
            alt={event.title}
            width={250}
            height={250}
          />
        </div>
        <div>
          <div className="text-xl font-medium text-black">{event.title}</div>
          <p className="text-slate-500">{event.description}</p>
        </div>
      </div>
    </>
  );
}
