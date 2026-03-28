import { useState, useEffect } from 'react';
import './App.css';
import { fetchMovies } from './api/movieApi';
import Header from './components/Header';
import MovieGrid from './components/MovieGrid';
import Footer from './components/Footer';

function App() {
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [movies, setMovies] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState('popularity.desc');

  useEffect(() => {
    const loadMovies = async () => {
      const data = await fetchMovies(currentPage, searchQuery, sortBy);
      if (data) {
        setMovies(data.results || []);
        setTotalPages(data.total_pages || 1);
      }
    };
    
    loadMovies();
  }, [currentPage, searchQuery, sortBy]);

  const handleSearchChange = (query) => {
    setSearchQuery(query);
    setCurrentPage(1);
  };

  const handleSortChange = (sort) => {
    setSortBy(sort);
    setCurrentPage(1);
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div className="App">
      <Header 
        searchQuery={searchQuery}
        onSearchChange={handleSearchChange}
        sortBy={sortBy}
        onSortChange={handleSortChange}
      />
      
      <main>
        <MovieGrid movies={movies} />
      </main>

      <Footer 
        currentPage={currentPage}
        totalPages={totalPages}
        onNextPage={handleNextPage}
        onPrevPage={handlePrevPage}
      />
    </div>
  );
}

export default App;