// import PropTypes from 'prop-types';

export const SearchFilter = ({ onChange }) => {
  return (
    <>
      <h3>Find contacts by name</h3>
      <input onChange={onChange}></input>
    </>
  );
};
