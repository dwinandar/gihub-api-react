import PropTypes from "prop-types";

const SearchForm = ({ user, setUser }) => {
  return (
    <div className='flex flex-col w-80 max-w-lg md:w-96 gap-2 bg-secondary py-7 px-10 rounded-md shadow-inner shadow-slate-800'>
      <label htmlFor='cari-user'>Masukkan Username Github</label>
      <input
        type='search'
        id='cari-user'
        name='cari-user'
        value={user}
        onChange={(e) => {
          setUser(e.target.value);
        }}
        placeholder='Cari User Github'
        required
        className='input input-bordered input-secondary w-full max-w-xs '
      />
    </div>
  );
};

SearchForm.propTypes = {
  user: PropTypes.string,
  setUser: PropTypes.func,
};

export default SearchForm;
