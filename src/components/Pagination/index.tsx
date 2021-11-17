import React, { useEffect, useState } from 'react';

import Icon from '../Icon';

import { Container } from './styles';

interface IPaginationPros {
  currentPage: number;
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
  count: number;
  range?: number;
}

const Pagination: React.FC<IPaginationPros> = ({
    count,
    range = 3,
    currentPage,
    setCurrentPage,
  }) => {
  const [pages, setPages] = useState<number[]>([]);

  useEffect(() => {
    const newPages = [];

    let start = currentPage - Math.trunc(range / 2);

    if (start < 1) {
      start = 1;
    }

    let end = start + range - 1;

    if (end > count) {
      start = (count - range) + 1;
      end = count;
    }

    if (range >= count) {
      start = 1;
      end = count;
    }

    for (let i = start; i <= end; i += 1) {
      newPages.push(i);
    }

    setPages(newPages);
  }, [currentPage, range, count]);

  return (
    <Container>
      <section>
        <div>
          <button disabled={currentPage === 1 ? true : false}
            onClick={() => {setCurrentPage(old => old - 1); window.scrollTo(0, 0);}}>
            <Icon icon="icon-icon-small-arrow" size="10px" />
          </button>
        </div>
        <ul>
          {pages.map((index) => (
            <li key={index}>
              <button
                className={currentPage === index ? 'active' : ''}
                onClick={() =>{ setCurrentPage(index); window.scrollTo(0, 0);}}
              >
                {`0${index}`.slice(-2)}
              </button>
            </li>
            ))}
        </ul>
        <div>
          <button disabled={currentPage === count ? true : false}
            onClick={() => setCurrentPage(old => old + 1)}>
            <Icon icon="icon-icon-small-arrow" size="10px" />
          </button>
        </div>
      </section>
    </Container>
  );
}

export default Pagination;
