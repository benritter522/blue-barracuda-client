// import material UI checkbox component (don't forget to yarn add whatever you need to install)
    // https://material-ui.com/components/checkboxes/ if you need some references.

import Checkbox from '@material-ui/core/Checkbox';

const Checklist = () => {

    // array of strings? array of objects which include strings and a 'checked' boolean saved as state variables? dealer's choice.
    const basicKit = [
        "First Aid Kit",
        "Water (1 gallon per person per day)",
        "Non perishable foods (at least 3-day supply)",
        "Flashlight",
        "Battery-powered or hand crank radio",
        "Extra Batteries",
        "Whistle (to signal for help)",
        "Dusk mask",
        "Phone Charger and a backup battery",
        "Documents",
        "Toiletries",
        "Moist towelettes, garbage bags and plastic ties",
        "Local Maps"
    ];

    return(
        <div>
            <p>Checklist</p>

            <div>
                {
                    basicKit.map((item, index) => {
                        return(
                            <div className="checkList" key={index}>
                                <p /*style={{justifyContent: 'left'}}*/>
                                    <Checkbox 
                                        color="primary"
                                        inputProps={{ 'aria-label' : 'secondary checkbox'}}
                                    />
                                    {item}
                                </p>
                            </div>
                        )
                    })
                }
            </div>
            {/* 
            
            map through array
            
            return checkbox with array item contents passed through as props
            
                
                not currently planning on us storing any data for the user, so the checklist will likely refresh each time the app is loaded, but honestly I don't really care about having any further functionality past that, at least not at this time.
             */}
        </div>
    )
}

export default Checklist;