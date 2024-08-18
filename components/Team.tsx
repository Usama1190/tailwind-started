import { Inter } from "next/font/google";
import TeamMember from "./TeamMemeber";

export default function Team() {
  return (
    <div className="flex justify-around flex-wrap">
        <TeamMember />
        <TeamMember />
        <TeamMember />
        <TeamMember />
    </div>
  );
}
