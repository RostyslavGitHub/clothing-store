import { Link } from "react-router-dom";

const Footer = () => {
  const scrollToTop = () => {
    const c = document.documentElement.scrollTop || document.body.scrollTop;

    if (c > 0) {
      window.requestAnimationFrame(scrollToTop);
      window.scrollTo(0,c - c / 8);
    }
  };

    return (
      <>
        <footer className="footer">
          <div className="footer__email-subscription">
            <h3 className="footer__title">clothing shop®</h3>
            <p className="footer__text">Subscribe to our emails</p>
            <form action="" className="footer__form">
              <input type="text" className="input" placeholder="Email" />
              <button className="footer__send">
                <svg
                  width={26}
                  height={26}
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path
                    fillRule="evenodd"
                    d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"
                  />
                </svg>
              </button>
            </form>
          </div>
          <ul className="footer__link-list">
            <li>
              <a
                className="footer__link"
                href="mailto:forwork.rostislav@gmail.com"
              >
                Contact the developer by email
              </a>
            </li>
            <li>
              <a className="footer__link" href="https://github.com/RostyslavGitHub" target="_blanck" rel="noopener noreferrer">
                GitHub of the developer
              </a>
            </li>
            <li>
              <Link to="/resume" onClick={scrollToTop} className="footer__link" href="Zhuravel Rostyslav's resume.pdf" download>
                The resume of the developer
              </Link>
            </li>
          </ul>
        </footer>
      </>
    );
  };
  
export default Footer;
