import Link from "next/link";
export default function Footer() {
  return (
    <div className="flex text-green-300  bg-linear-to-bl from-stone-950 to-stone-600 px-[5px] border-green-300 border-t-2 items-center mt-auto border-black/10 border-t h-[40px] px-5 ">
        <Link className="mx-auto text-left w-[33%]" href="/">Account Settings</Link>
        <Link className=" mx-auto text-center text-green-300 border-green-500 w-[33%] text-lg border-r-2 border-l-2 rounded-lg px-2" href="/">Login or Create Account</Link>
        <div className=" mx-auto text-right w-[33%]"> mode toggle here</div>
    </div>
  );
}
