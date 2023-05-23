import { TbMoodConfuzed } from "react-icons/tb";
import { useRouter } from "next/router";

export default function Custom404() {
  const router = useRouter();

  return (
    <div className=" w-100 h-screen top-36 bg-slate-900 left-80 p-8 flex flex-col align-top justify-center">
      <h2 className="text-9xl self-center text-yellow-400 flex">
        4<TbMoodConfuzed className="self-center text-yellow-400" size={100} />4
      </h2>

      <p className="self-center text-white space-x-8 font-light">
        We can't seem to find the page you are looking for
      </p>
      <button
        onClick={() => router.back()}
        className="self-center flex bg-blue-400 text-white font-light my-4  py-2 px-4 rounded">
        Go Back
      </button>
    </div>
  );
}
