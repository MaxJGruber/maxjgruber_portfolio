import { MailIcon, PhoneIcon } from "@heroicons/react/outline";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faGithubSquare,
  faMedium,
} from "@fortawesome/free-brands-svg-icons";
import contentLanguage from "stores/languageContent";

export default function SideForForm() {
  return (
    <div>
      {" "}
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
            <FontAwesomeIcon icon={faGithubSquare} className="text-3xl" />
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
  );
}
