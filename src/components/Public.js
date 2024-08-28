import { Link } from "react-router-dom";

const Public = () => {
  const content = (
    <section className="public">
      <header>
        <h1>
          Welcome to <span className="nowrap">Dan D. Repairs!</span>
        </h1>
      </header>
      <main className="public__main">
        <p>
          Located in Beautiful Downtown Foo City, Dan D. Repairs provides a
          trained staff ready to meet your tech repair needs.
        </p>
        <address className="public__addr">
          Dan D. Repairs
          <br />
          555 Foo Drive
          <br />
          Foo City, CA 12345
          <br />
          <a href="tel:+15555555555">(555) 555-5555</a>
        </address>
        <br />
        <p>Owner: Dan Davidson</p>
        <section className="public__guide">
          <h2>Guide for Use</h2>
          <p>
            <strong>Note:</strong> This is a demonstration of my MERN stack
            project. Below are credentials to explore different roles:
          </p>
          <ul>
            <li>
              <strong>Admin:</strong>
              <br />
              ID: DanD
              <br />
              Password: dand123
            </li>
            <li>
              <strong>Manager:</strong>
              <br />
              ID: Mark
              <br />
              Password: mark123
            </li>
            <li>
              <strong>Employee:</strong>
              <br />
              ID: Joe
              <br />
              Password: joe123
            </li>
          </ul>
        </section>
      </main>
      <footer>
        <Link to="/login">Employee Login</Link>
      </footer>
    </section>
  );
  return content;
};

export default Public;
