// import fs from "fs/promises";
// import path from "path";

import Head from "next/head";
import { useEffect } from "react";

export default function Pricing() {
  const pricing = [];

  useEffect(() => {
    fetch("dummy-backend.json")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        data.pricing.map((d) => {
          pricing.push(d);
        });
      });
  }, []);

  return (
    <>
      <Head>
        <title>Pricing</title>
        <meta name="description" content="pricing information" />
        <meta
          name="keyword"
          content="pricing, pricing calculator, subscription, subscribe, price, rate"
        />
      </Head>
      <div>
        <h1>Pricing</h1>
        {pricing.map((price) => {
          return (
            <div key={price.id}>
              <h2>{price.title} </h2>
              <h3>{price.price}</h3>
              <ul>
                {price.contents.map((content) => {
                  return <li key={content}>{content}</li>;
                })}
              </ul>
            </div>
          );
        })}
      </div>
    </>
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
