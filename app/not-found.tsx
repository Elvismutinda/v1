import Image from "next/image";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="bg-slate-50 h-screen flex flex-col md:flex-row items-center justify-center m-auto space-y-4 md:space-y-0 md:space-x-32">
      <div className="text-center">
        <h2 className="text-6xl font-bold text-slate-900">404</h2>
        <p className="text-xl my-4 text-gray-600">Uh oh! Page Not Found</p>
        <Link href="/" className='bg-slate-900 text-zinc-200 text-sm hover:bg-slate-800 h-10 py-3 px-4 rounded-md'>
          Go to Home Page
        </Link>
      </div>
      <Image
        src="/images/notfound.svg"
        width={500}
        height={500}
        alt="Page Not Found"
      />
    </div>
  );
}
