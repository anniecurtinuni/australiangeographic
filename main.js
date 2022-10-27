console.log ("JavaScript is working!");

/*----ACCESSING PROFILE FROM MAIN PAGE----*/

//get button for each planet
let mercuryButton=document.querySelector("#mercurybutton");
let venusButton=document.querySelector("#venusbutton");
let earthButton=document.querySelector("#earthbutton");
let marsButton=document.querySelector("#marsbutton");
let jupiterButton=document.querySelector("#jupiterbutton");
let saturnButton=document.querySelector("#saturnbutton");
let uranusButton=document.querySelector("#uranusbutton");
let neptuneButton=document.querySelector("#neptunebutton");

//listen for click

//mercury button click
mercuryButton.addEventListener('click', function(){
    
    //these are the functions that are run when the button is clicked
    hideSection("mercury");
    showSection("mercury");
});

//mercury button click
venusButton.addEventListener('click', function(){

    //these are the functions that are run when the button is clicked
    hideSection("venus");
    showSection("venus");
});

//earth button click
earthButton.addEventListener('click', function(){

    //these are the functions that are run when the button is clicked
    hideSection("earth");
    showSection("earth");
});

//mercury button click
marsButton.addEventListener('click', function(){

    //these are the functions that are run when the button is clicked
    hideSection("mars");
    showSection("mars");
});

//jupiter button click
jupiterButton.addEventListener('click', function(){

    //these are the functions that are run when the button is clicked
    hideSection("jupiter");
    showSection("jupiter");
});

//saturn button click
saturnButton.addEventListener('click', function(){

    //these are the functions that are run when the button is clicked
    hideSection("saturn");
    showSection("saturn");
});

//mercury button click
uranusButton.addEventListener('click', function(){

    //these are the functions that are run when the button is clicked
    hideSection("uranus");
    showSection("uranus");
});

//neptune button click
neptuneButton.addEventListener('click', function(){

    //these are the functions that are run when the button is clicked
    hideSection("neptune");
    showSection("neptune");
});

//function for hiding main section//
function hideSection(planetId) {
    document.querySelector("#"+planetId+"section").style.display="none";
    
}

//function to bring up planet profile//
function showSection(planetId) {
    document.querySelector("#"+planetId+"profile").style.display="block";
}




/*----PROFILE BACK BUTTON----*/
//get button for each profile
let mercuryBackButton=document.querySelector("#mercurybackbutton");
let venusBackButton=document.querySelector("#venusbackbutton");
let earthBackButton=document.querySelector("#earthbackbutton");
let marsBackButton=document.querySelector("#marsbackbutton");
let jupiterBackButton=document.querySelector("#jupiterbackbutton");
let saturnBackButton=document.querySelector("#saturnbackbutton");
let uranusBackButton=document.querySelector("#uranusbackbutton");
let neptuneBackButton=document.querySelector("#neptunebackbutton");

//listen for click
mercuryBackButton.addEventListener('click', function(){
    
    //these are the functions that are run when the button is clicked
    hideThisSection("mercury");
    showThisSection("mercury");
});

venusBackButton.addEventListener('click', function(){
    
    //these are the functions that are run when the button is clicked
    hideThisSection("venus");
    showThisSection("venus");
});

earthBackButton.addEventListener('click', function(){
    
    //these are the functions that are run when the button is clicked
    hideThisSection("earth");
    showThisSection("earth");
});

marsBackButton.addEventListener('click', function(){
    
    //these are the functions that are run when the button is clicked
    hideThisSection("mars");
    showThisSection("mars");
});

jupiterBackButton.addEventListener('click', function(){
    
    //these are the functions that are run when the button is clicked
    hideThisSection("jupiter");
    showThisSection("jupiter");
});

saturnBackButton.addEventListener('click', function(){
    
    //these are the functions that are run when the button is clicked
    hideThisSection("saturn");
    showThisSection("saturn");
});

