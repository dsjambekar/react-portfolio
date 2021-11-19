import "./about.css";
import image from "../../amol.jpg";
import { Container, Row, Col, Image } from "react-bootstrap";
export const About = () => {
	const logo = require("../../amol.jpg");
	return (
		<div id="about" className="about-section">
			<Container>
				<Row>
					<Col>
						<div className="about-sub-section align-middle">
							<h1>
								Hi, I'm Amol.
								<br className="hidden lg:inline-block" />I love
								to build amazing apps.
							</h1>
							<p className="mb-8 leading-relaxed">
								Actively Looking for Summer Internships | MS
								Computer Science @Binghamton University | Java
								Springboot Microservices Developer | AWS
								Certified Solutions Architect | Containerization
								(Docker + Kubernetes) | DevOps | CICD
							</p>
							<div className="flex justify-center">
								<a href="#contact">Work With Me</a>
								<a href="#projects">See My Past Work</a>
							</div>
						</div>
					</Col>
					<Col xs={6}>
						<Image src={image} fluid className="display-picture" />
					</Col>
				</Row>
				{/* <Row>
					<Col>1 of 3</Col>
					<Col>2 of 3</Col>
					<Col>3 of 3</Col>
				</Row> */}
			</Container>

			{/* <div className="about-sub-section">
				<div>
					<h1>
						Hi, I'm Amol.
						<br className="hidden lg:inline-block" />I love to build
						amazing apps.
					</h1>
					<p className="mb-8 leading-relaxed">
						Actively Looking for Summer Internships | MS Computer
						Science @Binghamton University | Java Springboot
						Microservices Developer | AWS Certified Solutions
						Architect | Containerization (Docker + Kubernetes) |
						DevOps | CICD
					</p>
					<div className="flex justify-center">
						<a href="#contact">Work With Me</a>
						<a href="#projects">See My Past Work</a>
					</div>
				</div>
			</div>
			<div className="sub-section">
				<img src={image} className="display-picture" alt="logo" />
			</div>*/}
		</div>
	);
};
