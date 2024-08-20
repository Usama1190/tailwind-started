import Image from "next/image";
import CarWheel from "@/components/Wheel";
import CarHeadlight from "@/components/Headlight";
import CarSeats from "@/components/Seats";
import Navbar from "@/components/Navbar";
import Team from "@/components/Team";
import Reviews from "@/components/Reviews";
import Subscribe from "@/components/Subscribe";

export default function Home() {
  return (
    <>
      <Navbar />
      <Team />
      <Reviews />
      <Subscribe />
    </>






    // <div className="flex bg-gray-800 text-gray-300 text-2xl justify-end">
    //   <div className="px-2 mx-4 my-6 hover:font-bold">Home</div>
    //   <div className="px-2 mx-4 my-6 hover:font-bold">About</div>
    //   <div className="px-2 mx-4 my-6 hover:font-bold">Contact</div>
    // </div>







    // <div className="flex">
    //   <div>Home</div>
    //   <div>About</div>
    //   <div>Contact</div>
    // </div>








    // <div>    // v-6
    //   <div className="bg-blue-500 h-24 w-52 hover:scale-150"></div>
    //   <CarWheel />
    //   <CarWheel />
    //   <CarWheel />
    //   <CarWheel />
    //   <CarHeadlight />
    //   <CarHeadlight />
    //   <CarSeats />
    //   <CarSeats />
    //   <CarSeats />
    //   <CarSeats />
    //   <CarSeats />
    // </div>





    // <div>
    //   <div className="bg-blue-500 h-24 w-52 hover:h-32 hover:w-60"></div>
    //   <CarWheel />
    //   <CarWheel />
    //   <CarWheel />
    //   <CarWheel />
    //   <div className="bg-yellow-500 h-5 w-5"></div>
    //   <div className="bg-yellow-500 h-5 w-5"></div>
    // </div>





    // <div>
    //   <div className="bg-blue-500 h-24 w-52"></div>
    //   <div className="bg-black h-12 w-12"></div>
    //   <div className="bg-black h-12 w-12"></div>
    //   <div className="bg-black h-12 w-12"></div>
    //   <div className="bg-black h-12 w-12"></div>
    //   <div className="bg-yellow-500 h-5 w-5"></div>
    //   <div className="bg-yellow-500 h-5 w-5"></div>
    // </div>




    // <div>         // v-5
    //   <p className="text-xs">This is the one with 12px font size.</p>
    //   <p className="text-lg">This is the one with 18px font size.</p>
    //   <p className="text-2xl">This is the one with 24px font size.</p>
    // </div>





    // <div className="flex justify-center bg-sky-900">
    //   <div className="m-4 order-last">
    //     <Image src={'/Untitled design (1).jpg'} 
    //     alt="Usama" width={100} height={100}/>
    //   </div>

    //   <div className="mx-4 self-center text-center">
    //     <h1 className="text-6xl font-bold text-zinc-200">Usama Israr</h1>
    //     <h2 className="text-3xl font-semibold text-zinc-200">Teaching Web3 and Metaverse Classes</h2>
    //     <button className="my-4 px-4 py-2 border-2 text-zinc-200 border-zinc-200 rounded-lg">Learn More</button>
    //   </div>
    // </div>
  );
}
