import React from "react";
import Container from "./container";
import { Disclosure } from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/24/solid";

const Faq = () => {
  return (
    <Container className="!p-0">
      <div className="w-full max-w-2xl p-2 mx-auto rounded-2xl">
        {faqdata.map((item, index) => (
          <div key={item.question} className="mb-5">
            <Disclosure>
              {({ open }) => (
                <>
                  <Disclosure.Button className="flex items-center justify-between w-full px-4 py-4 text-lg text-left text-gray-800 rounded-lg bg-gray-50 hover:bg-gray-100 focus:outline-none focus-visible:ring focus-visible:ring-indigo-100 focus-visible:ring-opacity-75 dark:bg-trueGray-800 dark:text-gray-200">
                    <span>{item.question}</span>
                    <ChevronUpIcon
                      className={`${
                        open ? "transform rotate-180" : ""
                      } w-5 h-5 text-indigo-500`}
                    />
                  </Disclosure.Button>
                  <Disclosure.Panel className="px-4 pt-4 pb-2 text-gray-500 dark:text-gray-300">
                    {item.answer}
                  </Disclosure.Panel>
                </>
              )}
            </Disclosure>
          </div>
        ))}
      </div>
    </Container>
  );
};

const faqdata = [
  {
    question: "Is this only for students or professional as well?",
    answer:
      "Yes, The course covered under VLearn are categoried under 3 level of expertise (Basic, Intermediate & Advanced). So, it is suitable for students as well as professionals.",
  },
  {
    question: "Are subscription monthly or yearly basis?",
    answer:
      "currently we offer monthly subscription, but you can subscribe to our yearly plan and get 2 months free. ",
  },
  {
    question: "What is monthly subscription charges?",
    answer:
      "our monthly subscription starts at ₹ 299/- per month. You can also subscribe to our yearly plan and get 2 months free. ",
  },
  {
    question: "What I get when I subscribed to a monthly subscription? ",
    answer:
      "You will get access to all the courses under the plan you have enrolled to. You are free to enrolled to any course you wish to build your skillset. You will also have access to new courses which we will frequently put up into VLearn platform. You will also get access to our live interactive sessions. ",
  },
  {
    question: "What is your cancellation policy? ",
    answer:
      "If you're unhappy with your purchase for any reason, you can cancel your subscription anytime. there is no minimum lock in period for your subscription. ",
  },
  {
    question: "Do you offer technical support? ",
    answer:
      "No, we don't offer technical support for your projects. Please purchase a support plan to get 6 months of support.",
  },
];

export default Faq;
