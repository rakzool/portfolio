import { FaLinkedin } from "react-icons/fa";
import { FiArrowUpRight, FiCheck, FiMessageCircle } from "react-icons/fi";
import "./connectPage.css";

interface Recommendation {
  author: string;
  authorDetail: string;
  date: string;
  authorUrl?: string;
  avatarUrl: string;
  quote: string;
}

const RECOMMENDATIONS: Recommendation[] = [
  {
    author: "Manav Kodnani",
    authorDetail: "SDE 3 at Meesho · Worked on the same team",
    date: "August 24, 2026",
    authorUrl: "https://www.linkedin.com/in/manav-kodnani-3048b8163/",
    avatarUrl: "https://unavatar.io/linkedin/manav-kodnani-3048b8163",
    quote:
      "Rahul handled the important desktop migration of valmo unification project where he researched on using mocks, handled re-architecture and using design system and completed deliverables before time. He always listens to peers and shares his own opinions and is always curious and ready to work in challenging environment and thrives in it. He is a great team player that also helps peers in their developments according to best practices and reviews PRs. He will be a great asset to any company. Wishing him the best.",
  },
  {
    author: "Suryansh Gupta",
    authorDetail: "SDE 1 at Meesho · Worked on the same team",
    date: "August 4, 2026",
    authorUrl: "https://www.linkedin.com/in/suryansh-gupta-1a4609232/",
    avatarUrl: "https://unavatar.io/linkedin/suryansh-gupta-1a4609232",
    quote:
      "I had the privilege of working alongside Rahul, a colleague with three years of professional experience, who consistently demonstrated strong technical expertise and served as an invaluable mentor during my tenure. He provided thoughtful guidance on complex technical challenges, shared best practices and expertise. I highly recommend Rahul for any opportunity that values both technical excellence and a genuine commitment to supporting the growth of team members.",
  },
  {
    author: "Ritam Mukherjee",
    authorDetail: "InComm Payments · Professional connection",
    date: "June 30, 2024",
    authorUrl: "https://www.linkedin.com/in/ritam-mukherjee/",
    avatarUrl: "https://unavatar.io/linkedin/ritam-mukherjee",
    quote:
      "I had the privilege of working with Rahul, and I am confident that he is one of most talented front-end engineers to have worked on our team. His skills in React and JavaScript made him an important contributor in our projects. Rahul's commitment to detail and code quality made our applications very simple to understand yet very clean and feature rich for the end user. I highly recommend Rahul for any front-end development role.",
  },
  {
    author: "Mandeep Singh",
    authorDetail: "AI QE Transformation Leader · Managed Rahul directly",
    date: "June 18, 2024",
    authorUrl: "https://www.linkedin.com/in/mandeep-singh-bb432849/",
    avatarUrl: "https://unavatar.io/linkedin/mandeep-singh-bb432849",
    quote: "I am delighted to recommend Rahul for a software engineering position. As a Senior Software Engineer, I have witnessed his outstanding technical skills and problem-solving abilities. Rahul has excelled in using ReactJs, delivering high-quality code and innovative solutions. His communication and collaboration skills are exemplary, making him a valuable asset to any team. I am confident he will excel in any software engineering role.",
  },
  {
    author: "Ashutosh Kumar",
    authorDetail: "Software Engineer at Aurora Energy Research · Worked on the same team",
    date: "June 18, 2024",
    authorUrl: "https://www.linkedin.com/in/raxraj/",
    avatarUrl: "https://unavatar.io/linkedin/raxraj",
    quote:
      "I had the pleasure of working with Rahul, a talented front-end developer on our team. His proficiency in HTML, CSS, JavaScript, and frameworks like React made him a key contributor to our projects. Rahul's attention to detail and ability to produce clean, responsive code ensured our applications were both visually appealing and highly functional. He is a proactive problem-solver and an excellent team player, always ready to collaborate and share his knowledge. I highly recommend Rahul for any front-end development role.",
  },
  {
    author: "Aurangzeb Husain",
    authorDetail: "Senior Associate Technology at Publicis Sapient · Rahul’s mentor",
    date: "June 16, 2024",
    authorUrl: "https://www.linkedin.com/in/aurangzeb-husain/",
    avatarUrl: "https://unavatar.io/linkedin/aurangzeb-husain",
    quote:
      "I had the pleasure of working with Rahul, a talented front-end developer on our team. His proficiency in HTML, CSS, JavaScript, and frameworks like React made him a key contributor to our projects. Rahul's attention to detail and ability to produce clean, responsive code ensured our applications were both visually appealing and highly functional. He is a proactive problem-solver and an excellent team player, always ready to collaborate and share his knowledge. I highly recommend Rahul for any front-end development role.",
  },
];

const ConnectPage = () => {
  return (
  <section className="connect-page" id="connect" aria-labelledby="connect-title">
    <div className="connect-scroll-area" data-vertical-scroll tabIndex={0} role="region" aria-label="LinkedIn recommendations and contact links">
      <header className="connect-header">
        <div>
          <p className="connect-eyebrow"><span>.06 /</span> RECOMMENDATIONS</p>
          <h2 id="connect-title">Good work travels <span>with people.</span></h2>
          <p className="connect-intro">A few words from people I’ve had the chance to build with.</p>
        </div>
        <a className="connect-profile-link" href="https://www.linkedin.com/in/rakzool/" target="_blank" rel="noopener noreferrer">
          <FaLinkedin aria-hidden="true" /> View LinkedIn profile <FiArrowUpRight aria-hidden="true" />
        </a>
      </header>

      <div className="connect-meta" aria-label="Recommendation summary">
        <span><FiMessageCircle aria-hidden="true" /> Recommendations received</span>
        <strong>{RECOMMENDATIONS.length}</strong>
        <span className="connect-meta-note"><FiCheck aria-hidden="true" /> Publicly available: {RECOMMENDATIONS.length}</span>
      </div>

      <div className="connect-desktop-cta">
        <span>Open to thoughtful collaborations and new opportunities.</span>
        <a href="mailto:rahulmob.3607@gmail.com">Let’s connect <FiArrowUpRight aria-hidden="true" /></a>
      </div>

      <div className="recommendations-masonry" aria-label="LinkedIn recommendations">
        <div className="recommendations-track">
        {RECOMMENDATIONS.map((recommendation) => (
          <article className="recommendation-card" key={recommendation.author}>
            <div className="recommendation-topline"><FaLinkedin aria-hidden="true" /><span>LinkedIn recommendation</span></div>
            <blockquote>“{recommendation.quote}”</blockquote>
            <footer className="recommendation-author">
              <span className="recommendation-avatar" aria-hidden="true">
                {recommendation.author.split(" ").map((part) => part[0]).join("")}
                <img src={recommendation.avatarUrl} alt="" loading="lazy" onError={(event) => { event.currentTarget.style.display = "none"; }} />
              </span>
              <span><strong>{recommendation.author}</strong><small>{recommendation.authorDetail}</small><small className="recommendation-date">Recommended {recommendation.date}</small></span>
              {recommendation.authorUrl && <a href={recommendation.authorUrl} target="_blank" rel="noopener noreferrer" aria-label={`Open ${recommendation.author}'s LinkedIn profile`}><FiArrowUpRight aria-hidden="true" /></a>}
            </footer>
          </article>
        ))}
        </div>
      </div>

      <a className="connect-floating-button" href="mailto:rahulmob.3607@gmail.com" aria-label="Let’s connect by email">
        Let’s connect <FiArrowUpRight aria-hidden="true" />
      </a>
    </div>
  </section>
  );
};

export default ConnectPage;
