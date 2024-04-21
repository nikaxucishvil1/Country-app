import "./search.css";

interface search {
  onchange?: (e:any) => void
}

function Search(props: search) {
  const { onchange } = props;
  return (
    <div className="search">
      <button>
        <img
          style={{ height: 16, width: 16 }}
          src="/src/assets/search.svg"
          alt=""
        />
      </button>
      <input
        type="text"
        placeholder="Search for a country…"
        onChange={onchange}
      />
    </div>
  );
}

export default Search;
