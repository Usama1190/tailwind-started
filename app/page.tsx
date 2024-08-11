import Image from "next/image";

export default function Home() {
  return (
    <div className="flex justify-center bg-sky-900">
      <div className="m-4 order-last">
        <Image src={'/Untitled design (1).jpg'} 
        alt="Usama" width={100} height={100}/>
      </div>

      <div className="mx-4 self-center text-center">
        <h1 className="text-6xl font-bold text-zinc-200">Usama Israr</h1>
        <h2 className="text-3xl font-semibold text-zinc-200">Teaching Web3 and Metaverse Classes</h2>
        <button className="my-4 px-4 py-2 border-2 text-zinc-200 border-zinc-200 rounded-lg">Learn More</button>
      </div>
    </div>
  );
}
