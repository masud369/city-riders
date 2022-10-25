import React, { useState } from 'react';
import { useContext } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { PassLocation } from '../../App';
import './SearchDestination.css'


const SearchDestination = () => {
    const [getLocation, setGetLocation] = useState({
        
    });
     
    const handelLocation = (e)=>{
        let nameCheck = true;
        if(e.target.name === 'from'){
            nameCheck = e.target.value; 
        }
        if(e.target.name === 'to'){
            nameCheck = e.target.value;
        }
        if(nameCheck){
            const passlocation = {...getLocation}
            passlocation[e.target.name] = e.target.value
            setGetLocation(passlocation)
        }
        
    }
    const [location, setLocation] = useContext(PassLocation)
    const navigat = useNavigate(); 
    const passtoFixedDestination = ()=>{
        if(location.from && location.to){
            navigat("/destinationfixed")
        }
    }
    const passedLocation =()=>{
        const newLocation = {...getLocation}
        setLocation(newLocation)  
        navigat("/destinationfixed")
    }

    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col-md-4 set-destination my-5 p-3 rounded">
                        <label htmlFor="from">Pic From</label>
                        <input onChange={handelLocation} name='from' type="text" id='from'/><br />
                        <label  style={{marginRight:'86%'}}  htmlFor="to">Pic To</label>
                        <input type="text" onChange={handelLocation} name='to' id='to'/><br />
                        <button  onClick={passedLocation}>Search</button>
                        
                    </div>
                    <div className="col-md-8 destination-map">
                        <div className="my-5 rounded">
                            <iframe className=" rounded" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d233667.82239243723!2d90.27919370747217!3d23.78088745621175!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b8b087026b81%3A0x8fa563bbdd5904c2!2z4Kai4Ka-4KaV4Ka-!5e0!3m2!1sbn!2sbd!4v1664027418961!5m2!1sbn!2sbd" width="95%" height="450" style={{border:"0"}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                        </div>
                    </div>

                </div>
            </div>
            
             
            
            
        </div>
    );
};

export default SearchDestination;