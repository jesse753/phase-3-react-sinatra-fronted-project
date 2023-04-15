import React from 'react';

function CategoryFilter({ categories, filterBooks }) {
  return (
    <div>
      <label htmlFor="category-filter">Filter by category:</label>
      <select id="category-filter" onChange={e => filterBooks(e.target.value)}>
        <option value="">-- All categories --</option>
        {categories.map(category => (
          <option key={category.id} value={category.id}>
            {category.name}
          </option>
        ))}
      </select>
    </div>
  );
}

export default CategoryFilter;
