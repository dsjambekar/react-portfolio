import "./projects.css";
import { BsCodeSlash } from "react-icons/bs";
import { Project } from "./project";

export const Projects = () => {
	return (
		<div id="projects" className="section">
			<BsCodeSlash size={50}></BsCodeSlash>

			<h1>Apps I have built</h1>
			<h3>Some details of projects </h3>
			<div className="projects">
				<Project />
				<Project />
				<Project />
				<Project />
				<Project />
			</div>
		</div>
	);
};
