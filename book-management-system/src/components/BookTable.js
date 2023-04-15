import React from 'react';

function BookTable({ books, categories, updateBook, deleteBook }) {
  return (
    <table>
      <thead>
        <tr>
          <th>Title</th>
          <th>Author</th>
          <th>Category</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {books.map(book => (
          <tr key={book.id}>
            <td>{book.title}</td>
            <td>{book.author}</td>
            <td>{categories.find(c => c.id === book.category_id)?.name}</td>
            <td>
              <button onClick={() => updateBook(book)}>Update</button>
              <button onClick={() => deleteBook(book)}>Delete</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default BookTable;