uranusBackButton.addEventListener('click', function(){
    
    //these are the functions that are run when the button is clicked
    hideThisSection("uranus");
    showThisSection("uranus");
});

neptuneBackButton.addEventListener('click', function(){
    
    //these are the functions that are run when the button is clicked
    hideThisSection("neptune");
    showThisSection("neptune");
});

//function for hiding profile section//
function hideThisSection(planetId) {
    document.querySelector("#"+planetId+"profile").style.display="none";
    
}

//function to bring up main//
function showThisSection(planetId) {
    document.querySelector("#"+planetId+"section").style.display="block";
}


/*------CALCULATE WEIGHT SECTION------*/

//get button
let mercuryWeightCalculateButton=document.querySelector("#mercuryweightbutton");
let venusWeightCalculateButton=document.querySelector("#venusweightbutton");
let earthWeightCalculateButton=document.querySelector("#earthweightbutton");
let marsWeightCalculateButton=document.querySelector("#marsweightbutton");
let jupiterWeightCalculateButton=document.querySelector("#jupiterweightbutton");
let saturnWeightCalculateButton=document.querySelector("#saturnweightbutton");
let uranusWeightCalculateButton=document.querySelector("#uranusweightbutton");
let neptuneWeightCalculateButton=document.querySelector("#neptuneweightbutton");


//listen for click
mercuryWeightCalculateButton.addEventListener('click',function(){
    //functions that are run when the button is clicked
    console.log("mercury event listener button was clicked");
    calculateMercuryWeight();
    hideWeightSection("mercury");
    showAnswerSection("mercury");
});


venusWeightCalculateButton.addEventListener('click',function(){
    //functions that are run when the button is clicked
    console.log("venus event listener button was clicked");
    calculateVenusWeight();
    hideWeightSection("venus");
    showAnswerSection("venus");
});

earthWeightCalculateButton.addEventListener('click',function(){
    //functions that are run when the button is clicked
    console.log("earth event listener button was clicked");
    calculateEarthWeight();
    hideWeightSection("earth");
    showAnswerSection("earth");
});

marsWeightCalculateButton.addEventListener('click',function(){
    //functions that are run when the button is clicked
    console.log("mars event listener button was clicked");
    calculateMarsWeight();
    hideWeightSection("mars");
    showAnswerSection("mars");
});

jupiterWeightCalculateButton.addEventListener('click',function(){
    //functions that are run when the button is clicked
    console.log("jupiter event listener button was clicked");
    calculateJupiterWeight();
    hideWeightSection("jupiter");
    showAnswerSection("jupiter");
});

saturnWeightCalculateButton.addEventListener('click',function(){
    //functions that are run when the button is clicked
    console.log("saturn event listener button was clicked");
    calculateSaturnWeight();
    hideWeightSection("saturn");
    showAnswerSection("saturn");
});

uranusWeightCalculateButton.addEventListener('click',function(){
    //functions that are run when the button is clicked
    console.log("uranus event listener button was clicked");
    calculateUranusWeight();
    hideWeightSection("uranus");
    showAnswerSection("uranus");
});

neptuneWeightCalculateButton.addEventListener('click',function(){
    //functions that are run when the button is clicked
    console.log("neptune event listener button was clicked");
    calculateNeptuneWeight();
    hideWeightSection("neptune");
    showAnswerSection("neptune");
});

//mercury weight
function calculateMercuryWeight(){

    let weightInput=(document.querySelector("#mercuryweight").value);
    let finalWeight=(weightInput)*0.38;
    let finalWeightOutput=document.querySelector("#mercuryfinalweight");
    finalWeightOutput.value=finalWeight.toFixed(0);
}

//venus weight
function calculateVenusWeight(){

    let weightInput=(document.querySelector("#venusweight").value);
    let finalWeight=(weightInput)*0.91;
    let finalWeightOutput=document.querySelector("#venusfinalweight");
    finalWeightOutput.value=finalWeight.toFixed(0);
}

