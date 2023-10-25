// ThroneDonut.js

import React, { useState, useEffect } from 'react';
import { fetchCharacters } from './Api';
import { countByHouse } from './Utility';
import { renderChart } from './ChartRender';

function ThroneDonut() {

    // State for characters
    const [characters, setCharacters] = useState([]);

    useEffect(() => {
        // Fetch characters
        const fetchData = async () => {
            const charData = await fetchCharacters();
            setCharacters(charData);
        };

        fetchData();
    }, []);

    useEffect(() => {
        if (characters.length) {
            const houseCounts = countByHouse(characters);
            // Call to render the infamous donut
            renderChart(houseCounts); 
        }
    }, [characters]);

    return (
        <div>
            <canvas className="donut-chart"></canvas>
        </div>
    );
}

export default ThroneDonut;