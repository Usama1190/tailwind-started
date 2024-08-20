import { Inter } from "next/font/google";

export default function Subscribe() {
  return (
    <div className="flex justify-center">
        <div className="flex justify-center w-9/12">
            <input type="email" placeholder="Email" className="flex flex-grow border-solid border-black border-2" />
            <button className="bg-blue-500 px-6 py-4 text-gray-200 rounded-md">Subscribe</button>
        </div>
    </div>
    
  );
}