//earth weight
function calculateEarthWeight(){

    let weightInput=(document.querySelector("#earthweight").value);
    let finalWeight=(weightInput)*1;
    let finalWeightOutput=document.querySelector("#earthfinalweight");
    finalWeightOutput.value=finalWeight.toFixed(0);
}

//mars weight
function calculateMarsWeight(){

    let weightInput=(document.querySelector("#marsweight").value);
    let finalWeight=(weightInput)*0.378;
    let finalWeightOutput=document.querySelector("#marsfinalweight");
    finalWeightOutput.value=finalWeight.toFixed(0);
}

//jupiter weight
function calculateJupiterWeight(){

    let weightInput=(document.querySelector("#jupiterweight").value);
    let finalWeight=(weightInput)*2.53;
    let finalWeightOutput=document.querySelector("#jupiterfinalweight");
    finalWeightOutput.value=finalWeight.toFixed(0);
}

//saturn weight
function calculateSaturnWeight(){

    let weightInput=(document.querySelector("#saturnweight").value);
    let finalWeight=(weightInput)*1.06;
    let finalWeightOutput=document.querySelector("#saturnfinalweight");
    finalWeightOutput.value=finalWeight.toFixed(0);
}

//uranus weight
function calculateUranusWeight(){

    let weightInput=(document.querySelector("#uranusweight").value);
    let finalWeight=(weightInput)*0.9;
    let finalWeightOutput=document.querySelector("#uranusfinalweight");
    finalWeightOutput.value=finalWeight.toFixed(0);
}

//neptune weight
function calculateNeptuneWeight(){

    let weightInput=(document.querySelector("#neptuneweight").value);
    let finalWeight=(weightInput)*1.14;
    let finalWeightOutput=document.querySelector("#neptunefinalweight");
    finalWeightOutput.value=finalWeight.toFixed(0);
}

//function to hide weight section
function hideWeightSection(planetId) {
    document.querySelector("#"+planetId+"calculateweight").style.display="none";
    
}

//function to bring up answer section
function showAnswerSection(planetId) {
    document.querySelector("#"+planetId+"weightanswer").style.display="block";
}

/*----WEIGHT REFRESH BUTTON----*/
let mercuryWeightRefreshButton=document.querySelector("#mercuryweightrefreshbutton");
let venusWeightRefreshButton=document.querySelector("#venusweightrefreshbutton");
let earthWeightRefreshButton=document.querySelector("#earthweightrefreshbutton");
let marsWeightRefreshButton=document.querySelector("#marsweightrefreshbutton");
let jupiterWeightRefreshButton=document.querySelector("#jupiterweightrefreshbutton");
let saturnWeightRefreshButton=document.querySelector("#saturnweightrefreshbutton");
let uranusWeightRefreshButton=document.querySelector("#uranusweightrefreshbutton");
let neptuneWeightRefreshButton=document.querySelector("#neptuneweightrefreshbutton");

mercuryWeightRefreshButton.addEventListener('click', function(){
    console.log("You clicked the Mercury refresh button");
    hideWeightAnswerSection("mercury");
    showWeightSection("mercury");
});

venusWeightRefreshButton.addEventListener('click', function(){
    console.log("You clicked the Venus refresh button");
    hideWeightAnswerSection("venus");
    showWeightSection("venus");
});

earthWeightRefreshButton.addEventListener('click', function(){
    console.log("You clicked the Earth refresh button");
    hideWeightAnswerSection("earth");
    showWeightSection("earth");
});

marsWeightRefreshButton.addEventListener('click', function(){
    console.log("You clicked the Mars refresh button");
    hideWeightAnswerSection("mars");
    showWeightSection("mars");
});

jupiterWeightRefreshButton.addEventListener('click', function(){
    console.log("You clicked the Jupiter refresh button");
    hideWeightAnswerSection("jupiter");
    showWeightSection("jupiter");
});

saturnWeightRefreshButton.addEventListener('click', function(){
    console.log("You clicked the Saturn refresh button");
    hideWeightAnswerSection("saturn");
    showWeightSection("saturn");
});

