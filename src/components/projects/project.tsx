import "./projects.css";
import image from "../../amol.jpg";

export const Project = () => {
	return (
		<div className="project">
			<img src={image} className="project-image"></img>
			<h4>Card Title</h4>
			<p>
				Some quick example text to build on the card title and make up
				the bulk of the card's content.
			</p>
			<a href="#">Go to project</a>
		</div>
	);
};
