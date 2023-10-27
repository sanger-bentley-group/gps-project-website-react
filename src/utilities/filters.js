const TextSearchFilter = ({ column: { filterValue, setFilter }}) => (
  <input className="input input-xs"
    value={filterValue || ""}
    onChange={(e) => { setFilter(e.target.value || undefined) }}
    placeholder={`Search...`}
  />
)

export { TextSearchFilter }