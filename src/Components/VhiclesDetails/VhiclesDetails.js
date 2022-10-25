import React, { useContext, useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link} from "react-router-dom";
import { PassVheicle } from "../../App";
import './VhiclesDetails.css'

const VhiclesDetails = (props) => {
  const vhecileProp = props.vhicle;
  const { title, imgUrl } = props.vhicle;
//  const passingVhicle = ()=>{
//   console.log(vheicle)
//   const newVhicle = {...vheicle};
//     newVhicle.vhiclename = title;
//     setVheicle(newVhicle);
    
//  }
  // const style = {
  //   width: "200px",
  //   height: "200px",
  //   display: "flex",
  // };
  // const [titles, setTitles] = useState({
  //   name:title,
  // }) 
  // const [vhicle, setVheicle] = useContext(PassVheicle);
 
  return (
    <div className="mx-3">
      <Link  to="/destination"  className='text-decoration-none'>
      <Card className="p-5 "  style={{ width: "100%" }}>
        <Card.Img style={{width:'100px'}} variant="top" src={imgUrl} />
        <Card.Body>
          <Card.Title >{title}</Card.Title>
        </Card.Body>
      </Card>
      </Link>
      
    </div>
  );
};

export default VhiclesDetails;
