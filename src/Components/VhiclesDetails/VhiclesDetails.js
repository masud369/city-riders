import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link} from "react-router-dom";
import './VhiclesDetails.css'

const VhiclesDetails = (props) => {
  const { title, imgUrl } = props.vhicle;
  console.log(imgUrl);
  const style = {
    width: "200px",
    height: "200px",
    display: "flex",
  };
  return (
    <div className="mx-3">
      <Link to="/signup" className='text-decoration-none'>
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
