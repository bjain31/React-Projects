import React, {useState, useEffect} from 'react';
import TinderCard from 'react-tinder-card';
import "./TinderCards.css";
import axios from "./axios";

function TinderCards() {
    const [people, setPeople] = useState([
        {
            name:"Elon Musk",
            url:"https://upload.wikimedia.org/wikipedia/commons/e/ed/Elon_Musk_Royal_Society.jpg",
        },
        {
            name:"Jeff Bezos",
            url:"https://content.fortune.com/wp-content/uploads/2020/02/GettyImages-1078542150.jpg",
        },
    ]);

    // useEffect(() => {
    //     async function fetchData() {
    //         const req = await axios.get("/tinder/cards");

    //         setPeople(req.data);
    //     }

    //     fetchData();
    // }, []);


    const swiped=(direction, nameToDelete)=>{
        console.log("removing: "+nameToDelete);
    };
    const outOfFrame=(name)=>{
        console.log(name+" left the screen!");
    };
    return (
        <div className="tinderCards">
            <div className="tinderCards_cardContainer">
           {people.map((person)=>(
            <TinderCard
                className="swipe"
                key={person.name}
                preventSwipe={["up", "down"]}
                onSwipe={(dir)=>swiped(dir, person.name)}
                onCardLeftScreen={()=>outOfFrame(person.name)}
            >
             <div className="card"
                 style={{backgroundImage:`url(${person.imgUrl})`}}
                 
             >
                 <h3>{person.name}</h3>
             </div>
            </TinderCard>
           ))}
           </div> 
        </div>
    );
}

export default TinderCards;

