import { useState, useEffect } from 'react';

function usePaginationDataFetcher(apiEndpoint: string, initialPage = 1, itemsPerPage = 10) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(initialPage);
  const [totalPages, setTotalPages] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await fetch(`${apiEndpoint}?page=${page}&per_page=${itemsPerPage}`);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const result = await response.json();
        setData(result.data);
        setTotalPages(Math.ceil(result.total / itemsPerPage));
        setError(null);
      } catch (error: any) {
        setError(error);
      }
      setLoading(false);
    };

    fetchData();
  }, [apiEndpoint, page, itemsPerPage]);

  const goToPage = (newPage: number) => {
    if (newPage >= 1 && newPage <= totalPages) {
      setPage(newPage);
    }
  };

  const nextPage = () => {
    goToPage(page + 1);
  };

  const prevPage = () => {
    goToPage(page - 1);
  };

  return {
    data,
    loading,
    error,
    page,
    totalPages,
    goToPage,
    nextPage,
    prevPage,
  };
}

export default usePaginationDataFetcher;
