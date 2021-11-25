import "./App.css";
import { About } from "./components/about/about";
import { Projects } from "./components/projects/projects";
import { Testimonals } from "./components/testimonals/testimonals";
import { Contact } from "./components/contact/contact";
import { Skills } from "./components/skills/skills";
import { Navbar, Nav, NavDropdown, Container } from "react-bootstrap";

import { BsFillPeopleFill, BsCodeSlash, BsGearFill } from "react-icons/bs";
// import { Navbar } from "./components/navbar/navbar";
import { useEffect } from "react";

function App() {
	return (
		<div className="App">
			<Navbar bg="dark" variant="dark" expand="lg" fixed="top">
				<Container>
					<Navbar.Brand href="#about">Amol Kirtane</Navbar.Brand>
					<Navbar.Toggle aria-controls="basic-navbar-nav" />
					<Navbar.Collapse id="basic-navbar-nav">
						<Nav className="me-auto">
							<Nav.Link href="#projects">Projects</Nav.Link>
							<Nav.Link href="#skills">Skills</Nav.Link>
							<Nav.Link href="#testimonals">Testimonals</Nav.Link>
							<Nav.Link href="#contact">Hire Me</Nav.Link>
						</Nav>
					</Navbar.Collapse>
				</Container>
			</Navbar>

			<About></About>
			<Projects />
			<Skills />
			<Testimonals />
			{/* <Contact /> */}
			<div className="temp-contact">
				You can reach me at{" "}
				<a href="mailto:kirtaneamol@gmail.com">kirtaneamol@gmail.com</a>
			</div>
		</div>
	);
}

export default App;