uranusWeightRefreshButton.addEventListener('click', function(){
    console.log("You clicked the Uranus refresh button");
    hideWeightAnswerSection("uranus");
    showWeightSection("uranus");
});

neptuneWeightRefreshButton.addEventListener('click', function(){
    console.log("You clicked the Neptune refresh button");
    hideWeightAnswerSection("neptune");
    showWeightSection("neptune");
});

function hideWeightAnswerSection(planetId){
    document.querySelector("#"+planetId+"weightanswer").style.display="none";
}

function showWeightSection(planetId) {
    document.querySelector("#"+planetId+"calculateweight").style.display="block";
}

/*------CALCULATE AGE SECTION------*/

//get button
let mercuryAgeCalculateButton=document.querySelector("#mercuryagebutton");
let venusAgeCalculateButton=document.querySelector("#venusagebutton");
let earthAgeCalculateButton=document.querySelector("#earthagebutton");
let marsAgeCalculateButton=document.querySelector("#marsagebutton");
let jupiterAgeCalculateButton=document.querySelector("#jupiteragebutton");
let saturnAgeCalculateButton=document.querySelector("#saturnagebutton");
let uranusAgeCalculateButton=document.querySelector("#uranusagebutton");
let neptuneAgeCalculateButton=document.querySelector("#neptuneagebutton");


//listen for click
mercuryAgeCalculateButton.addEventListener('click',function(){
    //functions that are run when the button is clicked
    console.log("mercury event listener button was clicked");
    calculateMercuryAge();
    hideAgeSection("mercury");
    showAgeAnswerSection("mercury");
});


venusAgeCalculateButton.addEventListener('click',function(){
    //functions that are run when the button is clicked
    console.log("venus event listener button was clicked");
    calculateVenusAge();
    hideAgeSection("venus");
    showAgeAnswerSection("venus");
});

earthAgeCalculateButton.addEventListener('click',function(){
    //functions that are run when the button is clicked
    console.log("earth event listener button was clicked");
    calculateEarthAge();
    hideAgeSection("earth");
    showAgeAnswerSection("earth");
});

marsAgeCalculateButton.addEventListener('click',function(){
    //functions that are run when the button is clicked
    console.log("mars event listener button was clicked");
    calculateMarsAge();
    hideAgeSection("mars");
    showAgeAnswerSection("mars");
});

jupiterAgeCalculateButton.addEventListener('click',function(){
    //functions that are run when the button is clicked
    console.log("jupiter event listener button was clicked");
    calculateJupiterAge();
    hideAgeSection("jupiter");
    showAgeAnswerSection("jupiter");
});

saturnAgeCalculateButton.addEventListener('click',function(){
    //functions that are run when the button is clicked
    console.log("saturn event listener button was clicked");
    calculateSaturnAge();
    hideAgeSection("saturn");
    showAgeAnswerSection("saturn");
});

uranusAgeCalculateButton.addEventListener('click',function(){
    //functions that are run when the button is clicked
    console.log("uranus event listener button was clicked");
    calculateUranusAge();
    hideAgeSection("uranus");
    showAgeAnswerSection("uranus");
});

neptuneAgeCalculateButton.addEventListener('click',function(){
    //functions that are run when the button is clicked
    console.log("neptune event listener button was clicked");
    calculateNeptuneAge();
    hideAgeSection("neptune");
    showAgeAnswerSection("neptune");
});

//mercury age
function calculateMercuryAge(){

    let ageInput=(document.querySelector("#mercuryage").value);
    let finalAge=(ageInput)*4.2;
    let finalAgeOutput=document.querySelector("#mercuryfinalage");
    finalAgeOutput.value=finalAge.toFixed(0);
}

//venus age
function calculateVenusAge(){

    let ageInput=(document.querySelector("#venusage").value); 
    let finalAge=(ageInput)*1.6;
    let finalAgeOutput=document.querySelector("#venusfinalage");
    finalAgeOutput.value=finalAge.toFixed(0);
}

