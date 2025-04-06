"use client";

import Papa from "papaparse";

import GetMoviesAction, { getBest3MoviesAction } from "./actions";
import { useEffect, useState } from "react";
import { fetchMovieImagesBatch } from "../services/movieService";

export default function useHome() {
  // All data state
  const [data, setData] = useState<any[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const itemsPerPage = 8;

  // Best 3 state
  const [best3, setBest3] = useState<any>([]); // Data for the current page
  const [category, setCategory] = useState([
    "Western",
    "Asian",
    "Movies",
    "Indonesia",
  ]);
  const [currentBestPage, setCurrentBestPage] = useState(0);

  const [dropdown, setDropdown] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const fetchMoview = async (page: any) => {
    const response = await GetMoviesAction();
    console.log("response: ", response);  
    Papa.parse(response, {
      header: true,
      skipEmptyLines: true,
      complete: async (result) => {
        const allData = result.data;

        // Calculate total pages
        const totalPagesCount = Math.ceil(allData.length / itemsPerPage);
        setTotalPages(totalPagesCount);

        // Slice data for the requested page
        const startIndex = (page - 1) * itemsPerPage;
        const endIndex = startIndex + itemsPerPage;
        const pageData = allData.slice(startIndex, endIndex);

        const movieData = result.data;
        const moviesWithImages = await fetchMovieImagesBatch(pageData);
        setData(moviesWithImages);
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
        complete: async (result: { data: { Category: string }[] }) => {
          const allData = result.data.filter(
            (item) => item.Category === currentCategory
          );

          console.log(allData);

          const moviesWithImages = await fetchMovieImagesBatch(allData); // Use the service
          setBest3(moviesWithImages);
        },
      });
    } catch (error) {
      console.error("Error fetching page data:", error);
    }
  };

  // Fetch initial page data
  useEffect(() => {
    setIsLoading(true);
    fetchMoview(currentPage);
    fetchBest3(category[currentBestPage]);
    setIsLoading(false);
  }, [currentPage, currentBestPage]);

  // Handle page change
  const handlePageChange = (page: any) => {
    if (page <= 0) {
      setCurrentPage(1);
    } else if (page >= totalPages) {
      setCurrentPage(totalPages);
    } else {
      setCurrentPage(page);
    }
  };

  const handleBest3PageChange = (page: any) => {
    setIsLoading(true);
    if (page <= 0) {
        setCurrentBestPage(0);
    } else if (page >= (category.length - 1)) {
        setCurrentBestPage(category.length - 1);
    } else {setCurrentBestPage(page);}   
    setIsLoading(false);     
};

  const handleDropdown = () => {
    setDropdown((prevState) => !prevState);
  };

  return {
    data,
    isLoading,
    currentPage,

    // Best 3 state
    best3,
    currentBestPage,
    category,
    handleBest3PageChange,
    setCurrentBestPage,

    dropdown,
    totalPages,
    handleDropdown,
    fetchMoview,
    handlePageChange,
    setIsLoading,
  };
}
