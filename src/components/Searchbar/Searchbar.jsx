import CSS from './index.module.css';
const Searchbar = ({ submit }) => {
  const handleSubmit = e => {
    e.preventDefault();
    submit(e.target.query.value);
    e.target.reset();
  };
  return (
    <header>
      <form onSubmit={handleSubmit} className={CSS.searchbar}>
        <label htmlFor="searchInput"></label>
        <div className={CSS.divInput}>
          <input
            name="query"
            type="text"
            id="searchInput"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
        </div>
        <button type="submit">
          <span className={CSS.buttonLabel}>Search</span>
        </button>
      </form>
    </header>
  );
};

export default Searchbar;
