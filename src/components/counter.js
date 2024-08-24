import React, { useState, useEffect, useRef } from 'react';

const Counter = ({ target, duration }) => {
  const [count, setCount] = useState(0);
  const ref = useRef();

  const startCounting = () => {
    let start = 0;
    const end = target;
    const incrementTime = duration / end;

    const timer = setInterval(() => {
      start += 1;
      setCount(start);

      if (start >= end) {
        clearInterval(timer);
      }
    }, incrementTime);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          startCounting();
        }
      },
      { threshold: 0.1 } // 10% of the div must be visible
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [target, duration]);

  return <span ref={ref} className='spanicon'>{count}+</span>;
};

export default Counter;
