/*--------------------------------------------------------------------------------------------------*/
/**
 * Javascript file for the party horn, required for cse110 Lab5
 * @author: Sujan Rai
 * @date: 2/2/2021
 * references:
 *      https://www.geeksforgeeks.org/how-to-check-whether-a-radio-button-is-selected-with-javascript/
 *      https://www.w3schools.com/jsref/prop_pushbutton_disabled.asp
 *      https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_number_value2
 *      https://www.w3schools.com/jsref/dom_obj_audio.asp
 *      
 */

/*---------------------------------------------------------------------------------------------------*/

/**
 * function that will select the right audio type and the audio image
 * based on the radio button checked
 */
function selectHornType() {
    if(document.getElementById("radio-air-horn").checked == true) {
        document.getElementById("sound-image").src = "./assets/media/images/air-horn.svg";
        document.getElementById("horn-sound").src = "./assets/media/audio/air-horn.mp3";
    } else if(document.getElementById("radio-car-horn").checked == true) {
        document.getElementById("sound-image").src = "./assets/media/images/car.svg";
        document.getElementById("horn-sound").src = "./assets/media/audio/car-horn.mp3"; 
    } else {
        document.getElementById("sound-image").src = "./assets/media/images/party-horn.svg";
        document.getElementById("horn-sound").src = "./assets/media/audio/party-horn.mp3"; 
    }
}


/** 
 * Function to update volume number field input from volume slider
*/

function sliderToNumber() {
    document.getElementById("volume-number").value = 
                            document.getElementById("volume-slider").value;
    /* every time there is change in volume number input field, update the volume 
    icon and honk button */
    assignVolIcon();
}

/**
 * Function to update slider volume from volume number field input
*/

function numberToSlider() {

    document.getElementById("volume-slider").value = 
                            document.getElementById("volume-number").value;
    /* every time there is change in volume slider bar, update the volume 
    icon and honk button */
    assignVolIcon();
}
/** 
 * Function that assigns the correct volume icon depending on the sound 
 * level on the volume number
*/

function assignVolIcon() {
    let numVol = document.getElementById("volume-number").value;
    // get and the store min value of slider bar
    let minVol = document.getElementById("volume-slider").min;
    if(numVol <= minVol) {
        document.getElementById("volume-image").src = "./assets/media/icons/volume-level-0.svg";
        // set the slider bar volume to have its min value when the honk is muted
        document.getElementById("volume-slider").value = minVol;
        // disable the honk/make the sound muted when the volume is less than 1
        document.getElementById("honk-btn").disabled = true;
    } else if(numVol >= 1 && numVol <= 33) {
        document.getElementById("volume-image").src = "./assets/media/icons/volume-level-1.svg";
        document.getElementById("honk-btn").disabled = false;
    } else if( numVol >= 34 && numVol <= 66) {
        document.getElementById("volume-image").src = "./assets/media/icons/volume-level-2.svg";
        document.getElementById("honk-btn").disabled = false; 
    } else {
        document.getElementById("volume-image").src = "./assets/media/icons/volume-level-3.svg";
        document.getElementById("honk-btn").disabled = false;
    }
}

//add an input event that will trigger slider volume to update in response of volume number
(document.getElementById("volume-number")).addEventListener("input", numberToSlider);
//add an change event that will trigger volume number to update in response of slider
(document.getElementById("volume-slider")).addEventListener("change", sliderToNumber);
// add an input event that will trigger the selection of right audio type and audio image
(document.getElementById("audio-selection")).addEventListener("input", selectHornType);

/**
 * Funtion that is responsible for playing an audio 
 * sound by updating the audio tag.
*/
function playAudio(event) {
    // prevent resetting back to the default settings
    event.preventDefault();
    // get audio tag id to update its sources and volume
    let updatedAudio = document.getElementById("horn-sound");
    //update source audio sound based on the radio selection
    updatedAudio.src = document.getElementById("horn-sound").src;
    // get the max value of volume level
    let maxVol = document.getElementById("volume-number").max; 
    // scale the volume level based on user choice( based on volume number and slider bar)
    updatedAudio.volume = document.getElementById("volume-number").value / maxVol;
    // play the updated sound
    updatedAudio.play();
}

// create a submit event that will trigger the honk button to play audio
document.getElementById("party-horn-form").addEventListener("submit", playAudio);


/*************** The End ******************************************************************************/