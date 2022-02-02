import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getFilter } from '../../redux/phonebook/phone-selectors';

import { changeFilter } from '../../redux/phonebook/phone-actions';

function Filter() {
  const value = useSelector(getFilter);
  const dispatch = useDispatch();

  return (
    <label className="filter-label">
      Find contacts by name
      <input
        type="text"
        value={value}
        onChange={e => dispatch(changeFilter(e.target.value))}
        className="filter-input"
      />
    </label>
  );
}

export default Filter;
