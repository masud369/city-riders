import React, { useContext } from "react";
import './destinationFixed.css';
import car from '../images/Frame-2.png'
import { PassLocation, PassVheicle } from "../../App";

const DestinationFixed = () => {
  const [location, setLocation] = useContext(PassLocation);
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-md-4 set-destination my-5 p-3 rounded">
            <div className="location rounded">
                <h5>{location.from}</h5>
                <h5>{location.to}</h5>
            </div>
            <div className="one-person person py-2 my-2 rounded d-flex justify-content-evenly">
              <img width="50px" src={car} alt="" />
              <h4 >car </h4>
              <span>4</span>
              <h4 className="mx-4">$65</h4>
            </div>
            <div className="two-person person py-2 my-2 rounded d-flex justify-content-evenly">
              <img width="50px" src={car} alt="" />
              <h4>car </h4>
              <span>4</span>
              <h4 className="mx-4">$65</h4>
            </div>
            <div className="three-person person py-2 my-2 rounded d-flex justify-content-evenly">
             <img width="50px" src={car} alt="" />
              <h4>car </h4>
              <span>4</span>
              <h4 className="mx-4">$65</h4>
            </div>
          </div>
          <div className="col-md-8 destination-map">
            <div className="my-5 rounded">
              <iframe className=" rounded" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d233667.82239243723!2d90.27919370747217!3d23.78088745621175!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b8b087026b81%3A0x8fa563bbdd5904c2!2z4Kai4Ka-4KaV4Ka-!5e0!3m2!1sbn!2sbd!4v1664027418961!5m2!1sbn!2sbd" width="95%" height="450" style={{ border: "0" }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DestinationFixed;
