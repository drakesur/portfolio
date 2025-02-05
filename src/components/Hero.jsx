import "./hero.css";
import StackIcon from "tech-stack-icons";

function Hero() {
  return (
    <div className="hero">
      <div className="overlay"></div>
      <div className="hero-content">
        <h1>Drake Sur</h1>
        <p>Web Developer | Data Engineer</p>
        <div className="tech-stack">
          <StackIcon name="python" className="stack-icon" />
          <StackIcon name="js" className="stack-icon" />
          <StackIcon name="reactjs" className="stack-icon" />
          <StackIcon name="html5" className="stack-icon" />
          <StackIcon name="css3" className="stack-icon" />
        </div>
      </div>
    </div>
  );
}

export default Hero;
