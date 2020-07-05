import React from 'react';
import './search.styles.scss';
import {FiSearch} from 'react-icons/fi';

export default function Search() {
    return(
        <div className="search">
            <input className="searchInput" />
            <FiSearch className="searchIcon" />
        </div>
    )
}