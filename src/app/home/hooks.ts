'use client';

import Papa from 'papaparse';

import GetMoviesAction, {
  getBest3MoviesAction,
  getTop10MoviesAction,
} from './actions';
import { useEffect, useRef, useState } from 'react';
import { fetchMovieImagesBatch } from '@/app/services/movieService';
import { movie } from '@/types/movie';
import { useTranslations } from 'next-intl';

export default function useHome() {
  const t = useTranslations('home');

  // All data state
  const [data, setData] = useState<movie[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const itemsPerPage = 8;

  // Best 3 state
  const [best3, setBest3] = useState<movie[]>([]); // Data for the current page
  const category = ['Western', 'Asian', 'Movies', 'Indonesia'];
  const [currentBestPage, setCurrentBestPage] = useState(0);

  // Top 10 state
  const scrollWrapperRef = useRef<HTMLDivElement>(null);
  const [top10, setTop10] = useState<movie[]>([]);

  const [dropdown, setDropdown] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  // Review state
  const [reviewedData, setReviewedData] = useState<movie[]>([]);
  const limitData = 3;

  const fetchMoview = async (page: number) => {
    const response = await GetMoviesAction();
    console.log('response result:', response);
    Papa.parse(response, {
      header: true,
      skipEmptyLines: true,
      complete: async (result: { data: movie[] }) => {
        const allData = result.data;

        // Calculate total pages
        const totalPagesCount = Math.ceil(allData.length / itemsPerPage);
        setTotalPages(totalPagesCount);

        // Slice data for the requested page
        const startIndex = (page - 1) * itemsPerPage;
        const endIndex = startIndex + itemsPerPage;
        const pageData = allData.slice(startIndex, endIndex);

        const moviesWithImages = await fetchMovieImagesBatch(pageData);
        setData(moviesWithImages);
        
        const reviewedMovies = moviesWithImages
          .filter((movie) => movie.Reviewed === true)
          .slice(0, limitData);
        console.log('reviewedMovies result', reviewedMovies);
        setReviewedData(reviewedMovies);
      },
    });
  };

  // Function to fetch specific page data
  const fetchBest3 = async (currentCategory: string) => {
    try {
      const response = await getBest3MoviesAction();
      Papa.parse(response, {
        header: true,
        skipEmptyLines: true,
        complete: async (result: {
          data: (movie & { Category: string })[];
        }) => {
          const allData = result.data.filter(
            (item) => item.Category === currentCategory
          );
          const moviesWithImages = await fetchMovieImagesBatch(allData); // Use the service
          setBest3(moviesWithImages);
        },
      });
    } catch (error) {
      console.error('Error fetching page data:', error);
    }
  };

  const fetchTop10 = async () => {
    const response = await getTop10MoviesAction();
    Papa.parse(response, {
      header: true,
      skipEmptyLines: true,
      complete: async (result: { data: movie[] }) => {
        const movieData = result.data;
        const moviesWithImages = await fetchMovieImagesBatch(movieData); // Use the service
        setTop10(moviesWithImages);
      },
    });
  };

  // Fetch initial page data
  useEffect(() => {
    setIsLoading(true);
    fetchMoview(currentPage);
    fetchBest3(category[currentBestPage]);
    fetchTop10();
    setIsLoading(false);
  }, [currentPage, currentBestPage]);

  // Handle page change
  const handlePageChange = (page: number) => {
    if (page <= 0) {
      setCurrentPage(1);
    } else if (page >= totalPages) {
      setCurrentPage(totalPages);
    } else {
      setCurrentPage(page);
    }
  };

  const handleBest3PageChange = (page: number) => {
    setIsLoading(true);
    if (page <= 0) {
      setCurrentBestPage(0);
    } else if (page >= category.length - 1) {
      setCurrentBestPage(category.length - 1);
    } else {
      setCurrentBestPage(page);
    }
    setIsLoading(false);
  };

  const handleDropdown = () => {
    setDropdown((prevState) => !prevState);
  };

  const scroll = (direction: string) => {
    const wrapper = scrollWrapperRef.current;
    if (!wrapper) return;

    const itemWidth = (wrapper.firstChild as HTMLElement)?.offsetWidth || 0;
    const scrollAmount = itemWidth * 4;

    if (direction === 'left') {
      wrapper.scrollBy({
        left: -scrollAmount,
        behavior: 'smooth',
      });
    } else if (direction === 'right') {
      wrapper.scrollBy({
        left: scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  return {
    t,

    data,
    isLoading,
    currentPage,

    // Best 3 state
    best3,
    currentBestPage,
    category,
    handleBest3PageChange,
    setCurrentBestPage,

    // Top 10 state
    top10,
    scrollWrapperRef,
    scroll,

    // Reviewed
    reviewedData,

    dropdown,
    totalPages,
    handleDropdown,
    fetchMoview,
    handlePageChange,
    setIsLoading,
  };
}
