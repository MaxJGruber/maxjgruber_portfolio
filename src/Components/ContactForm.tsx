import { useState } from "react";
import { submitForm } from "../ApiHandlers/wufooApi";
import { MailIcon, PhoneIcon } from "@heroicons/react/outline";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faGithubSquare,
  faMedium,
} from "@fortawesome/free-brands-svg-icons";

import contentLanguage from "../Redux/languageContent";
import Notification from "../Components/Notification";

export default function ContactForm() {
  const [form, setForm] = useState<Record<string, any>>({});
  const [sentStatus, setSentStatus] = useState<Boolean | null>(null);

  function handleChange(e: Record<string, any>) {
    const newForm: Record<string, any> = { ...form };
    const value = e.target.value;
    const key = e.target.name;
    newForm[key] = value;
    console.log(newForm);
    setForm((form) => (form = newForm));
  }

  async function handleSubmit(
    e: Record<string, any>
  ): Promise<Record<string, any> | undefined> {
    e.preventDefault();
    const response = await submitForm(form);
    console.log(response);
    response && response.status === 201
      ? setSentStatus(true)
      : setSentStatus(false);
    setTimeout(() => {
      setSentStatus(null);
    }, 5000);
    return response;
  }

  return (
    <div id="contact-form" className="bg-gray-100">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:py-20 sm:px-6 lg:px-8">
        <div className="relative bg-white shadow-xl">
          <h2 className="sr-only">Contact Me</h2>

          <div className="grid grid-cols-1 lg:grid-cols-3">
            {/* Contact information */}
            <div className="relative overflow-hidden py-10 px-6 bg-dark-logo-blue sm:px-10 xl:p-12">
              <div
                className="absolute inset-0 pointer-events-none sm:hidden"
                aria-hidden="true"
              >
                <svg
                  className="absolute inset-0 w-full h-full"
                  width={343}
                  height={388}
                  viewBox="0 0 343 388"
                  fill="none"
                  preserveAspectRatio="xMidYMid slice"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M-99 461.107L608.107-246l707.103 707.107-707.103 707.103L-99 461.107z"
                    fill="url(#linear1)"
                    fillOpacity=".1"
                  />
                  <defs>
                    <linearGradient
                      id="linear1"
                      x1="254.553"
                      y1="107.554"
                      x2="961.66"
                      y2="814.66"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#fff" />
                      <stop offset={1} stopColor="#fff" stopOpacity={0} />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
              <div
                className="hidden absolute top-0 right-0 bottom-0 w-1/2 pointer-events-none sm:block lg:hidden"
                aria-hidden="true"
              >
                <svg
                  className="absolute inset-0 w-full h-full"
                  width={359}
                  height={339}
                  viewBox="0 0 359 339"
                  fill="none"
                  preserveAspectRatio="xMidYMid slice"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M-161 382.107L546.107-325l707.103 707.107-707.103 707.103L-161 382.107z"
                    fill="url(#linear2)"
                    fillOpacity=".1"
                  />
                  <defs>
                    <linearGradient
                      id="linear2"
                      x1="192.553"
                      y1="28.553"
                      x2="899.66"
                      y2="735.66"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#fff" />
                      <stop offset={1} stopColor="#fff" stopOpacity={0} />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
              <div
                className="hidden absolute top-0 right-0 bottom-0 w-1/2 pointer-events-none lg:block"
                aria-hidden="true"
              >
                <svg
                  className="absolute inset-0 w-full h-full"
                  width={160}
                  height={678}
                  viewBox="0 0 160 678"
                  fill="none"
                  preserveAspectRatio="xMidYMid slice"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M-161 679.107L546.107-28l707.103 707.107-707.103 707.103L-161 679.107z"
                    fill="url(#linear3)"
                    fillOpacity=".1"
                  />
                  <defs>
                    <linearGradient
                      id="linear3"
                      x1="192.553"
                      y1="325.553"
                      x2="899.66"
                      y2="1032.66"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#fff" />
                      <stop offset={1} stopColor="#fff" stopOpacity={0} />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
              <h3 className="text-lg font-medium text-white">
                {contentLanguage().contactForm.title}
              </h3>
              {contentLanguage().contactForm.intro.map((text, i) => (
                <p className="mt-6 text-base text-indigo-50 max-w-3xl" key={i}>
                  {text}
                </p>
              ))}
              <dl className="mt-8 space-y-6">
                <dt>
                  <span className="sr-only">Phone number</span>
                </dt>
                <dd className="flex text-base text-indigo-50 hover:text-white">
                  <PhoneIcon
                    className="flex-shrink-0 w-6 h-6 text-indigo-200"
                    aria-hidden="true"
                  />
                  <a href="tel:0698202959">
                    <span className="ml-3">+33 (0) 6 98 20 29 59</span>
                  </a>
                </dd>
                <dt>
                  <span className="sr-only">Email</span>
                </dt>
                <dd className="flex text-base text-indigo-50 hover:text-white">
                  <MailIcon
                    className="flex-shrink-0 w-6 h-6 text-indigo-200"
                    aria-hidden="true"
                  />
                  <a href="mailto:maxjgruber@gmail.com">
                    <span className="ml-3">maxjgruber@gmail.com</span>
                  </a>
                </dd>
              </dl>
              <ul className="mt-8 flex space-x-12">
                <li>
                  <a
                    className="text-indigo-200 hover:text-indigo-100"
                    href="https://www.linkedin.com/in/maximilian-j-gruber/"
                  >
                    <span className="sr-only">Linkedin</span>
                    <FontAwesomeIcon icon={faLinkedin} className="text-3xl" />
                  </a>
                </li>
                <li>
                  <a
                    className="text-indigo-200 hover:text-indigo-100"
                    href="https://github.com/MaxJGruber"
                  >
                    <span className="sr-only">GitHub</span>
                    <FontAwesomeIcon
                      icon={faGithubSquare}
                      className="text-3xl"
                    />
                  </a>
                </li>
                <li>
                  <a
                    className="text-indigo-200 hover:text-indigo-100"
                    href="https://github.com/MaxJGruber"
                  >
                    <span className="sr-only">Medium</span>
                    <FontAwesomeIcon icon={faMedium} className="text-3xl" />
                  </a>
                </li>
              </ul>
            </div>

            {/* Contact form */}
            <div className="py-10 px-6 sm:px-10 lg:col-span-2 xl:p-12">
              <h3 className="text-lg font-medium text-gray-900">
                {contentLanguage().contactForm.formTitle}
              </h3>
              <form
                action="#"
                method="POST"
                className="mt-6 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8"
              >
                <div>
                  <label
                    htmlFor="first_name"
                    className="block text-sm font-medium text-gray-900"
                  >
                    {contentLanguage().contactForm.firstName}
                  </label>
                  <div className="mt-1">
                    <input
                      type="text"
                      name="Field1"
                      id="first_name"
                      autoComplete="given-name"
                      onChange={handleChange}
                      className="py-3 px-4 block w-full shadow-sm text-gray-900 focus:ring-medium-logo-blue focus:border-indigo-500 border-gray-300 rounded-md"
                    />
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="last_name"
                    className="block text-sm font-medium text-gray-900"
                  >
                    {contentLanguage().contactForm.lastName}
                  </label>
                  <div className="mt-1">
                    <input
                      type="text"
                      name="Field2"
                      id="last_name"
                      autoComplete="family-name"
                      onChange={handleChange}
                      className="py-3 px-4 block w-full shadow-sm text-gray-900 focus:ring-medium-logo-blue focus:border-indigo-500 border-gray-300 rounded-md"
                    />
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-900"
                  >
                    {contentLanguage().contactForm.email}
                  </label>
                  <div className="mt-1">
                    <input
                      id="email"
                      name="Field3"
                      type="email"
                      autoComplete="email"
                      onChange={handleChange}
                      className="py-3 px-4 block w-full shadow-sm text-gray-900 focus:ring-medium-logo-blue focus:border-indigo-500 border-gray-300 rounded-md"
                    />
                  </div>
                </div>
                <div>
                  <div className="flex justify-between">
                    <label
                      htmlFor="phone"
                      className="block text-sm font-medium text-gray-900"
                    >
                      {contentLanguage().contactForm.phone}
                    </label>
                    <span id="phone-optional" className="text-sm text-gray-500">
                      {contentLanguage().contactForm.optional}
                    </span>
                  </div>
                  <div className="mt-1">
                    <input
                      type="text"
                      name="Field10"
                      id="phone"
                      autoComplete="tel"
                      onChange={handleChange}
                      className="py-3 px-4 block w-full shadow-sm text-gray-900 focus:ring-medium-logo-blue focus:border-indigo-500 border-gray-300 rounded-md"
                      aria-describedby="phone-optional"
                    />
                  </div>
                </div>
                <div className="sm:col-span-2">
                  <label
                    htmlFor="subject"
                    className="block text-sm font-medium text-gray-900"
                  >
                    {contentLanguage().contactForm.subject}
                  </label>
                  <div className="mt-1">
                    <input
                      type="text"
                      name="Field33"
                      id="subject"
                      onChange={handleChange}
                      className="py-3 px-4 block w-full shadow-sm text-gray-900 focus:ring-medium-logo-blue focus:border-indigo-500 border-gray-300 rounded-md"
                    />
                  </div>
                </div>
                <div className="sm:col-span-2">
                  <div className="flex justify-between">
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-gray-900"
                    >
                      {contentLanguage().contactForm.message}
                    </label>
                  </div>
                  <div className="mt-1">
                    <textarea
                      id="message"
                      name="Field27"
                      rows={4}
                      onChange={handleChange}
                      className="py-3 px-4 block w-full shadow-sm text-gray-900 focus:ring-medium-logo-blue focus:border-indigo-500 border border-gray-300 rounded-md"
                      aria-describedby="message-max"
                      defaultValue={""}
                    />
                  </div>
                </div>
                <div className="sm:col-span-2 sm:flex sm:justify-end">
                  {sentStatus && <Notification success={true} />}
                  {sentStatus === false && <Notification success={false} />}
                  <button
                    type="submit"
                    onClick={handleSubmit}
                    className="mt-2 w-full inline-flex items-center justify-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-dark-logo-blue hover:bg-medium-logo-blue focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-medium-logo-blue sm:w-auto"
                  >
                    {contentLanguage().contactForm.submit}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
