import { Link } from "react-router-dom";

const NotFound = () => (
  <div>
    <h1 className="my-10 font-bold">404 - Not Found!</h1>
    <div className="flex items-center justify-center">
      <div
        className="tenor-gif-embed"
        data-postid="4593632"
        data-share-method="host"
        data-width="50%"
        data-aspect-ratio="1.2244897959183674"
      >
        <a href="https://tenor.com/view/theoffice-stevecarrell-michaelscott-no-godplease-gif-4593632">
          No GIF
        </a>{" "}
        from{" "}
        <a href="https://tenor.com/search/theoffice-gifs">Theoffice GIFs</a>
      </div>
    </div>
    <div className="my-10 font-bold">
      <Link to="/">Go Home</Link>
    </div>
  </div>
);

export default NotFound;
