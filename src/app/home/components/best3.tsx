'use client';

import React from 'react';
import { FaExternalLinkAlt } from 'react-icons/fa';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import Card1 from '@/components/Cards';
import useHome from '@/app/home/hooks';
import Typography from '@/components/Typography';
import Button from '@/components/Button';

export default function Best3() {
  const {
    t,
    best3: data,
    currentBestPage: currentPage,
    category,
    isLoading,
    setCurrentBestPage: setCurrentPage,
    handleBest3PageChange: handlePageChange,
  } = useHome();

  if (isLoading) {
    <div>{t('loading')}</div>;
  }

  return (
    <>
      <div
        className="w-11/12 m-auto rounded-b-[40px] drop-shadow-xl bg-gradient-to-t from-black to-transparent"
        style={{ padding: '1px' }}
      >
        <div className="w-full lg:px-16 xs:px-2 py-10 relative flex flex-col gap-5 justify-center items-center overflow-hidden rounded-b-[38px] text-black ">
          {/** DECORATION */}
          <div className="w-full h-full absolute -z-30 bg-white"></div>
          <div className="w-[1644px] h-[1644px] absolute -z-10 -bottom-[1100] rounded-full border border-darkBlue"></div>
          <div className="w-[1100px] h-[1100px] absolute -z-20 -bottom-[725] rounded-full bg-radial from-midBlue to-darkBlue"></div>

          {/** TOP SECTION */}
          <div className="w-full flex lg:flex-row xs:flex-col lg:gap-20 xs:gap-5 justify-between">
            {/** 1ST */}
            <div className="lg:w-1/3 xs:w-full flex flex-col lg:items-start xs:items-center gap-2">
              <Button
                radius="lg"
                buttonType="outline"
                size="md"
                className="flex gap-4"
                onClick={() =>
                  window.open(
                    'https://www.imdb.com/list/ls547498540/?ref_=ext_shr_lnk',
                    '_blank'
                  )
                }
              >
                {t('famovieImdbList')}
                <FaExternalLinkAlt />
              </Button>
              <Button
                radius="lg"
                buttonType="outline"
                size="md"
                className="flex gap-4"
                onClick={() =>
                  window.open(
                    'https://www.imdb.com/list/ls547498540/?ref_=ext_shr_lnk',
                    '_blank'
                  )
                }
              >
                {t('letterbox')}
                <FaExternalLinkAlt />
              </Button>
            </div>
            {/** 2ND */}
            <div className="lg:w-1/3 xs:w-full flex flex-col items-center text-center text-black">
              <Typography type='subtitle' weight="400" color="primary">
                {t('firstRecomendation')}
              </Typography>
              <Typography type='title' weight="700" color="primary">
                {t('myBest3')}
              </Typography>
            </div>
            {/** 3RD */}
            <div className="lg:w-1/3 xs:w-full lg:flex xs:hidden flex-col items-end gap-2">
              <div className="w-fit flex gap-2 justify-between">
                <Button
                  variant='primary'
                  radius="lg"
                  buttonType="outline"
                  size="md"
                  className="flex gap-4"
                  onClick={() => handlePageChange(currentPage - 1)}
                >
                  <FiChevronLeft />
                </Button>
                <Button
                  radius="lg"
                  buttonType="outline"
                  size="md"
                  className="flex gap-4"
                  onClick={() => handlePageChange(currentPage + 1)}
                >
                  <FiChevronRight />
                </Button>
              </div>
              <Button
                radius="lg"
                buttonType="outline"
                size="md"
                className="flex gap-4"
                onClick={() => handlePageChange(currentPage + 1)}
              >
                #{category[currentPage]}
              </Button>
            </div>
          </div>
          {/** MIDDLE SECTION */}
          <div className="w-full flex lg:flex-row xs:flex-col mt-10 lg:gap-10 xs:gap-2 justify-between items-end">
            {/** CARD */}
            {!isLoading ? (
              <>
                {data.map((item, index) => (
                  <Card1 key={index} width={'lg:w-1/3 xs:w-full'} height={'h-56'} data={item} />
                ))}
              </>
            ) : (
              <Typography type='subtitle'>{t('loading')}</Typography>
            )}
          </div>
          {/** BOTTOM SECTION */}
          <div className="flex flex-wrap gap-5 ">
            {category.map((catName, index) => (
              <Button
                key={index}
                radius="lg"
                buttonType="outline"
                size="md"
                className={`flex gap-4 ${
                  currentPage === index ? '!bg-black text-white' : 'bg-white'
                }`}
                onClick={() => setCurrentPage(index)}
              >
                {t(catName.toLowerCase())}
              </Button>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
