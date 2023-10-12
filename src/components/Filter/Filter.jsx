export function Filter({ filter, onChange }) {
  return (
    <label>
      Find contacts by name
      <input
        type="text"
        name="filter"
        value={filter}
        onChange={onChange}
        placeholder="Search..."
      />
    </label>
  );
}
