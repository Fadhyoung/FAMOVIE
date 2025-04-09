'use client';

import { MdOutlineFilterAlt } from 'react-icons/md';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import { Card4 } from '@/components/Cards';
import useHome from '@/app/home/hooks';
import Button from '@/components/Button';

export default function AllData() {
  const {
    t,
    isLoading,
    data,
    dropdown,
    currentPage,
    totalPages,
    handlePageChange,
    handleDropdown,
  } = useHome();

  if (isLoading) {
    <div>{t('loading')}</div>;
  }

  return (
    <>
      <div
        className="w-full m-auto flex flex-col items-start justify-center gap-5"
      >
        {/* Header Section */}
        <div className="w-full flex justify-between">
          <Button
            radius="lg"
            buttonType="outline"
            size="md"
            className="flex gap-4 !text-midBlue"
          >
            {t('movieIveWatched')}
          </Button>
          <Button
            radius="lg"
            buttonType="outline"
            size="md"
            className="flex gap-4"
          >
            <MdOutlineFilterAlt /> {t('filter')}
          </Button>
        </div>

        {/* Cards Section */}
        <div
          className={`w-full flex gap-5 items-center overflow-x-hidden ${
            data.length < 4 ? 'justify-start' : 'justify-between'
          }`}
        >
          {data.map((item, index) => (
            <Card4
              key={index}
              title={item['Title']}
              desc={item.Plot}
              poster={item.Poster}
            />
          ))}
        </div>

        {/* Pagination Section */}
        <div className="flex flex-col gap-2 justify-center items-center">
          <div className="w-full flex justify-center gap-2 mt-4">
            <Button
              radius="lg"
              buttonType="outline"
              size="md"
              className="flex gap-4"
              onClick={() => handlePageChange(currentPage - 1)}
            >
              <FiChevronLeft />
            </Button>
            <Button
              key={currentPage}
              radius="lg"
              buttonType="outline"
              size="md"
              className="flex gap-4"
              onClick={handleDropdown}
            >
              {currentPage}
            </Button>
            <Button
              radius="lg"
              buttonType="outline"
              size="md"
              className="flex gap-4"
              onClick={() => handlePageChange(currentPage + 1)}
            >
              <FiChevronRight />{' '}
            </Button>
          </div>

          {/** DROPDOWN */}
          {dropdown ? (
            <div className="pagination flex overflow-x-scroll border rounded-lg border-black">
              {Array.from({ length: totalPages }, (_, index) => (
                <Button
                  key={`page-${index}`}
                  className={`basis-[20%] p-2 flex-shrink-0 text-[10px] text-black ${
                    index % 2 === 0 ? 'bg-gray-100' : 'bg-white'
                  } hover:scale-x-125`}
                  onClick={() => handlePageChange(index + 1)}
                >
                  {index + 1}
                </Button>
              ))}
            </div>
          ) : (
            <div></div>
          )}
        </div>
      </div>
    </>
  );
}
