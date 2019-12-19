import Link from 'next/link';

const Nav = () => (
  <nav className="navbar navbar-expand-lg navbar-dark bg-primary mb-4">
    <div className="container">
      <a className="navbar-brand" href="#">Next App</a>
      <div className="collapse navbar-collapse">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <Link href="/"><a className="nav-link">Home</a></Link>
          </li>
          <li className="nav-item">
            <Link href="/blog"><a className="nav-link">Blog</a></Link>
          </li>
          <li className="nav-item">
            <Link href="/users"><a className="nav-link">Users</a></Link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
);

export default Nav