import Head from "next/head";
import Hero from "../components/hero";
import Navbar from "../components/navbar";
import SectionTitle from "../components/sectionTitle";

import { benefitOne, benefitTwo } from "../components/data";
import Video from "../components/video";
import Benefits from "../components/benefits";
import Footer from "../components/footer";
import Testimonials from "../components/testimonials";
import Cta from "../components/cta";
import Faq from "../components/faq";
import PopupWidget from "../components/popupWidget";

const Home = () => {
  return (
    <>
      <Head>
        <title>VLearn - Learn Web Development with ease</title>
        <meta
          name="description"
          content="Vlearn is an online learning platform for anyone wanting to learn web development in an easy and fun way. "
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />
      <Hero />
      
      <SectionTitle
        pretitle="VLearn Benefits"
        title=" Why you should learn from us">
        We have spent 17+ years in web development industry. We know what you
        need to be an expert in web development. We have designed our courses in
        such a way that you will learn everything you need to know to be a web
        developer. We have also designed our courses in a way that you will
        never get bored. We have used the latest technologies to make our
        courses interactive and fun.
      </SectionTitle>
      <Benefits data={benefitOne} />
      <Benefits imgPos="right" data={benefitTwo} />
      <SectionTitle
        pretitle="Watch a video"
        title="Learn how to fullfil your needs">
        This section is to highlight a promo or demo video of your product.
        Analysts says a landing page with video has 3% more conversion rate. So,
        don&apos;t forget to add one. Just like this.
      </SectionTitle>
      <Video />
      <SectionTitle
        pretitle="Testimonials"
        title="Here's what our customers said">
        Testimonails is a great way to increase the brand trust and awareness.
        Use this section to highlight your popular customers.
      </SectionTitle>
      <Testimonials />
      <SectionTitle pretitle="FAQ" title="Frequently Asked Questions">
        We have created a list of Frequently asked questions for you so that you can get your doubts cleared and feel free to contact us if you have any other questions.
        you are still not sure.

      </SectionTitle>
      <Faq />
      <Cta />
      <Footer />
      <PopupWidget />
    </>
  );
};

export default Home;
