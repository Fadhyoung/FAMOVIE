'use client';

import React from 'react';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import { Card2 } from '@/components/Cards';
import useHome from '@/app/home/hooks';
import { movie } from '@/types/movie';
import Button from '@/components/Button';

export default function Top10() {
  const { t, top10: data, scrollWrapperRef, scroll } = useHome();

  return (
    <>
      {/** TOP 10 */}
      <div className="w-full flex flex-col items-start gap-5">
        <div className="w-full flex justify-between">
          <Button
            radius="lg"
            buttonType="outline"
            size="md"
            className="flex gap-4 !text-midBlue"
          >
            {t('top10Recommendations')}
          </Button>
          <div className="w-fit flex gap-2 justify-between">
            <Button
              radius="lg"
              buttonType="outline"
              size="md"
              className="flex gap-4"
              onClick={() => scroll('left')}
            >
              <FiChevronLeft />
            </Button>
            <Button
              radius="lg"
              buttonType="outline"
              size="md"
              className="flex gap-4"
              onClick={() => scroll('right')}
            >
              <FiChevronRight />{' '}
            </Button>
          </div>
        </div>
        <div
          className="w-full flex gap-8 overflow-x-scroll snap-x"
          ref={scrollWrapperRef}
        >
          {data.map((item: movie, index: number) => (
            <Card2
              key={index}
              title={item.Title}
              desc={item.Plot}
              poster={item.Poster}
              url={item.URL}
            />
          ))}
        </div>
      </div>
    </>
  );
}
