import React from 'react';
import Search from '../../components/Searchbar';
import './LandingPage.css'

function LandingPage() {
    return (
        <div className="header-component">
            <h1>Covid-19 INDIA Dashboard</h1>
            <Search />
        </div>
    )
}

export default LandingPage;