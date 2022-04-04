import React from 'react';
import Spotify from '../components/Spotify';
import Instagram from '../components/Instagram';
import TikTok from '../components/TikTok';
import "./DataPage.css"
import Option from '../components/option';

function DataPage(props) {
    return (
        <div className="table">
            <Option></Option>
            <Spotify></Spotify>
            <Instagram></Instagram>
            <TikTok></TikTok>
        </div >
    );
}

export default DataPage;