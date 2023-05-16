import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-slider/dist/css/bootstrap-slider.min.css';
import './range.css'; // Import the CSS file from the HTML code
import $ from 'jquery'; // Import jQuery

import 'bootstrap-slider'; // Import the Bootstrap Slider plugin
import 'bootstrap'; // Import Bootstrap

function RangeSlider() {
    const [minValue, setMinValue] = React.useState(10);
    const [maxValue, setMaxValue] = React.useState(3500);

    React.useEffect(() => {
        const slider = $('.input-range').slider({
            step: 10,
            value: [10, 3500],
            min: 0,
            max: 3500,
            range: true,
            tooltip: 'hide', // Add this line to hide the range values on hover
        });

        slider.on('slide', function (event) {
            const values = event.value;
            setMinValue(values[0]);
            setMaxValue(values[1]);
        });
    }, []);

    return (
        <div className=''>
     
            <input className="input-range" type="text" />
            <div className="d-flex justify-content-between">
                <span className="min-value">${minValue}</span>
                <span className="max-value">${maxValue}</span>
            </div>
        </div>
    );
}

export default RangeSlider;
