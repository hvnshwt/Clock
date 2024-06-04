var deviceOn = false;
var setMode = 1;
var controls = document.querySelector(".container");
var nessyGoing = false;
var nessyGone = false;
var planeGoing = false;
var planeGone = false;
var rocketGone = false;

// const element = document.querySelector(".mode-svg");

document.querySelector("#power").onclick = function(){
    var icon1 = document.querySelector(".power-icon1");
    var icon2 = document.querySelector(".power-icon2");
    var content = document.querySelector(".screen-content");
    var mode = document.querySelector(".mode-" + String(setMode));
    const nessy = document.querySelector('.nessy')
    var planePath = document.querySelector(".plane-path");

    if (deviceOn == false){
        content.classList.add('transition-1s');
        content.classList.remove('transition-02s');
        deviceOn = true;
        icon1.style.stroke = '#8bbdbc';
        icon2.style.stroke = '#8bbdbc';
        mode.style.fill = '#8bbdbc';
        content.style.opacity = '100';
        content.classList.add('transition-0.2s');
    }
    else{
        nessy.classList.remove('transition-20s');
        content.classList.remove('transition-1s');
        content.classList.add('transition-02s');
        deviceOn = false;
        icon1.style.stroke = '#2D3341';
        icon2.style.stroke = '#2D3341';
        mode.style.fill = '#2D3341';
        content.style.opacity = '0';
        for (let i = 1; i < 4; i++){
            console.log(i)
            var nessyPath = document.querySelector(".nessy-path-" + String(i));
            nessyPath.style.fill = '#2D3341';
        }
        planePath.style.fill = '#2D3341';
        nessy.style.left = '-10%';
    }
};

var buttonItems = document.querySelectorAll('.mode-svg'),
    index, button;

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

for (index = 0; index < buttonItems.length; index++) {
    button = buttonItems[index];
    button.addEventListener('click', async function (event) {
        if (deviceOn == false){
            return;
        }
        const id = this.id;
        var mode = document.querySelector('.mode-' + String(id));
        var prevMode = document.querySelector('.mode-' + String(setMode));
        var rotation;

        prevMode.style.fill = '#2D3341';
        if (id == 1){
            rotation = 0;
        }
        else if(id == 2){
            rotation = -60;
        }
        else if(id == 2){
            rotation = -60;
        }
        else if(id == 3){
            rotation = -120;
        }
        else if(id == 4){
            rotation = 180;
        }
        else if(id == 5){
            rotation = 120;
        }
        else{
            rotation = 60
        }
        var val = String(rotation) + 'deg';
        controls.style.rotate = val;
        setMode = id;
        mode.style.fill = '#8bbdbc';

        for (let i = 1; i < 5; i++) {
            var indicator = document.querySelector('.indicator' + String(i));
            indicator.style.backgroundColor = '#8bbdbc';
            await sleep(200);
        };
        for (let i = 1; i < 5; i++) {
            var indicator = document.querySelector('.indicator' + String(i));
            indicator.style.backgroundColor = '#2D3341';
            await sleep(200);
        };
        event.preventDefault();
    });
}
document.querySelector("#nessy-btn").onclick = async function(){
    const nessy = document.querySelector('.nessy')
    if (deviceOn == false || nessyGoing == true){
        return;
    }
    for (let i = 1; i < 4; i++){
        console.log(i)
        var nessyPath = document.querySelector(".nessy-path-" + String(i));
        nessyPath.style.fill = '#8bbdbc';
    }
    if (nessyGone == false){
        nessy.style.transform = 'scale(1, 1)';
        nessyGone = true;
        nessy.style.left = '110%';
    }
    else{
        nessy.style.transform = 'scale(-1, 1)';
        nessy.style.left = '-10%';
        nessyGone = false;
    }
    nessyGoing = true;
    await sleep(20000);
    nessyGoing = false;

    for (let i = 1; i < 4; i++){
        console.log(i)
        var nessyPath = document.querySelector(".nessy-path-" + String(i));
        nessyPath.style.fill = '#2D3341';
    }
};
document.querySelector("#plane-btn").onclick = async function(){
    const plane = document.querySelector('.plane')
    if (deviceOn == false || planeGoing == true){
        return;
    }
    var planePath = document.querySelector(".plane-path");
    planePath.style.fill = '#8bbdbc';

    if (planeGone == false){
        plane.style.transform = 'scale(1, 1)';
        plane.style.left = '100%';
        planeGone = true;
    }
    else{
        plane.style.transform = 'scale(-1, 1)';
        plane.style.left = '0px';
        planeGone = false;
    }
    planeGoing = true;
    await sleep(5000);
    planeGoing = false;
    planePath.style.fill = '#2D3341';
};
document.querySelector("#rocket-btn").onclick = async function(){
    const rocket = document.querySelector('.rocket')
    if (deviceOn == false || rocketGone == true){
        return;
    }
    for (let i = 1; i < 12; i++){
        console.log(i)
        var rocketPath = document.querySelector(".rocket-path-" + String(i));
        rocketPath.style.fill = '#8bbdbc';
    }

    rocket.style.left = '66.6%';
    rocket.style.top = '-10%';
    rocket.style.rotate = '20deg';
    rocketGone = true;

    await sleep(2000);
    for (let i = 1; i < 12; i++){
        console.log(i)
        var rocketPath = document.querySelector(".rocket-path-" + String(i));
        rocketPath.style.fill = '#2D3341';
    }
};