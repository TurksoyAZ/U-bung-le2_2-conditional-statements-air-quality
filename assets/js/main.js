
const body=document.querySelector("body");
const range=document.getElementById("range");

let labelOutput=document.getElementById("labelOutput");
let outputText1=document.getElementById("outputText1");
let outputText2=document.getElementById("outputText2");



function changeRange(){

/* IF Else */
if(range.value <=50){
    
    body.style.backgroundColor="green"
    body.style.transitionDuration="2s"
    labelOutput.innerHTML="AQI:"+range.value
    outputText1.innerHTML="Level of health concern: Good"
    outputText2.innerHTML="Level of health effect: Little or no risk"

} else if (range.value >=50 && range.value <=100) {

    body.style.backgroundColor="red"
    body.style.transitionDuration="2s"
    labelOutput.innerHTML="AQI:"+range.value
    outputText1.innerHTML="Level of health concern: Moderate "
    outputText2.innerHTML="Level of health effect: Acceptable quality"

}
if(range.value >=100 && range.value <=150){

    body.style.backgroundColor="blue"
    body.style.transitionDuration="2s"
    labelOutput.innerHTML="AQI:"+range.value
    outputText1.innerHTML="Level of health concern: Unhealthy for sensitive groups"
    outputText2.innerHTML="Level of health effect: Generable publics not likely affected"

}

}

