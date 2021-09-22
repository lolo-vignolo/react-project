import React from "react";
import Emoji from "./Emoji";
import Title from "./Title";
import Definition from "./Definition";


function Card (props){
    return(
        
       <div className="term">
       
          
          <dt>
            <Emoji newEmoji={props.emoji} />

            <Title newTitle={props.name} />
          </dt>

          <Definition newDefinition={props.meaning} />
          
         
          </div>
          
    );
}

export default Card;

    