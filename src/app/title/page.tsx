import Image from 'next/image';
import { Star, Share2, PlayCircle, ChevronRight } from 'lucide-react';
import Link from 'next/link';
import Typography from '@/components/Typography'; // Assuming Typography is imported from this path
import { useTranslations } from 'next-intl';
import React from 'react';
import Button from '@/components/Button';

export default function Home() {
  const t = useTranslations('title');
  return (
    <main className="p-5 min-h-screen bg-white text-black">
      {/* Secondary Navigation */}
      <div className="border-b border-zinc-800 px-4 py-2 flex flex-wrap items-center justify-between">
        <div className="flex items-center flex-wrap">
          <Link href="#" className="flex items-center mr-4 text-sm">
            <Typography variant="lg" color="secondary">
              {t('episodeGuide')}
            </Typography>
            <Typography variant="lg" color="secondary" className="mx-2">
              {t('episodeCount', { count: 17 })}
            </Typography>
            <ChevronRight className="h-4 w-4" />
          </Link>
          <div className="flex items-center space-x-2 text-sm">
            {['castAndCrew', 'userReviews', 'trivia', 'faq'].map(
              (key, index) => (
                <React.Fragment key={key}>
                  {index > 0 && (
                    <Typography variant="lg" color="secondary">
                      ·
                    </Typography>
                  )}
                  <Link href="#" className="text-gray-300 hover:text-white">
                    <Typography variant="lg" color="secondary">
                      {t(key)}
                    </Typography>
                  </Link>
                </React.Fragment>
              )
            )}
          </div>
        </div>
        <div className="flex items-center mt-2 md:mt-0">
          <Link href="#" className="text-sm mr-4">
            <Typography variant="lg" color="secondary">
              {t('imdbPro')}
            </Typography>
          </Link>
          <button className="flex items-center text-sm mr-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 mr-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h7"
              />
            </svg>
            <Typography variant="lg" color="secondary">
              {t('allTopics')}
            </Typography>
          </button>
          <button>
            <Share2 className="h-5 w-5" />
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="px-4 py-6">
        {/* Title and Rating Section */}
        <div className="flex flex-wrap items-center justify-between mb-6">
          <div className="flex flex-col  items-start">
            <Typography
              variant="4xl"
              weight="800"
              color="secondary"
              className="mb-2"
            >
              {t('title')}
            </Typography>
            <div className="flex flex-wrap items-center text-sm text-gray-300 mb-6">
              {['tvSeries', 'yearRange', 'rating', 'duration'].map(
                (key, index) => (
                  <React.Fragment key={key}>
                    {index > 0 && (
                      <Typography
                        variant="lg"
                        color="secondary"
                        className="mr-2"
                      >
                        ·
                      </Typography>
                    )}
                    <Typography variant="lg" color="secondary" className="mr-2">
                      {t(
                        key,
                        key === 'yearRange'
                          ? { start: 2025 }
                          : key === 'duration'
                            ? { hours: 1 }
                            : undefined
                      )}
                    </Typography>
                  </React.Fragment>
                )
              )}
            </div>
          </div>

          <div className="flex items-center space-x-8 mb-4 md:mb-0">
            <div>
              <Typography variant="lg" color="secondary">
                {t('imdbRating')}
              </Typography>
              <div className="flex items-center">
                <Star className="h-5 w-5 text-yellow-400 fill-yellow-400 mr-1" />
                <Typography
                  variant="lg"
                  color="secondary"
                  className="font-bold"
                >
                  8.6
                </Typography>
                <Typography
                  variant="lg"
                  color="secondary"
                  className="text-gray-400 text-sm"
                >
                  /10
                </Typography>
                <Typography
                  variant="lg"
                  color="secondary"
                  className="text-gray-400 text-xs ml-1"
                >
                  30K
                </Typography>
              </div>
            </div>
            <div>
              <Typography variant="lg" color="secondary">
                {t('yourRating')}
              </Typography>
              <button className="flex items-center">
                <Star className="h-5 w-5 text-blue-400 mr-1" />
                <Typography
                  variant="lg"
                  color="secondary"
                  className="text-blue-400"
                >
                  {t('rate')}
                </Typography>
              </button>
            </div>
            <div>
              <Typography variant="lg" color="secondary">
                {t('popularity')}
              </Typography>
              <div className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 mr-1"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
                    clipRule="evenodd"
                  />
                </svg>
                <Typography
                  variant="lg"
                  color="secondary"
                  className="font-bold"
                >
                  5
                </Typography>
              </div>
            </div>
          </div>
        </div>

        {/* Media Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          <div className="md:col-span-2 relative bg-gray-200 rounded-xl">
            <Image
              src="/placeholder.svg?height=400&width=800"
              alt={t('mediaAlt')}
              width={800}
              height={400}
              className="w-full h-auto rounded"
            />
            <button className="absolute inset-0 flex items-center justify-center">
              <div className="flex items-center bg-black/50 px-4 py-2 rounded-full">
                <PlayCircle className="h-8 w-8 mr-2" />
                <div>
                  <Typography variant="lg" color="secondary">
                    {t('playTrailer')}
                  </Typography>
                  <Typography
                    variant="lg"
                    color="secondary"
                    className="text-gray-300"
                  >
                    2:08
                  </Typography>
                </div>
              </div>
            </button>
          </div>
          <div className="relative bg-gray-200 rounded-xl">
            <Image
              src="/placeholder.svg?height=400&width=300"
              alt={t('posterAlt')}
              width={300}
              height={400}
              className="w-full h-auto rounded"
            />
          </div>
        </div>

        {/* Videos and Photos Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          {['videos', 'photos'].map((key) => (
            <div
              key={key}
              className="p-4 rounded border border-black flex items-center justify-between"
            >
              <div className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 mr-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d={
                      key === 'videos'
                        ? 'M7 4v16M17 4v16M3 8h4m10 0h4M3 12h18M3 16h4m10 0h4M4 20h16a1 1 0 001-1V5a1 1 0 00-1-1H4a1 1 0 00-1 1v14a1 1 0 001 1z'
                        : 'M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z'
                    }
                  />
                </svg>
                <Typography variant="lg" color="secondary">
                  {key}
                </Typography>
              </div>
              <ChevronRight className="h-6 w-6 text-black" />
            </div>
          ))}
        </div>

        {/* Genres */}
        <div className="flex flex-wrap gap-2 mb-6">
          {[
            'gangster',
            'legalDrama',
            'legalThriller',
            'martialArts',
            'psychologicalDrama',
            'psychologicalThriller',
          ].map((genre) => (
            <Button
              key={genre}
              variant="primary"
              buttonType="outline"
              radius="full"
              className="px-3 py-1 text-sm"
            >
              {t(genre)}
            </Button>
          ))}
          <Button buttonType="outline" variant="primary" radius="full">
            <ChevronRight className="h-5 w-5" />
          </Button>
        </div>

        {/* Synopsis */}
        <Typography variant="lg" color="secondary" className="mb-6">
          {t('synopsis')}
        </Typography>

        {/* Creators and Stars */}
        {['creators', 'stars'].map((key) => (
          <div key={key} className="border-t border-gray-200 py-4">
            <div className="flex justify-between items-center mb-2">
              <div className="flex">
                <Typography
                  variant="lg"
                  color="secondary"
                  className="text-gray-400 mr-2"
                >
                  {t(key)}
                </Typography>
                <div className="flex gap-2 justify-between items-center mb-2">
                  {['Matt Corman', 'Chris Ord'].map((name, index) => (
                    <React.Fragment key={name}>
                      {index > 0 && (
                        <Typography
                          variant="lg"
                          color="secondary"
                          className="text-gray-400 mr-2"
                        >
                          ·
                        </Typography>
                      )}
                      <Link href="#">
                        <Typography variant="lg" color="link">
                          {name}
                        </Typography>
                      </Link>
                    </React.Fragment>
                  ))}
                </div>
              </div>
              <ChevronRight className="h-5 w-5" />
            </div>
          </div>
        ))}

        {/* IMDbPro */}
        <div className="border-t border-gray-200 py-4">
          <Link href="#" className="flex items-center">
            <Image
              src="/placeholder.svg?height=24&width=60"
              alt="IMDbPro"
              width={60}
              height={24}
              className="h-6 mr-2"
            />
            <Typography variant="lg" color="secondary">
              {t('imdbProInfo')}
            </Typography>
          </Link>
        </div>

        {/* Reviews */}
        <div className="mt-6 flex space-x-4">
          {['userReviews', 'criticReviews'].map((key) => (
            <div key={key}>
              <Typography variant="lg" color="link" weight="800">
                {t(
                  key === 'userReviews'
                    ? 'userReviewCount'
                    : 'criticReviewCount',
                  { count: key === 'userReviews' ? 216 : 27 }
                )}
              </Typography>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
