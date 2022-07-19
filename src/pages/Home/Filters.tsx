import React, { useState } from 'react';
import { Button, Stack } from 'react-bootstrap';
import { GalleryFilters } from '.';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import {
  changeFilters,
  nextPage,
  previousPage,
} from '../../features/filtersSlice';

type FiltersProps = {
  filters: GalleryFilters;
  setFilters: (filters: GalleryFilters) => void;
};

const Filters = () => {
  const [isTopSelected, setIsTopSelected] = useState(false);
  const [isUserSelected, setIsUserSelected] = useState(false);
  const [isShowViral, setIsShowViral] = useState(true);

  //!Redux toolkit filters
  const toolkitFilters = useAppSelector((state) => state.filters);
  const dispatch = useAppDispatch();

  const onFilterChange = (event: any) => {
    const select = event.target;
    const option = select.options[select.selectedIndex];
    // console.log({ select, option });

    //filter for posts from user/top
    if (select.name === 'section') {
      option.value === 'user'
        ? setIsUserSelected(true)
        : setIsUserSelected(false);
      option.value === 'top' ? setIsTopSelected(true) : setIsTopSelected(false);
    }
    dispatch(
      changeFilters(
        Object.assign(
          { ...toolkitFilters, page: 0 },
          { [select.name]: option.value }
        )
      )
    );
  };

  return (
    <div className='d-flex align-items-center justify-content-around'>
      {/* filter for section */}
      <div>
        <label htmlFor='section'></label>
        <select
          id='section'
          name='section'
          onChange={(e) => onFilterChange(e)}
          defaultValue={toolkitFilters.section}
        >
          <option value='hot'>Hot</option>
          <option value='top'>Top</option>
          <option value='user'>User</option>
        </select>
      </div>
      {/* filter for sort */}
      <div>
        <label htmlFor='sort'>sorted by: </label>
        <select
          id='sort'
          name='sort'
          onChange={(e) => onFilterChange(e)}
          defaultValue={toolkitFilters.sort}
        >
          <option value='viral'>Viral</option>
          <option value='top'>Top</option>
          <option value='time'>Newest</option>
          {isUserSelected && <option value='rising'>Rising</option>}
        </select>
      </div>
      {/* filter for window (time) */}
      <div>
        <label htmlFor='window'>Time:</label>
        <select
          id='window'
          name='window'
          onChange={(e) => onFilterChange(e)}
          defaultValue={toolkitFilters.window}
        >
          <option value='day'>Today</option>
          <option value='week'>Week</option>
          <option value='month'>Month</option>
          <option value='year'>Year</option>
          <option value='all'>all time</option>
        </select>
      </div>

      {/* testing next page */}
      <Stack direction='horizontal' gap={2}>
        <Button onClick={() => dispatch(previousPage())}>Prev</Button>
        {toolkitFilters.page}
        <Button onClick={() => dispatch(nextPage())}>Next</Button>
      </Stack>
    </div>
  );
};

export default Filters;
