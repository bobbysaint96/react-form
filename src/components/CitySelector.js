import React from "react";

const CitySelector = () => {
    return (
        <div>
            <label for="cities">Select your city:</label>

                <select name="cities" id="cities">
                    {/* some loop will populate this */}
                    <option value="tokyo">Tokyo</option>
                    <option value="paris">Paris</option>
                    <option value="new york city">New York City</option>
                    <option value="washington d.c.">Washington D.C.</option>
                    
                </select>

        </div>
      );
}

export default CitySelector;
