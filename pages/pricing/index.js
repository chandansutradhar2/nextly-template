// import fs from "fs/promises";
// import path from "path";

import Head from "next/head";
import { useEffect, useState } from "react";
import { Inter } from "@next/font/google";

const inter = Inter({
  style: "normal",
  weight: ["400", "700"],
  subsets: ["cyrillic-ext", "greek"],
});
export default function Pricing() {
  const [pricing, setPricing] = useState([]);

  useEffect(() => {
    fetch("dummy-backend.json")
      .then((response) => response.json())
      .then((data) => {
        data.pricing.map((d) => {
          setPricing((prev) => [...prev, d]);
        });
        console.log(pricing);
      });
  }, []);

  return (
    <main className={inter.className}>
      <Head>
        <title>Pricing</title>
        <meta name="description" content="pricing information" />
        <meta
          name="keyword"
          content="pricing, pricing calculator, subscription, subscribe, price, rate"
        />
      </Head>

      <div className="flex">
        {pricing.map((price) => {
          return (
            <div
              key={price.id}
              className="max-w-sm rounded overflow-hidden shadow-lg">
              <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">{price.title}</div>
                <h2>{price.price}</h2>
                <p className="text-gray-700 text-base">
                  {price.contents.map((content) => {
                    return <li key={content}>{content}</li>;
                  })}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </main>
  );
}

// export async function getStaticProps() {
//   //all server side functionality goes here
//   console.log("Re-Generating...");
//   const filePath = path.join(process.cwd(), "data", "dummy-backend.json");
//   const jsonData = await fs.readFile(filePath);
//   const data = JSON.parse(jsonData);

//   return {
//     props: {
//       pricing: data.pricing,
//     },
//     revalidate: 600,
//   };
// }
