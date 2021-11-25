import "./about.css";
import image from "../../amol.jpg";
export const About = () => {
	return (
		<div id="about" className="about-section">
			<div className="about-sub-section">
				<h1>
					Hi, I'm Amol.
					<br />I love to build amazing apps.
				</h1>
				<p className="">
					Actively Looking for Summer Internships | MS Computer
					Science @Binghamton University | Java Springboot
					Microservices Developer | AWS Certified Solutions Architect
					| Containerization (Docker + Kubernetes) | DevOps | CICD
				</p>
				<div>
					<a href="#contact">Work With Me</a>
					<a href="#projects">See My Past Work</a>
				</div>
			</div>
			<div className="about-sub-section">
				<img src={image} className="display-picture" />
			</div>
		</div>
	);
};
