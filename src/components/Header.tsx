import React from 'react';
import FilterButton from '../containers/FilterButton';
import {VisibilityFilters} from '../actions/types';


const Header = () => (
    <div>
        <div>
            <h1>Todo App</h1>
            <h2>Some random subtitle!</h2>

            <FilterButton filter={VisibilityFilters.SHOW_ALL}>Show all</FilterButton>
            <FilterButton filter={VisibilityFilters.SHOW_ACTIVE}>Active</FilterButton>
            <FilterButton filter={VisibilityFilters.SHOW_COMPLETED}>Completed</FilterButton>
        </div>
        <div>

        </div>
    </div>
)

export default Header;