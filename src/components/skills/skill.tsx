import { FC } from "react";
import "./skills.css";

export const Skill: FC<{ title: string }> = ({ title }) => {
	return <div className="skill">{title}</div>;
};
