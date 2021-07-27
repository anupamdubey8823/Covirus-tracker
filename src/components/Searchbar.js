import React, { useState } from "react";
import { Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Searchbar.css';

function Searchbar() {
    const [search, setSearch] = useState('');
    
    function handleChange(event) {
        setSearch(event.target.value);
    }
    return (
        <div className='search-bar'>
            <Form>
                <Form.Control size="lg" typPe="text" placeholder="Search your State..." value={search} onChange={handleChange} />
            </Form>
        </div>
    )
}

export default Searchbar;