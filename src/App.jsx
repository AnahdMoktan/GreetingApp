import React from "react";

function App(){
    let currentDate = new Date();
    currentDate = currentDate.getHours();
    let greeting = '';
    const cssstyle = {
    };
    if(currentDate >= 1 && currentDate <=12 ){
        greeting = 'Good Morning.';
        cssstyle.color = 'green';
    }else if(currentDate >= 12 && currentDate <=19){
        greeting = 'Good Evening.';
        cssstyle.color = 'orange';
    }else{
    greeting = 'Good Night.';
    cssstyle.color = 'black';
    }
    return(
        <>
        <div>
          <h1>Hello Everyone!!!! <span style={cssstyle}>{ greeting }</span></h1>
        </div>
        </>
    )
};

export default App;