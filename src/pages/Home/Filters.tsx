import { ChangeEvent, useState } from 'react';
import { Button, Form, Stack } from 'react-bootstrap';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import {
  changeFilters,
  nextPage,
  previousPage,
} from '../../features/filtersSlice';

const Filters = () => {
  const [isTopSelected, setIsTopSelected] = useState(false);
  const [isUserSelected, setIsUserSelected] = useState(false);

  //!Redux toolkit filters
  const toolkitFilters = useAppSelector((state) => state.filters);
  const dispatch = useAppDispatch();

  const onFilterChange = (event: any) => {
    if (event.target.type === 'checkbox') {
      dispatch(
        changeFilters(
          Object.assign(
            { ...toolkitFilters, page: 0 },
            { showViral: event.target.checked }
          )
        )
      );
    } else {
      const select = event.target;
      const option = select.options[select.selectedIndex];

      //filter for posts from user/top
      if (select.name === 'section') {
        option.value === 'user'
          ? setIsUserSelected(true)
          : setIsUserSelected(false);
        option.value === 'top'
          ? setIsTopSelected(true)
          : setIsTopSelected(false);
      }
      dispatch(
        changeFilters(
          Object.assign(
            { ...toolkitFilters, page: 0 },
            { [select.name]: option.value }
          )
        )
      );
    }
  };

  return (
    <div className='filters'>
      {/* filter for section */}
      <div className='select-wrapper'>
        <select
          id='section'
          name='section'
          title='Select '
          onChange={(e: ChangeEvent<HTMLSelectElement>) => onFilterChange(e)}
          defaultValue={toolkitFilters.section}
        >
          <option value='hot'>Most Viral</option>
          <option value='top'>Highest Scoring</option>
          <option value='user'>User submitted</option>
        </select>
      </div>
      {/* filter for sort */}
      <div className='select-wrapper'>
        <select
          id='sort'
          name='sort'
          onChange={(e: ChangeEvent<HTMLSelectElement>) => onFilterChange(e)}
          defaultValue={toolkitFilters.sort}
        >
          <option value='viral'>Viral</option>
          <option value='top'>Top</option>
          <option value='time'>Newest</option>
          {isUserSelected && <option value='rising'>Rising</option>}
        </select>
      </div>

      {/* filter for window (time) */}
      <div className='select-wrapper'>
        <select
          id='window'
          name='window'
          onChange={(e: ChangeEvent<HTMLSelectElement>) => onFilterChange(e)}
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
        <Form.Check
          type='checkbox'
          label='Show Viral'
          aria-label='Show viral'
          checked={toolkitFilters.showViral}
          onChange={(e: ChangeEvent<HTMLInputElement>) => onFilterChange(e)}
        />
      </Stack>
      <Stack direction='horizontal' gap={2}>
        <Button
          disabled={toolkitFilters.page < 1}
          onClick={() => dispatch(previousPage())}
        >
          Prev
        </Button>
        {toolkitFilters.page}
        <Button onClick={() => dispatch(nextPage())}>Next</Button>
      </Stack>
    </div>
  );
};

export default Filters;
