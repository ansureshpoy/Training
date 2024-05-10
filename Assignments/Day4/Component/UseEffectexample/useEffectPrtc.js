import { useState, useEffect } from "react";

function UseEffectPrtc(){
    let [count, setCount] = useState(0);
    let [name, setName] = useState("Bharadwaj");

    useEffect(() => {
        console.log("Component Mounted no Dependency");
    });
    useEffect(() => {
        console.log("Component Mounted with array");
    },[]);
    // with 2nd paramenter it will call for every render of component
    useEffect(() => {
        console.log(`Component Mounted for ${name}`);
    },[name]);
    //[name] when ever name changed on render it will effect
    useEffect(() => {
        console.log(`Component Mounted for ${count}`);
    },[count]);
    //[Count] when ever count changed on render it will effect, it can contain state or props
    useEffect(() => {
        console.log(`Component Mounted for ${name} and ${count}`);
    },[name,count]);
    //[Count] when ever count changed on render it will effect, it can contain state or props

    function incrementNumber(){
        setCount(count+1);
        name = name+"a";
        setName(name);
    }

    return (
        <div className="App">  
            <div>    
                <h1>
                    Task4:[useEffect] Dependency in React JS
                </h1>
            </div>
            <div className="container">
                <div className="form-details">
                    <form>
                        <div>
                            <label>User Name:</label>
                            <input type="text" className="inputText" value={name} readOnly={true}/>
                        </div>
                        <div>
                            <label>Number:</label>
                            <input type="text" className="conText" value={count} readOnly={true}/>
                        </div>
                    </form>
                </div>
                <h1>
                    <button onClick = {incrementNumber}>Increment</button>
                </h1>
            </div>
        </div>
    );
}

export default UseEffectPrtc;