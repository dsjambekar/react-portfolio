import { Button } from "react-bootstrap";
import { BsGearFill } from "react-icons/bs";
import "./skills.css";

export const Skills = () => {
	return (
		<div id="skills" className="section">
			<BsGearFill size={45}></BsGearFill>

			<h1>Skills</h1>

			<div className="skills">
				<Button
					variant="secondary"
					className="btn-skill-secondary"
					size="lg"
				>
					Amazon Web Services
				</Button>
				<Button
					variant="secondary"
					className="btn-skill-secondary"
					size="lg"
				>
					Java
				</Button>
				<Button
					variant="secondary"
					className="btn-skill-secondary"
					size="lg"
				>
					Kubernate
				</Button>
				<Button
					variant="secondary"
					className="btn-skill-secondary"
					size="lg"
				>
					mainframe
				</Button>
				<Button
					variant="secondary"
					className="btn-skill-secondary"
					size="lg"
				>
					Amazon Web Services
				</Button>
				<Button
					variant="secondary"
					className="btn-skill-secondary"
					size="lg"
				>
					Java
				</Button>
				<Button
					variant="secondary"
					className="btn-skill-secondary"
					size="lg"
				>
					Kubernate
				</Button>
				<Button
					variant="secondary"
					className="btn-skill-secondary"
					size="lg"
				>
					mainframe
				</Button>
			</div>
		</div>
	);
};
