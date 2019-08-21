import React from 'react';
import { Input } from 'semantic-ui-react'

const Search = ({ searchTerm, handleChange}) => {
    return(
        <div>
            <h4>Search by Name:
                <Input 
                type="text"
                value={searchTerm}
                onChange={event => handleChange(event)}
                />
            </h4>
        </div>
    )
}

export default Search