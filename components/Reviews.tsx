import { Inter } from "next/font/google";
import TeamMember from "./TeamMemeber";
import Review from "./Review";

export default function Reviews() {
  return (
    <div className="flex justify-center flex-wrap">
        <Review />
        <Review />
        <Review />
    </div>
  );
}
