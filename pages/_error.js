import '../styles/main.css'

function CustomError({ statusCode }) {
  return (
    <figure className="text-center py-10">
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
  );
}

function getInitialProps({ res, err }) {
  let statusCode;
  // If the res variable is defined it means nextjs
  // is in server side
  if (res) {
    statusCode = res.statusCode;
  } else if (err) {
    // if there is any error in the app it should
    // return the status code from here
    statusCode = err.statusCode;
  } else {
    // Something really bad/weird happen and status code
    // cannot be determined.
    statusCode = null;
  }
  return { statusCode };
}

CustomError.getInitialProps = getInitialProps;

export default CustomError;