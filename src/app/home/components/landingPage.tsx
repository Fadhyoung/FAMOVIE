'use client';

import { HiExternalLink } from 'react-icons/hi';
import { RiScrollToBottomLine } from 'react-icons/ri';
import { FaExternalLinkAlt } from 'react-icons/fa';
import useHome from '@/app/home/hooks';
import Image from 'next/image';
import Typography from '@/components/Typography';
import coverMovies from '@/app/data/coverMovies.json';
import { CoverButton } from '@/app/home/components/coverButtons';
import Button from '@/components/Button';

export default function LandingPage() {
  const { t } = useHome();
  return (
    <>
      <div
        className="w-full h-screen p-2 relative grid lg:grid-cols-2 xs:grid-cols-1 gap-2 justify-center items-center bg-white"
        style={{ maxHeight: '1000px', minHeight: '600px' }}
      >
        {/** FLOAT ORNAMENT */}
        <div className="m-auto absolute lg:bottom-32 xs:bottom-16 left-1/2 p-2 z-20 lg:text-black xs:text-white transform -translate-x-1/2">
          <RiScrollToBottomLine size={40} className="animate-bounce" />
        </div>
        <div className="lg:block xs:hidden w-56 pb-5 absolute bottom-0 left-1/2 p-2 z-30 text-black transform -translate-x-1/2">
          <Image
            className="w-full object-cover"
            src="/FAMOVIE/images/FullLogo.png"
            alt="FAMOVIE Full Logo"
            width={208}
            height={0}
          />
        </div>

        {/** LEFT SIDE (DAENERYS) */}
        <div className="w-full h-full flex flex-col lg:justify-between xs:justify-start relative text-white overflow-hidden lg:custom-shape1 xs:custom-shape1-none">
          {/** BG IMAGE */}
          <Image
            className="w-full h-full absolute -z-20 object-cover scale-150 translate-x-40 translate-y-24"
            src="/FAMOVIE/images/daenerys.jpg"
            alt="Daenerys Targaryen"
            width={1920}
            height={1080}
          />
          {/** DECORATION */}
          <div className="w-96 h-96 scale-150 absolute -z-10 -left-10 -bottom-20 flex justify-center items-center rounded-full border border-white">
            <div className="w-72 h-72 rounded-full border border-dashed border-white"></div>
          </div>

          {/** BLUR SECTION */}
          <div className="h-full w-2/3 px-5 -z-20 bg-blur-1">
            <div className="blur-1"></div>
            <div className="blur-2"></div>
            <div className="blur-3"></div>
            <div className="blur-4"></div>
            <div className="blur-5"></div>
            <div className="blur-6"></div>
          </div>
          {/** DESC 1 */}
          <div className="w-full p-10 flex flex-col gap-3 justify-start">
            <div className="flex flex-col">
              <Typography type="display" weight="100" italic>
                {t('welcomeTo')}
              </Typography>
              <Typography type="massiveTitle">{t('famovie')}</Typography>
              <Typography type="display" weight="100" italic>
                {t('subjective')}
              </Typography>
            </div>
            <Typography
              type='body'
              weight="500"
              className="lg:w-1/2 xs:w-full"
            >
              {t('titleDescription')}
            </Typography>
            <div className="lg:w-2/5 xs:w-full border-b border-dashed border-white"></div>
            <div className="lg:w-1/3 xs:w-full flex flex-wrap gap-2">
              {[...Array(6)].map((_, index) => (
                <Button
                  key={index}
                  size="md"
                  variant="tertiary"
                  buttonType="solid"
                >
                  {t('genres')}
                </Button>
              ))}
            </div>
          </div>
          {/** DESC 2 */}
          <div className="w-full flex flex-col lg:items-start xs:items-center gap-2 p-10">
            <Typography type='title' variant='accent' italic>
              {t('gameOfThrones')}
            </Typography>
            <div className="flex gap-2 items-center">
              <Typography type='title'>
                {t('rate')}
              </Typography>
              <Typography type='subtitle' italic>
                {t('imdbRating')}
              </Typography>
            </div>
            <div>
              <Button radius="lg" variant="primary" buttonType="outline">
                {t('myReviewHere')}
                <HiExternalLink size={30} />
              </Button>
            </div>
            <Button
              radius="lg"
              variant="primary"
              buttonType="solid"
              size="lg"
              className="!text-amber"
              onClick={() =>
                window.open(
                  'https://fadhyoung.github.io/Portofolio1/',
                  '_blank'
                )
              }
            >
              {t('visitMyWebsite')}{' '}
              <FaExternalLinkAlt size={20} className="text-midBlue" />
            </Button>
          </div>
        </div>

        {/** RIGHT SIDE (IMAGE GALLERY) */}
        <div className="xs:hidden lg:flex w-full h-full relative custom-shape flex-col gap-1">
          {/** LIGHT REDUCER */}
          <div className="w-full h-full absolute z-10 reduce_light pointer-events-none"></div>

          {/** TOP SIDE */}
          <div className="w-full h-1/2 gap-1 overflow-hidden LP_TOP_GRID foreground2">
            {coverMovies.top.map(({ area, alt, img }) => (
              <CoverButton key={area} area={area} alt={alt} img={img} />
            ))}
          </div>
          {/** BOTTOM SIDE */}
          <div className="w-full h-1/2 gap-1 overflow-hidden LP_BOTTOM_GRID foreground2">
            {coverMovies.bottom.map(({ area, alt, img }) => (
              <CoverButton key={area} area={area} alt={alt} img={img} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
