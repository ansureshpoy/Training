import { useState, useEffect } from "react";

function UseEffectexample(){
    let [count, setCount] = useState(0);
    let [name, setName] = useState("SureshKumar");

 
    useEffect(() => {
        console.log( `with an empty dependency array ([])`);
    });

    useEffect(() => {
        console.log('with no dependency array.');
    },[]);

    useEffect(() => {
        console.log("with no dependency array.");
    },[]);

    useEffect(() => {
        console.log(`with ${name} as the dependency`);
    },[name]);


    useEffect(() => {
        console.log(`with ${count} as the dependency`);
    },[count]);

    function incrementNumber(){
        setCount(count+1);
        name = name+"a";
        setName(name);
    }

    return (
        <form>
           <div>
                            <label>User Name:</label>
                            <input type="text" className="inputText" value={name}/>
                        </div>
                        <div>
                            <label>Number:</label>
                            <input type="text" className="inputText" value={count}/>
                        </div>
                <h1>
                    <button onClick = {incrementNumber} type="button">Increment</button>
                </h1>
        </form>
    );
}

export default UseEffectexample;