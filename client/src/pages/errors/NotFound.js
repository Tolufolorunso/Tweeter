import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="container">
      <h1>404 page</h1>
      <p>
        Go <Link to="/">back home</Link>
      </p>
    </div>
  );
};

export default NotFound;
