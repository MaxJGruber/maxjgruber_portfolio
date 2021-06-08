import charlesLogo from "../Assets/Charles_LOGO.jpg";
import alsLogo from "../Assets/ALS_logo_copy.png";
import marss30Logo from "../Assets/marss30logo.png";

export default function LogoClouds() {
  return (
    <div className="">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-8">
          <h2 className="max-w-md mx-auto text-3xl font-extrabold text-indigo-900 text-center lg:max-w-xl lg:text-left">
            Some of the companies I have worked for lately
          </h2>
          <div className="flow-root self-center mt-8 lg:mt-0">
            <div className="-mt-4 -ml-8 flex flex-wrap justify-between lg:-ml-4">
              <div className="mt-4 ml-8 flex flex-grow flex-shrink-0 justify-center lg:flex-grow-0 lg:ml-4">
                <img className="h-12" src={charlesLogo} alt="Workcation" />
              </div>
              <div className="mt-4 ml-8 flex flex-grow flex-shrink-0 justify-center lg:flex-grow-0 lg:ml-4">
                <img className="h-12" src={alsLogo} alt="Tuple" />
              </div>
              <div className="mt-4 ml-8 flex flex-grow flex-shrink-0 justify-center lg:flex-grow-0 lg:ml-4">
                <img className="h-12" src={marss30Logo} alt="Level" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
