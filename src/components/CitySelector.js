import React from "react";



const CitySelector = () => {

    // fetch('https://mocki.io/v1/07158a56-ff47-4e71-8180-d838ab25c7be')
    //     .then(response => response.json())
    //     .then(data => {
    //         console.log(data);
    //     });

    return (
        <div>
            <label htmlFor="cities">Select your city:</label>

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
