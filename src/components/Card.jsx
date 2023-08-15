import Snap from '../assets/me.png'
const Card = () => {
  return (    
      <div className="container">
        <div className="image">
          <img src={Snap} alt="" className="logo" />
        </div>
        <div className="content">
          <div className="title">
            <h1 className="name">Malik Adeoye Oseni</h1>
            <h2 className="job-title">Frontend Developer</h2>
            <p className="contact">immediate contact</p>
            <div className="contact-link">
              <ul>
                <li className="portfolio">
                  <a href="https://malikoseni.github.io/resume-page/">
                    <i className="bx bxs-book-content"></i>
                    Portfolio
                  </a>
                </li>
                <li>
                  <a href="http://linkedin.com/in/malik-oseni-989515138">
                    <i className="bx bxl-linkedin"></i>
                    Linkedin
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="about-section">
            <h1 className="name">About Me</h1>
            <p className="note">
              Front-end Developer with 2+ years of experience. Proven track
              record of delivering high-quality, efficient, and effective
              software solutions. Expert in JavaScript, HTML, CSS, React,
              Node.js, and more. Committed to client satisfaction
              <a href="/src/assets/Malik Adeoye Oseni Resume.pdf"> Resume</a>.
            </p>
          </div>
          <div className="interest-section">
            <h1 className="name">Interest</h1>
            <p className="note">Gaming,Tennis,Drama,Music,Reddit,Swimming.</p>
          </div>
          <div className="social">
            <ul className="socials">
              <li className="social-item">
                <a className="social-link" href="https://github.com/MalikOseni">
                  <i className="bx bxl-github"></i>
                </a>
              </li>
              <li className="social-item">
                <a
                  className="social-link"
                  href="http://linkedin.com/in/malik-oseni-989515138"
                >
                  <i className="bx bxl-linkedin"></i>
                </a>
              </li>
              <li className="social-item">
                <a className="social-link" href="https://twitter.com/hosmaad_">
                  <i className="bx bxl-twitter"></i>
                </a>
              </li>
              <li className="social-item">
                <a className="social-link" href="mailto:osenimalik03@gmail.com">
                  <i className="bx bxs-envelope"></i>
                </a>
              </li>
              <li className="social-item">
                <a className="social-link" href="Tel:+2349072238057">
                  <i className="bx bxs-phone"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
  );
};

export default Card;
