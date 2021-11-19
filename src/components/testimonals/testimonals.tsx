import { BsFillPeopleFill } from "react-icons/bs";
import { Testimonal } from "./testimonal";

export const Testimonals = () => {
	return (
		<div id="testimonals" className="section">
			<BsFillPeopleFill size={45}></BsFillPeopleFill>

			<h1>Testimonals</h1>
			<Testimonal></Testimonal>
			<Testimonal></Testimonal>
			<Testimonal></Testimonal>
		</div>
	);
};
