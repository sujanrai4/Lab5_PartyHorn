/**
 * Javascript file for the party horn, required for cse110 Lab5
 * @author: Sujan Rai
 * @date: 2/2/2021
 * references:
 *      https://www.geeksforgeeks.org/how-to-check-whether-a-radio-button-is-selected-with-javascript/
 *      https://www.w3schools.com/jsref/prop_pushbutton_disabled.asp
 *      https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_number_value2
 *      
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


/*
    update volume number field input from volume slider
*/

function sliderToNumber() {
    document.getElementById("volume-number").value = 
                            document.getElementById("volume-slider").value;
    assignVolIcon;
}

/* 
    update slider volume from volume number field input
*/

function numberToSlider() {

    document.getElementById("volume-slider").value = 
                            document.getElementById("volume-number").value;
    assignVolIcon;
}
/* 
    assign the correct volume icon depending on the sound level on the volume number
*/

function assignVolIcon() {
    let numVol = document.getElementById("volume-number").value;
    
    if(numVol == 0) {
        document.getElementById("volume-image").src = "./assets/media/icons/volume-level-0.svg";
        document.getElementById("honk-btn").disabled = true;
    } else if(numVol <= 33) {
        document.getElementById("volume-image").src = "./assets/media/icons/volume-level-1.svg";
        document.getElementById("honk-btn").disabled = false;
    } else if(numVol <= 66) {
        document.getElementById("volume-image").src = "./assets/media/icons/volume-level-2.svg";
        document.getElementById("honk-btn").disabled = false; 
    } else {
        document.getElementById("volume-image").src = "./assets/media/icons/volume-level-3.svg";
        document.getElementById("honk-btn").disabled = false;
    }
}

//add an input event that will trigger slider volume to update in response of volume number
(document.getElementById("volume-numer")).addEventListener("input", numberToSlider);
//add an input event that will trigger volume number to update in response of slider
(document.getElementById("volume-slider")).addEventListener("input", sliderToNumber);

document.addEventListener("change", selectHornType);
