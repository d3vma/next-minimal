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