import '../styles/main.css'
import Link from 'next/link'

function CustomError({ statusCode }) {
  return (
    <div className="text-center py-10">
      <figure className="text-center mb-4">
        <img
          alt="Showing a properly cat according the status code"
          width="40%"
          src={`https://http.cat/${statusCode}`}
          className="m-auto"
        />
        <figcaption>
          <h1>{statusCode} page not found</h1>
        </figcaption>
      </figure>
      <Link href="/">
        <button className="bg-teal-500 hover:bg-teal-700 text-white font-bold py-2 px-4 rounded inline-flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 35 25" width="18" height="18"><path fill="white" className="heroicon-ui" d="M5.41 11H21a1 1 0 0 1 0 2H5.41l5.3 5.3a1 1 0 0 1-1.42 1.4l-7-7a1 1 0 0 1 0-1.4l7-7a1 1 0 0 1 1.42 1.4L5.4 11z"/></svg>
          <a>Back to home</a>
        </button>
      </Link>
    </div>
  );
}

function getInitialProps({ res, err }) {
  let statusCode;
  if (res) {
    statusCode = res.statusCode;
  } else if (err) {
    statusCode = err.statusCode;
  } else {
    statusCode = null;
  }
  return { statusCode };
}

CustomError.getInitialProps = getInitialProps;

export default CustomError;