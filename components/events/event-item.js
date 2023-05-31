import Head from "next/head";

export default function EventItem({ event }) {
  return (
    <>
      <Head>
        <title>{event.title}</title>
        <meta name="description" content={event.description} />
      </Head>
      <div className="p-6 mb-6 max-w-sm mx-auto w-80 h-32 bg-white rounded-sm shadow-lg flex items-center space-x-4">
        <div className="shrink-0">
          <img className="h-12 w-12" src={event.imageUrl} alt={event.title} />
        </div>
        <div>
          <div className="text-xl font-medium text-black">{event.title}</div>
          <p className="text-slate-500">{event.description}</p>
        </div>
      </div>
    </>
  );
}
