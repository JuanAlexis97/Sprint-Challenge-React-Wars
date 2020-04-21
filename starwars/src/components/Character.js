// Write your Character component here
import React from "react";
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle
  } from 'reactstrap';


const Character = function(props){
    
console.log("props",props?.characters?.data?.results);
const charArr = props?.characters?.data?.results;


    return(
        <div className="parentDiv">
            {charArr?.map(function(e){
                return (
                    <div>
                        <Card className="card">
                            <CardImg  className="cardImg"  top width="100%" src={e.image} alt="Card image cap" />
                            <CardBody>
                            <div className="nameNStatus">
                            <CardTitle>{e.name}</CardTitle>
                            <CardSubtitle>{e.status}</CardSubtitle>
                            </div>
                            <CardText className="cardText">species:{e.species}<br/>gender:{e.gender}</CardText>
                            </CardBody>
                        </Card>
                        </div>)
            })}
        </div>
    )
}

export default Character;