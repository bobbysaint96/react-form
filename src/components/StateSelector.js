import React from "react";



const StateSelector = () => {

    
    // fetch('https://mocki.io/v1/47a15552-e3f3-455b-9293-7b5aa5d4ab88')
    //     .then(response => response.json())
    //     .then(data => console.log(data));
    
    const statesArray = ['Florida', 'Maryland', 'Texas', 'Virginia'];

    return (
        <div>
            <label htmlFor="states">Select your state:</label>

                <select name="states" id="states">
                    { statesArray.map((state, i) => {
                        return <option value={state}>{state}</option>
                    })}
                </select>
        </div>
      );
}

export default StateSelector;
