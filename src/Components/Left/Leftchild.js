import React,{ useContext} from "react";
import {data} from "../../App";

function Leftchild(){
const mydata = useContext(data);
console.log(mydata);
return(
    <div className="leftchild">Left Child</div>
);
};
export default Leftchild;