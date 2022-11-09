import Left from './Components/Left/Left';
import Right from './Components/Right/Right';
import React from "react";
import './App.css';

export const data = React.createContext([]);
function App() {
  const mydata = [1,2,3];
  // console.log(mydata);
  return (
    <div className="App">
      <data.Provider value={mydata}>
      <Left />
      </data.Provider>
      <Right />
     
    </div>
  );
}

export default App;
