import React from 'react';
import VhiclesDetails from '../VhiclesDetails/VhiclesDetails';
import  bikeImage from "../images/Frame-1.png"
import  carImage from "../images/Frame-2.png"
import  busImage from "../images/Frame.png"
import  trainImage from "../images/Group.png";
import './vheicles.css'

const Vheicles = () => {
    const vhicles = [
        {
            title: 'Bike',
            description: 'Choose Bike for safe journy',
            imgUrl: bikeImage,
        },
        {
            title: 'Car',
            description: 'Choose Car for safe journy',
            imgUrl: carImage,
        },
        {
            title: 'Bus',
            description: 'Choose Bus for safe journy',
            imgUrl: busImage,
        },
        {
            title: 'Train',
            description: 'Choose Train for safe journy',
            imgUrl: trainImage,
        },
    ]
    return (
        <div className='vhicle-container d-flex justify-content-center py-5'>
        
            {
                vhicles.map(vhicle=><VhiclesDetails vhicle={vhicle} key={vhicle.id}/>)
            }
        </div>
    );
};

export default Vheicles;