import '../assets/css/InfiniteScrollList.css';
import Card from './Card';
import { useState, useRef } from 'react';
import { DEFAULT_PAGE } from '../utils/config';
import useFetchCards from '../fetch/useFetchCards';

const InfiniteScrollList = () => {
  const [page, setPage] = useState(DEFAULT_PAGE);
  const { hasMore, cards, isLoading } = useFetchCards(page);
  const observerRef = useRef();

  const observer = (node) => {
    if (isLoading) return;
    if (observerRef.current) observerRef.current.disconnect();

    observerRef.current = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting && hasMore) {
        setPage((page) => page + 1);
      }
    });

    if (node) observerRef.current.observe(node);
  };

  return (
    <>
      <div className='container'>
        <ul>
          {cards.map((card) => (
            <Card card={card} key={card.id} />
          ))}
        </ul>
        <div className='observer' ref={observer}></div>
      </div>
    </>
  );
};

export default InfiniteScrollList;
