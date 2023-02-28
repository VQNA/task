import React from "react";
import "./SideContent.css";
const SideContent = () => {
  return (
    <div className="RightSide">
      <h1>React</h1>
      <div className="Main">
        <h3>Example</h3>
        <a
          href={
            "https://github.com/tastejs/todomvc/tree/gh-pages/examples/react"
          }
          target="_blank"
          rel="noopener noreferrer"
        >
          Source
        </a>
        <h3>React + Backbone.js</h3>
        <a href="/">Demo</a>
        , <span />
        <a
          href={
            "https://github.com/tastejs/todomvc/tree/gh-pages/examples/react-backbone"
          }
          target="_blank"
          rel="noopener noreferrer"
        >
          Source
        </a>
        <h3>Scala.js + React</h3>
        <a href="/">Demo</a>
        , <span />
        <a
          href={
            "https://github.com/tastejs/todomvc/tree/gh-pages/examples/scalajs-react"
          }
          target="_blank"
          rel="noopener noreferrer"
        >
          Source
        </a>
        <h3>TypeSript + React</h3>
        <a href="/">Demo</a>
        , <span />
        <a
          href={
            "https://github.com/tastejs/todomvc/tree/gh-pages/examples/typescript-react"
          }
          target="_blank"
          rel="noopener noreferrer"
        >
          Source
        </a>
        <h3>React + Alt</h3>
        <a href="/">Demo</a>
        , <span />
        <a
          href={
            "https://github.com/tastejs/todomvc/tree/gh-pages/examples/react-alt"
          }
          target="_blank"
          rel="noopener noreferrer"
        >
          Source
        </a>
      </div>

      <hr />

      <div className="Quote">
        <blockquote className="quote_content">
          <p>
            React is a JavaScript library for creating user interfaces. Its core
            principles are declarative code, efficiency, and flexibility. Simply
            specify what your component looks like and React will keep it
            up-to-date when the underlying data changes.
          </p>
        </blockquote>

        <a href={"https://reactjs.org/"}>React</a>
      </div>

      <hr />

      <div className="Information">
        <h3>Official Resources</h3>
        <ul>
          <li className="Info_link">
            <a
              href={"https://reactjs.org/tutorial/tutorial.html"}
              target="_blank"
              rel="noopener noreferrer"
            >
              Tutorial
            </a>
          </li>
          <li className="Info_link">
            <a
              href={
                "https://www.quora.com/profile/PH-487/Posts/React-Under-the-Hood"
              }
              target="_blank"
              rel="noopener noreferrer"
            >
              Philosophy
            </a>
          </li>
          <li className="Info_link">
            <a
              href={"https://reactjs.org/community/support.html"}
              target="_blank"
              rel="noopener noreferrer"
            >
              Support
            </a>
          </li>
          <li className="Info_link">
            <a
              href={
                "https://github.com/facebook/flux/tree/main/examples/flux-todomvc"
              }
              target="_blank"
              rel="noopener noreferrer"
            >
              Flux architecture example
            </a>
          </li>
        </ul>
        <h3>Commmunity</h3>
        <ul>
          <li className="Info_link">
            <a
              href="https://stackoverflow.com/questions/tagged/reactjs"
              target="_blank"
              rel="noopener noreferrer"
            >
              ReactJS on Stack Overflow
            </a>
          </li>
          <li className="Info_link">
            <a
              href={
                "https://groups.google.com/access-error?continue=https://groups.google.com/g/reactjs?pli%3D1"
              }
              target="_blank"
              rel="noopener noreferrer"
            >
              Google Groups Mailing List
            </a>
          </li>
          <li className="Info_link">
            <a
              href={"irc://chat.freenode.net/reactjs"}
              target="_blank"
              rel="noopener noreferrer"
            >
              IRC
            </a>
          </li>
        </ul>
      </div>

      <hr />

      <div className="footer">
        <p>
          If you have other helpful links to share, or find any of the links
          above no longer work, please
          <a
            href="https://github.com/tastejs/todomvc/issues"
            target="_blank"
            rel="noopener noreferrer"
          >
            {" "}
            let us know.
          </a>
        </p>
      </div>
    </div>
  );
};

export default SideContent;
