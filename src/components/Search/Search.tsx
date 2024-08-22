import React, { useRef } from 'react';
import { ReactComponent as SearchIcon } from 'assets/icon-search.svg';
import { Button } from 'components/Button';

import styles from './Search.module.scss';

interface SearchProps {
  hasError: boolean,
  onSubmit: (text: string) => void;
}

export const Search = ({ hasError, onSubmit }: SearchProps) => {
  const searchRef = useRef<HTMLInputElement | null>(null);

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    const text = searchRef.current?.value || '';

    if (text) {
      onSubmit(text);
      if (searchRef.current) {
        searchRef.current.value = '';
      };
    }

  }

  return (
    <form onSubmit={handleSubmit} autoComplete='off'>
      <div className={styles.search}>
        <label htmlFor='search' className={styles.label}>
          <SearchIcon />
        </label>
        <input
          id="search"
          type="text"
          name="username"
          placeholder="Search GitHub username..."
          ref={searchRef}
          className={styles.textField}
        />
        {hasError && (
          <div className={styles.error}>
            No results
          </div>
        )}
        <Button>Search</Button>
      </div>
    </form>
  );
};
