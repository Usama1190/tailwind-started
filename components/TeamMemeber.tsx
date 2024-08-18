import { Inter } from "next/font/google";


export default function TeamMember() {
  return (
    <div className="m-12 flex items-center">
        <img 
        src="https://via.placeholder.com/150" 
        alt="user avatar" 
        className="rounded-full" 
        />

        <div className="ml-6">
            <p className="text-2xl font-bold">Full Name</p>
            <p className="text-lg">Title</p>
        </div>
    </div>
  );
}
