import { Link } from "react-router-dom";
import MaxJGruberLogo from "../Assets/MaxJGruber_LOGO.png";
import michaelScottNoGif from "../Assets/michael-scott-no.gif";
import contentLanguage from "../../stores/languageContent";

export default function NotFound() {
  return (
    <div className="bg-white min-h-screen flex flex-col lg:relative">
      <div className="flex-grow flex flex-col">
        <main className="flex-grow flex flex-col bg-white">
          <div className="flex-grow mx-auto max-w-7xl w-full flex flex-col px-4 sm:px-6 lg:px-8">
            <div className="flex-shrink-0 my-auto py-16 sm:py-32 lg:text-left">
              <div className="flex-shrink-0 lg:text-left">
                <a href="/" className="inline-flex">
                  <span className="sr-only">Max J. Gruber Logo</span>
                  <img
                    className="h-30 w-auto logo"
                    src={MaxJGruberLogo}
                    alt="Logo for Maximilian Gruber"
                  />
                </a>
              </div>
              <p className="text-sm font-semibold text-dark-logo-blue uppercase tracking-wide">
                404 error
              </p>
              <h1 className="mt-2 text-4xl font-extrabold text-gray-900 tracking-tight sm:text-5xl">
                {contentLanguage().notFound.title}
              </h1>
              <p className="mt-2 text-base text-gray-500">
                {contentLanguage().notFound.text}
              </p>
              <div className="mt-6">
                <Link
                  to="/"
                  className="text-base font-medium text-dark-logo-blue hover:text-medium-logo-blue"
                >
                  {contentLanguage().notFound.linkText}
                  <span aria-hidden="true"> &rarr;</span>
                </Link>
              </div>
            </div>
          </div>
        </main>
      </div>
      <div className="hidden lg:block lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
        <img
          className="absolute inset-0 h-full w-full object-cover"
          src={michaelScottNoGif}
          alt=""
        />
      </div>
    </div>
  );
}
