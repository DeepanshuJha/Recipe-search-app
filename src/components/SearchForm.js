import React, { useContext, useState } from 'react';
import { GlobalContext } from '../context/GlobalState';

export const SearchForm = () => {
    const { updateQuery } = useContext(GlobalContext);

    //Local State
    const [search, setSearch] = useState("");
    
    const onSubmit = (e) => {
        e.preventDefault();
        updateQuery(search);
        setSearch('');
    }

    const updateSearch = (e) => {
        setSearch(e.target.value);
    }

    return (
        <div>
            <form onSubmit={onSubmit}>
                <input type="text" value={search} onChange={updateSearch}></input>
                <button type="submit">Search</button>
            </form>
        </div>
    )
}
