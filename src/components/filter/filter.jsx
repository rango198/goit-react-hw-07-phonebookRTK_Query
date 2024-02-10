import { IoIosSearch } from 'react-icons/io';
import { Input } from './Filter.styled';
import { useDispatch } from 'react-redux';
import { filterSet } from 'store/redux/filter/filter-slice';

export const Filter = () => {
  const dispatch = useDispatch();

  const onChangeFilter = event => {
    const { value } = event.currentTarget;
    dispatch(filterSet(value));
  };

  return (
    <label>
      <div>
        <IoIosSearch />
        Find contacts by name
      </div>
      <Input
        type="text"
        name="filter"
        placeholder="search"
        onChange={onChangeFilter}
      />
    </label>
  );
};