//earth age
function calculateEarthAge(){

    let ageInput=(document.querySelector("#earthage").value);
    let finalAge=(ageInput)*1;
    let finalAgeOutput=document.querySelector("#earthfinalage");
    finalAgeOutput.value=finalAge.toFixed(0);
}

//mars age
function calculateMarsAge(){

    let ageInput=(document.querySelector("#marsage").value);
    let finalAge=(ageInput)*0.53;
    let finalAgeOutput=document.querySelector("#marsfinalage");
    finalAgeOutput.value=finalAge.toFixed(0);
}

//jupiter age
function calculateJupiterAge(){

    let ageInput=(document.querySelector("#jupiterage").value);
    let finalAge=(ageInput)*0.08;
    let finalAgeOutput=document.querySelector("#jupiterfinalage");
    finalAgeOutput.value=finalAge.toFixed(0);
}

//saturn age
function calculateSaturnAge(){

    let ageInput=(document.querySelector("#saturnage").value);
    let finalAge=(ageInput)*0.04;
    let finalAgeOutput=document.querySelector("#saturnfinalage");
    finalAgeOutput.value=finalAge.toFixed(0);
}

//uranus age
function calculateUranusAge(){

    let ageInput=(document.querySelector("#uranusage").value);
    let finalAge=(ageInput)*0.01;
    let finalAgeOutput=document.querySelector("#uranusfinalage");
    finalAgeOutput.value=finalAge.toFixed(0);
}

//neptune age
function calculateNeptuneAge(){

    let ageInput=(document.querySelector("#neptuneage").value); 
    let finalAge=(ageInput)*0.006;
    let finalAgeOutput=document.querySelector("#neptunefinalage");
    finalAgeOutput.value=finalAge.toFixed(0);
}

//function to hide weight section
function hideAgeSection(planetId) {
    document.querySelector("#"+planetId+"calculateage").style.display="none";
    
}

//function to bring up answer section
function showAgeAnswerSection(planetId) {
    document.querySelector("#"+planetId+"ageanswer").style.display="block";
}

/*----AGE REFRESH BUTTON----*/
let mercuryAgeRefreshButton=document.querySelector("#mercuryagerefreshbutton");
let venusAgeRefreshButton=document.querySelector("#venusagerefreshbutton");
let earthAgeRefreshButton=document.querySelector("#earthagerefreshbutton");
let marsAgeRefreshButton=document.querySelector("#marsagerefreshbutton");
let jupiterAgeRefreshButton=document.querySelector("#jupiteragerefreshbutton");
let saturnAgeRefreshButton=document.querySelector("#saturnagerefreshbutton");
let uranusAgeRefreshButton=document.querySelector("#uranusagerefreshbutton");
let neptuneAgeRefreshButton=document.querySelector("#neptuneagerefreshbutton");

mercuryAgeRefreshButton.addEventListener('click', function(){
    console.log("You clicked the Mercury refresh button");
    hideAgeAnswerSection("mercury");
    showAgeSection("mercury");
});

venusAgeRefreshButton.addEventListener('click', function(){
    console.log("You clicked the Venus refresh button");
    hideAgeAnswerSection("venus");
    showAgeSection("venus");
});

earthAgeRefreshButton.addEventListener('click', function(){
    console.log("You clicked the Earth refresh button");
    hideAgeAnswerSection("earth");
    showAgeSection("earth");
});

marsAgeRefreshButton.addEventListener('click', function(){
    console.log("You clicked the Mars refresh button");
    hideAgeAnswerSection("mars");
    showAgeSection("mars");
});

jupiterAgeRefreshButton.addEventListener('click', function(){
    console.log("You clicked the Jupiter refresh button");
    hideAgeAnswerSection("jupiter");
    showAgeSection("jupiter");
});

saturnAgeRefreshButton.addEventListener('click', function(){
    console.log("You clicked the Saturn refresh button");
    hideAgeAnswerSection("saturn");
    showAgeSection("saturn");
});

