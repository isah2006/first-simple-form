import React from 'react';


function App() {

var myName = "Abdul";

function alertMyName() {
  alert(myName);
}

  return (
    <div className="App">
      <button onClick={alertMyName}>Clickable Button</button>
    <input type='text'/>
    <h1>{myName}</h1>
    </div>
  );
}

export default App;
