// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect, useCallback } from 'react';
import { BASE_URL, LIMIT, ERROR_MESSAGE } from '../utils/config';

const useFetchCards = (page) => {
  const [isLoading, setIsLoading] = useState(false);
  const [cards, setCards] = useState([]);
  const [hasMore, setHasMore] = useState(false);

  const fetchCardsData = useCallback(async () => {
    const url = `${BASE_URL}_page=${page}&_limit=${LIMIT}`;
    setIsLoading(true);

    try {
      const res = await fetch(url);
      const data = await res.json();

      if (!res.ok) throw new Error(ERROR_MESSAGE);

      setCards((prev) => [...new Set([...prev, ...data])]);
      setHasMore(data.length > 0);
      setIsLoading(false);
    } catch (err) {
      setIsLoading(false);
      console.error(err.message);
    }
  }, [page]);

  useEffect(() => {
    fetchCardsData();
  }, [page, fetchCardsData]);

  return { cards, hasMore, isLoading };
};

export default useFetchCards;