uranusAgeRefreshButton.addEventListener('click', function(){
    console.log("You clicked the Uranus refresh button");
    hideAgeAnswerSection("uranus");
    showAgeSection("uranus");
});

neptuneAgeRefreshButton.addEventListener('click', function(){
    console.log("You clicked the Neptune refresh button");
    hideAgeAnswerSection("neptune");
    showAgeSection("neptune");
});

function hideAgeAnswerSection(planetId){
    document.querySelector("#"+planetId+"ageanswer").style.display="none";
}

function showAgeSection(planetId) {
    document.querySelector("#"+planetId+"calculateage").style.display="block";
}



/*----BALL BOUNCE SECTION----*/

//turning on the bounce switch

let mercuryBallSwitch=document.querySelector("#mercuryballswitch");
let venusBallSwitch=document.querySelector("#venusballswitch");
let earthBallSwitch=document.querySelector("#earthballswitch");
let marsBallSwitch=document.querySelector("#marsballswitch");
let jupiterBallSwitch=document.querySelector("#jupiterballswitch");
let saturnBallSwitch=document.querySelector("#saturnballswitch");
let uranusBallSwitch=document.querySelector("#uranusballswitch");
let neptuneBallSwitch=document.querySelector("#neptuneballswitch");

mercuryBallSwitch.addEventListener('sl-change', function(){
    console.log("You clicked the Mercury switch");
    showBall("mercury");
});

venusBallSwitch.addEventListener('sl-change', function(){
    console.log("You clicked the Venus switch");
    showBall("venus");
});

earthBallSwitch.addEventListener('sl-change', function(){
    console.log("You clicked the Earth switch");
    showBall("earth");
});

marsBallSwitch.addEventListener('sl-change', function(){
    console.log("You clicked the Mars switch");
    showBall("mars");
});

jupiterBallSwitch.addEventListener('sl-change', function(){
    console.log("You clicked the Jupiter switch");
    showBall("jupiter");
});

saturnBallSwitch.addEventListener('sl-change', function(){
    console.log("You clicked the Saturn switch");
    showBall("saturn");
});

uranusBallSwitch.addEventListener('sl-change', function(){
    console.log("You clicked the Uranus switch");
    showBall("uranus");
});

neptuneBallSwitch.addEventListener('sl-change', function(){
    console.log("You clicked the Neptune switch");
    showBall("neptune");
});

function showBall(planetId){
    document.querySelector("#"+planetId+"bounceball").style.display="block";
}



//Title anime.js

anime({
    targets: 'div>h1',
    translateY: [
        {value: 600, duration: 800},
        {value: 0, duration: 800}
    ],

});

anime({
    targets: 'div>h2',
    translateX: [
        {value: 600, duration: 800},
        {value: 0, duration: 800}
    ],

});

new fullpage('#fullpage', {
    autoScrolling:true,
    scrollHorizontally: true,
    navigation: true,
    navigationPosition: 'right',
    navigationTooltips: ['Sun', 'Mercury', 'Venus', 'Earth', 'Mars', 'Jupiter', 'Saturn', 'Uranus', 'Neptune', 'Gallery',],
    showActiveTooltip: true 
});

/*.SVG ANIMATION*/
const squashedCirclePath = "M223 27.5001C223 89.0799 173.08 139 111.5 139C49.9202 139 0 89.0799 0 27.5001C0 -34.0796 49.9202 27.5 111.5 27.5C173.08 27.5 223 -34.0796 223 27.5001Z";

const circlePath = "M223 111.5C223 173.08 173.08 223 111.5 223C49.9202 223 0 173.08 0 111.5C0 49.9202 49.9202 0 111.5 0C173.08 0 223 49.9202 223 111.5Z";

const mercuryCircle = document.querySelector ("#mercurycircle");
const venusCircle = document.querySelector ("#venuscircle");
const earthCircle = document.querySelector ("#earthcircle");
const marsCircle = document.querySelector ("#marscircle");
const jupiterCircle = document.querySelector ("#jupitercircle");
const saturnCircle = document.querySelector ("#saturncircle");
const uranusCircle = document.querySelector ("#uranuscircle");
const neptuneCircle = document.querySelector ("#neptunecircle");

