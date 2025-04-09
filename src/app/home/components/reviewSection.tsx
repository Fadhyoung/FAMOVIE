'use client';

import React from 'react';
import { ReviewCards } from '@/components/Cards';
import useHome from '@/app/home/hooks';
import { movie } from '@/types/movie';
import Button from '@/components/Button';

export default function ReviewSection() {
  const { t, top10: data, scrollWrapperRef} = useHome();

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
        </div>
        <div
          className="w-full flex flex-col gap-8 overflow-x-scroll snap-x"
          ref={scrollWrapperRef}
        >
          {data.map((item: movie, index: number) => (
            <ReviewCards
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
