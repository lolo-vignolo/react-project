import React from "react";
import Card from "./Card";
import emojipedia from "../emojipedia";




function App() {
  return (
    <div>
      <h1>
      <span>emojipedia</span>
    </h1>
   
    <dl className="dictionary"> 
    {emojipedia.map(newEmoji =>(
    <Card 
    key={newEmoji.id}
    emoji={newEmoji.emoji}
    name={newEmoji.name}
    meaning={newEmoji.meaning}
    />
  ))}</dl>
    </div>
    
  );}

export default App;
