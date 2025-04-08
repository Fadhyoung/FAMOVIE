import LandingPage from '@/app/home/components/landingPage';
import Top10 from '@/app/home/components/top10';
import Best3 from '@/app/home/components/best3';
import AllData from '@/app/home/components/allData';
import Link from 'next/link';

export default function HomeComponent() {
  return (
    <>
      <div className="lg:w-full xs:w-fit max-w-[2000px] m-auto grid grid-cols-1 gap-10 justify-center items-center bg-white">
        <LandingPage />

        <Best3 />

        <Top10 />

        <AllData />

        {/** FOOTER */}
        <div className="w-full p-10 flex gap-20 justify-center items-center foreground2">
          <h1>FAMOVIE HERE</h1>
          <Link className="p-5 rounded-md bg-blue-500" href="/test">
            TEST
          </Link>
        </div>
      </div>
    </>
  );
}
