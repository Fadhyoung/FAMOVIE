import LandingPage from '@/app/home/components/landingPage';
import Top10 from '@/app/home/components/top10';
import Best3 from '@/app/home/components/best3';
import AllData from '@/app/home/components/allData';
import ReviewSection from '@/app/home/components/reviewSection';
import Link from 'next/link';

export default function HomeComponent() {
  return (
    <>
      <div className="lg:w-full xs:w-fit max-w-[2000px] m-auto flex flex-col gap-20 justify-center items-center bg-white">
        <LandingPage />

        <Best3 />

        {/* BODY */}
        <div className="w-11/12 flex gap-10 ">
          {/* LEFT SIDE */}
          <div className="w-2/3 flex flex-col gap-10 items-center ">
            <Top10 />

            <ReviewSection />

            <AllData />
          </div>
          {/* RIGHT SIDE */}
          <div className="w-1/3 border border-amber rounded-xl"></div>
        </div>

        {/** FOOTER */}
        <div className="w-full p-10 flex gap-20 justify-center items-center foreground2">
          <h1>FAMOVIE HERE</h1>
          <Link className="p-5 rounded-md " href="/test">
            TEST
          </Link>
        </div>
      </div>
    </>
  );
}
