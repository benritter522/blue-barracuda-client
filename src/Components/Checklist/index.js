// import material UI checkbox component (don't forget to yarn add whatever you need to install)
    // https://material-ui.com/components/checkboxes/ if you need some references.

const Checklist = () => {

    // array of strings? array of objects which include strings and a 'checked' boolean saved as state variables? dealer's choice.

    return(
        <div>
            <p>Checklist</p>

            {/* 
            
            map through array
            
            return checkbox with array item contents passed through as props
            
                
                not currently planning on us storing any data for the user, so the checklist will likely refresh each time the app is loaded, but honestly I don't really care about having any further functionality past that, at least not at this time.
             */}
        </div>
    )
}

export default Checklist;