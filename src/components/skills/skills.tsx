import { BsGearFill } from "react-icons/bs";
import { Skill } from "./skill";
import "./skills.css";

export const Skills = () => {
	return (
		<div id="skills" className="section">
			<BsGearFill size={45}></BsGearFill>

			<h1>Skills</h1>

			<div className="skills">
				<Skill title="Python"></Skill>
				<Skill title="Python"></Skill>
				<Skill title="Python"></Skill>
				<Skill title="Python"></Skill>
			</div>
		</div>
	);
};
