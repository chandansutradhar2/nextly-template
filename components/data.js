import {
  FaceSmileIcon,
  ChartBarSquareIcon,
  CursorArrowRaysIcon,
  DevicePhoneMobileIcon,
  AdjustmentsHorizontalIcon,
  SunIcon,
} from "@heroicons/react/24/solid";

import benefitOneImg from "../public/img/benefit-one.png";
import benefitTwoImg from "../public/img/benefit-two.png";

const benefitOne = {
  title: "Online Learning Platform",
  desc: "Our course is desgined to match the cirriculam of your school and boards. this will help you to learn web development & informaiton technology in a fun and easy way.",
  image: benefitOneImg,
  bullets: [
    {
      title: "Increase your score",
      desc: "By taking our courses, you will see an increse in your marksheet.",
      icon: <FaceSmileIcon />,
    },
    {
      title: "Improve computer literacy",
      desc: "From STD 9 to graduation and beyond, our course are degined to target each semester and each segment of your education.",
      icon: <ChartBarSquareIcon />,
    },
    {
      title: "Live Interactive Session",
      desc: "This is not JUST ANOTHER VIDEO COURSE. We have live interactive sessions where you can ask your doubts and get them cleared.",
      icon: <CursorArrowRaysIcon />,
    },
  ],
};

const benefitTwo = {
  title: "Offer more benefits here",
  desc: "You can use this same layout with a flip image to highlight your rest of the benefits of your product. It can also contain an image or Illustration as above section along with some bullet points.",
  image: benefitTwoImg,
  bullets: [
    {
      title: "Mobile Responsive Template",
      desc: "Nextly is designed as a mobile first responsive template.",
      icon: <DevicePhoneMobileIcon />,
    },
    {
      title: "Powered by Next.js & TailwindCSS",
      desc: "This template is powered by latest technologies and tools.",
      icon: <AdjustmentsHorizontalIcon />,
    },
    {
      title: "Dark & Light Mode",
      desc: "Nextly comes with a zero-config light & dark mode. ",
      icon: <SunIcon />,
    },
  ],
};

export { benefitOne, benefitTwo };