let toggle = false;

mercuryCircle.addEventListener('click', () => {
    //setting up timeline
    const timeline = anime.timeline({
        duration : 850,
        easing : "easeOutExpo"
    });

    timeline.add({
        targets: ".circle",
        d: [{value: toggle ? circlePath : squashedCirclePath}]
    })

    .add({
        targets: "#mercurycircle",
        rotate: 350
    }, "-=350");

    if(!toggle){
        toggle= true;

    }else{
        toggle= false;

    }
});

venusCircle.addEventListener('click', () => {
    //setting up timeline
    const timeline = anime.timeline({
        duration : 250,
        easing : "easeOutExpo"
    });

    timeline.add({
        targets: ".circle",
        d: [{value: toggle ? circlePath : squashedCirclePath}]
    })

    .add({
        targets: "#venuscircle",
        rotate: 320
    }, "-=350");

    if(!toggle){
        toggle= true;

    }else{
        toggle= false;

    }
});

earthCircle.addEventListener('click', () => {
    //setting up timeline
    const timeline = anime.timeline({
        duration : 450,
        easing : "easeOutExpo"
    });

    timeline.add({
        targets: ".circle",
        d: [{value: toggle ? circlePath : squashedCirclePath}]
    })

    .add({
        targets: "#earthcircle",
        rotate: 260
    }, "-=350");

    if(!toggle){
        toggle= true;

    }else{
        toggle= false;

    }
});

marsCircle.addEventListener('click', () => {
    //setting up timeline
    const timeline = anime.timeline({
        duration : 250,
        easing : "easeOutExpo"
    });

    timeline.add({
        targets: ".circle",
        d: [{value: toggle ? circlePath : squashedCirclePath}]
    })

    .add({
        targets: "#marscircle",
        rotate: 290
    }, "-=350");

    if(!toggle){
        toggle= true;

    }else{
        toggle= false;

    }
});

jupiterCircle.addEventListener('click', () => {
    //setting up timeline
    const timeline = anime.timeline({
        duration : 490,
        easing : "easeOutExpo"
    });

    timeline.add({
        targets: ".circle",
        d: [{value: toggle ? circlePath : squashedCirclePath}]
    })

    .add({
        targets: "#jupitercircle",
        rotate: 290
    }, "-=350");

    if(!toggle){
        toggle= true;

    }else{
        toggle= false;

    }
});

saturnCircle.addEventListener('click', () => {
    //setting up timeline
    const timeline = anime.timeline({
        duration : 650,
        easing : "easeOutExpo"
    });

    timeline.add({
        targets: ".circle",
        d: [{value: toggle ? circlePath : squashedCirclePath}]
    })

    .add({
        targets: "#saturncircle",
        rotate: 290
    }, "-=350");

    if(!toggle){
        toggle= true;

    }else{
        toggle= false;

    }
});

uranusCircle.addEventListener('click', () => {
    //setting up timeline
    const timeline = anime.timeline({
        duration : 150,
        easing : "easeOutExpo"
    });

    timeline.add({
        targets: ".circle",
        d: [{value: toggle ? circlePath : squashedCirclePath}]
    })

    .add({
        targets: "#uranuscircle",
        rotate: 230
    }, "-=350");

    if(!toggle){
        toggle= true;

    }else{
        toggle= false;

    }
});

neptuneCircle.addEventListener('click', () => {
    //setting up timeline
    const timeline = anime.timeline({
        duration : 210,
        easing : "easeOutExpo"
    });

    timeline.add({
        targets: ".circle",
        d: [{value: toggle ? circlePath : squashedCirclePath}]
    })

    .add({
        targets: "#neptunecircle",
        rotate: 290
    }, "-=350");

    if(!toggle){
        toggle= true;

    }else{
        toggle= false;

    }
});
