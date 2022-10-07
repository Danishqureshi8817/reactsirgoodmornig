import React from "react";

function App(){
   //new date (Y,M,D,H,M.S,M.S)
    let  curdate = new Date(2020,5,2,11)
    curdate = curdate.getHours();
    let txt = ""
    const cssstyle = {}
  
    if(curdate>1 && curdate<12){
        txt = "Good Morning"
        cssstyle.color = "#00b894"
    }
    else if(curdate>=12 && curdate<20){
        txt = "Good Afternoon"
        cssstyle.color = "orange"
    }
    else if(curdate>=20 && curdate<=24){
        txt = "Good Night"
        cssstyle.color = "black"
    }
   return (
    <>
        <div>
            <h1>
                Hello Sir, <snap style = {cssstyle}>{txt}</snap>
            </h1>
        </div>
    </>
   )
}

export default App;