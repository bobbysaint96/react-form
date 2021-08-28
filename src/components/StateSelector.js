import React from "react";

const StateSelector = () => {
    return (
        <div>
            <label for="states">Select your state:</label>

                <select name="states" id="states">
                    {/* some loop will populate this */}
                    <option value="florida">Florida</option>
                    <option value="maryland">Maryland</option>
                    <option value="texas">Texas</option>
                    <option value="Virginia">Virginia</option>
                    
                </select>
        </div>
      );
}

export default StateSelector;
