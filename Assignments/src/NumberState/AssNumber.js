// testing testing number AssNumber.js

import { useState } from "react";

function AssNumber()
{
     let[count,setCount1] = useState(100);

     function incrementCounter()
     {
        setCount1(count+2);
       // return count +1;
        console.log(' incrementCountercount' + count);
         }

         function DecrementCounter()
         {
            setCount1(count-1);
           // return count +1;
            console.log(' DecrementCounter count' + count);
             }

             function ResetCounter()
             {
                setCount1(count=100);
                console.log('ResetCounter count' + count);
                 }

    return (
        <div>
        <h1>{count}</h1>
          <button onClick={incrementCounter}>Increment</button>
          <button onClick={DecrementCounter}>Decrement</button>
          <button onClick={ResetCounter}>Reset</button>
      </div>

    );

}
export default AssNumber;