import React, { useState, useEffect } from 'react';
import BookTable from './components/BookTable.js';
import BookForm from './components/BookForm.js';
import CategoryFilter from './components/CategoryFilter.js';
import './App.css';

function App() {
  const [books, setBooks] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('');

  useEffect(() => {
    fetch('http://localhost:4567/books')
      .then(response => response.json())
      .then(data => setBooks(data));

    fetch('http://localhost:4567/categories')
      .then(response => response.json())
      .then(data => setCategories(data));
  }, []);

  const addBook = book => {
    fetch('http://localhost:4567/books', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(book),
    })
      .then(response => response.json())
      .then(data => setBooks([...books, data]));
  };

  const updateBook = book => {
    fetch(`http://localhost:4567/books/${book.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(book),
    })
      .then(response => response.json())
      .then(data => {
        const updatedBooks = books.map(b => (b.id === data.id ? data : b));
        setBooks(updatedBooks);
      });
  };

  const deleteBook = book => {
    fetch(`http://localhost:4567/books/${book.id}`, {
      method: 'DELETE',
    }).then(() => {
      const updatedBooks = books.filter(b => b.id !== book.id);
      setBooks(updatedBooks);
    });
  };

  const filterBooks = category => {
    setSelectedCategory(category);
  };

  const filteredBooks =
    selectedCategory === ''
      ? books
      : books.filter(book => book.category_id === parseInt(selectedCategory));

  return (
    <div className="container">
      <h1>Bookstore Management System</h1>
      <CategoryFilter categories={categories} filterBooks={filterBooks} />
      <BookTable
        books={filteredBooks}
        categories={categories}
        updateBook={updateBook}
        deleteBook={deleteBook}
      />
      <BookForm categories={categories} addBook={addBook} />
    </div>
  );
}

export default App;



