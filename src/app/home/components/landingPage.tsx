'use client';

import { HiExternalLink } from 'react-icons/hi';
import { RiScrollToBottomLine } from 'react-icons/ri';
import { FaExternalLinkAlt } from 'react-icons/fa';
import { OpenLinkButton } from '@/components/Buttons';
import useHome from '@/app/home/hooks';
import Image from 'next/image';
import Typography from '@/components/Typography';
import coverMovies from '@/app/data/coverMovies.json';
import { CoverButton } from '@/app/home/components/coverButtons';

export default function LandingPage() {
  const { t } = useHome();
  return (
    <>
      <div className='w-full h-screen min-h-[600] max-h-[1000] p-2 relative grid grid-cols-2 gap-2 justify-center items-center bg-white'>
        {/** FLOAT ORNAMENT */}
        <div className='m-auto absolute bottom-0 left-1/2 p-2 z-20 text-black transform -translate-x-1/2 -translate-y-24'>
          <RiScrollToBottomLine size={40} className='animate-bounce' />
        </div>
        <div className='w-52 pb-3 absolute bottom-0 left-1/2 p-2 z-30 text-black transform -translate-x-1/2'>
          <Image
            className='w-full object-cover'
            src='/FAMOVIE/images/FullLogo.png'
            alt='FAMOVIE Full Logo'
            width={208}
            height={0}
          />
        </div>

        {/** LEFT SIDE (DAENERYS) */}
        <div className='w-full h-full flex flex-col justify-between relative text-white overflow-hidden custom-shape1'>
          {/** BG IMAGE */}
          <Image
            className='w-full h-full absolute -z-20 object-cover scale-150 translate-x-40 translate-y-24'
            src='/FAMOVIE/images/daenerys.jpg'
            alt='Daenerys Targaryen'
            width={1920}
            height={1080}
          />
          {/** DECORATION */}
          <div className='w-96 h-96 absolute -z-10 -left-16 -bottom-32 flex justify-center items-center rounded-full border border-white'>
            <div className='w-72 h-72 rounded-full border border-dashed border-white'></div>
          </div>
          <div className='w-fit absolute bottom-5 right-32 flex b3-button bg-white'>
            {' '}
            <OpenLinkButton text={'visit my website'} /> <FaExternalLinkAlt />
          </div>

          {/** BLUR SECTION */}
          <div className='h-full w-2/3 px-5 -z-20 bg-blur-1'>
            <div className='blur-1'></div>
            <div className='blur-2'></div>
            <div className='blur-3'></div>
            <div className='blur-4'></div>
            <div className='blur-5'></div>
            <div className='blur-6'></div>
          </div>
          {/** DESC 1 */}
          <div className='w-full p-10 flex flex-col gap-3 justify-start'>
            <Typography variant='4xl' weight='700'>
              {t('famovie')}
            </Typography>
            <Typography variant='sm' weight='500' className='w-1/2'>
              {t('titleDescription')}
            </Typography>
            <div className='w-2/5 border-b border-dashed border-white'></div>
            <div className='w-1/3 flex flex-wrap gap-2'>
              {[...Array(6)].map((_, index) => (
                <div
                  key={index}
                  className='px-5 py-2 text-[9px] font-thin rounded-[5px] bg-black-2'
                >
                  {t('genres')}
                </div>
              ))}
            </div>
          </div>
          {/** DESC 2 */}
          <div className='w-full flex flex-col gap-0 p-10'>
            <Typography variant='2xl' weight='700'>
              {t('gameOfThrones')}
            </Typography>
            <div className='flex gap-2 items-center'>
              <Typography variant='xl' weight='700'>
                {t('rate')}
              </Typography>
              <Typography variant='md' weight='400' className='italic'>
                {t('imdbRating')}
              </Typography>
            </div>
            <div className='flex gap-2 items-center'>
              <Typography variant='xl' weight='500'>
                {t('myReviewHere')}
              </Typography>
              <HiExternalLink size={30} />
            </div>
          </div>
        </div>

        {/** RIGHT SIDE (IMAGE GALLERY) */}
        <div className='w-full h-full relative custom-shape flex flex-col gap-1'>
          {/** LIGHT REDUCER */}
          <div className='w-full h-full absolute z-10 reduce_light pointer-events-none'></div>

          {/** TOP SIDE */}
          <div className='w-full h-1/2 gap-1 overflow-hidden LP_TOP_GRID foreground2'>
            {coverMovies.top.map(({ area, alt, img }) => (
              <CoverButton key={area} area={area} alt={alt} img={img} />
            ))}
          </div>
          {/** BOTTOM SIDE */}
          <div className='w-full h-1/2 gap-1 overflow-hidden LP_BOTTOM_GRID foreground2'>
            {coverMovies.bottom.map(({ area, alt, img }) => (
              <CoverButton key={area} area={area} alt={alt} img={img} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
