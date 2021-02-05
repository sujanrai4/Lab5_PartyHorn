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
    assignVolIcon();
}

/* 
    update slider volume from volume number field input
*/

function numberToSlider() {

    document.getElementById("volume-slider").value = 
                            document.getElementById("volume-number").value;
    assignVolIcon();
}
/* 
    assign the correct volume icon depending on the sound level on the volume number
*/

function assignVolIcon() {
    let numVol = document.getElementById("volume-number").value;
    let source = document.getElementById("volume-image").src 
    if(numVol == 0) {
         document.getElementById("volume-image").src = "./assets/media/icons/volume-level-0.svg";
        document.getElementById("honk-btn").disabled = true;
    } else if(numVol >= 1 && numVol <= 33) {
        console.log(numVol);
        document.getElementById("volume-image").src = "./assets/media/icons/volume-level-1.svg";
        console.log(source); 
        document.getElementById("honk-btn").disabled = false;
    } else if( numVol >= 34 && numVol <= 66) {
        document.getElementById("volume-image").src = "./assets/media/icons/volume-level-2.svg";
        document.getElementById("honk-btn").disabled = false; 
    } else {
        console.log(numVol);
        console.log(source);  
        document.getElementById("volume-image").src = "./assets/media/icons/volume-level-3.svg";
        document.getElementById("honk-btn").disabled = false;
    }
}

//add an input event that will trigger slider volume to update in response of volume number
(document.getElementById("volume-number")).addEventListener("input", numberToSlider);
//add an input event that will trigger volume number to update in response of slider
(document.getElementById("volume-slider")).addEventListener("change", sliderToNumber);

(document.getElementById("audio-selection")).addEventListener("input", selectHornType);
(document.getElementById("volume-number")).addEventListener("input", assignVolIcon);

/* 
    play audio sound
*/
/*function playAudio(event) {
    event.preventDefault();
    assignVolIcon;
    document.getElementById("horn-sound").play();

    
}*/
function playAudio(event) {
    event.preventDefault();
    let newAudio = document.createElement("AUDIO");
    let newSrc = document.createElement("SOURCE");
    newSrc.src = document.getElementById("horn-sound").src;
    newAudio.volume = document.getElementById("volume-slider").value / 100;
    newAudio.appendChild(newSrc);
    document.body.appendChild(newAudio);
    newAudio.play();
    let num = document.getElementsByTagName("AUDIO");
    console.log(num);


    
}
/**
 * create an event listener for the entire form that responds to horn button
 */
document.getElementById("party-horn-form").addEventListener("submit", playAudio);