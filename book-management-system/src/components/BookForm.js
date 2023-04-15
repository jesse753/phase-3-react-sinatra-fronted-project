import React, { useState } from 'react';

function BookForm({ categories, addBook }) {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [categoryId, setCategoryId] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    addBook({ title, author, category_id: parseInt(categoryId) });
    setTitle('');
    setAuthor('');
    setCategoryId('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add a new book:</h2>
      <div>
        <label htmlFor="title">Title:</label>
        <input
          type="text"
          id="title"
          value={title}
          onChange={e => setTitle(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="author">Author:</label>
        <input
          type="text"
          id="author"
          value={author}
          onChange={e => setAuthor(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="category">Category:</label>
        <select
          id="category"
          value={categoryId}
          onChange={e => setCategoryId(e.target.value)}
        >
          <option value="">-- Select a category --</option>
          {categories.map(category => (
            <option key={category.id} value={category.id}>
              {category.name}
            </option>
          ))}
        </select>
      </div>
      <button type="submit">Add Book</button>
    </form>
  );
}

export default BookForm;
