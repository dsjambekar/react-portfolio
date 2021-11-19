import "./projects.css";
import image from "../../amol.jpg";
import { Button, Card } from "react-bootstrap";
import { BsCodeSlash } from "react-icons/bs";

export const Projects = () => {
	return (
		<div id="projects" className="section">
			<BsCodeSlash size={50}></BsCodeSlash>

			<h1>Apps I have built</h1>
			<h3>Some details of projects </h3>
			<div className="projects">
				<Card style={{ width: "18rem", margin: "0 10px" }}>
					<Card.Img variant="top" src={image} />
					<Card.Body>
						<Card.Title>Card Title</Card.Title>
						<Card.Text>
							Some quick example text to build on the card title
							and make up the bulk of the card's content.
						</Card.Text>
						<Button variant="primary">Go somewhere</Button>
					</Card.Body>
				</Card>
				<Card style={{ width: "18rem", margin: "0 10px" }}>
					<Card.Img variant="top" src={image} />
					<Card.Body>
						<Card.Title>Card Title</Card.Title>
						<Card.Text>
							Some quick example text to build on the card title
							and make up the bulk of the card's content.
						</Card.Text>
						<Button variant="primary">Go somewhere</Button>
					</Card.Body>
				</Card>

				<Card style={{ width: "18rem", margin: "0 10px" }}>
					<Card.Img variant="top" src={image} />
					<Card.Body>
						<Card.Title>Card Title</Card.Title>
						<Card.Text>
							Some quick example text to build on the card title
							and make up the bulk of the card's content.
						</Card.Text>
						<Button variant="primary">Go somewhere</Button>
					</Card.Body>
				</Card>
				<Card style={{ width: "18rem", margin: "0 10px" }}>
					<Card.Img variant="top" src={image} />
					<Card.Body>
						<Card.Title>Card Title</Card.Title>
						<Card.Text>
							Some quick example text to build on the card title
							and make up the bulk of the card's content.
						</Card.Text>
						<Button variant="primary">Go somewhere</Button>
					</Card.Body>
				</Card>

				<Card style={{ width: "18rem", margin: "0 10px" }}>
					<Card.Img variant="top" src={image} />
					<Card.Body>
						<Card.Title>Card Title</Card.Title>
						<Card.Text>
							Some quick example text to build on the card title
							and make up the bulk of the card's content.
						</Card.Text>
						<Button variant="primary">Go somewhere</Button>
					</Card.Body>
				</Card>
			</div>
		</div>
	);
};
