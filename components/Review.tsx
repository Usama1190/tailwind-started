import { Inter } from "next/font/google";
import TeamMember from "./TeamMemeber";

export default function Review() {
  return (
    <div className="flex flex-col shadow-xl bg-gray-200 w-96 p-8 rounded-xl mt-20 mx-auto">
      <img src="https://res.cloudinary.com/thirus/image/upload/v1629308145/logos/quote-left_tsopjj_zviayy.svg" alt="quotes ican" className="h-10 w-10 mb-12" />
      <p className="mb-6">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Non saepe inventore labore, cum vero ex ipsa commodi nihil ad, deserunt odio quibusdam ab doloremque delectus numquam? Corrupti eos non dolorem veritatis ex, necessitatibus culpa temporibus fugiat, numquam, tempora autem tempore? Asperiores, facilis incidunt? Tempore facilis reprehenderit vitae, praesentium officia excepturi.</p>
      <p className="font-bold text-2xl">Full Name</p>
    </div>
  );
}
