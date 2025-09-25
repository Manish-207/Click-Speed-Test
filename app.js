let clicks = 0;
let started = false;
let duration = 5;
let clickArea = document.getElementsByClassName("clickZone")[0]
console.log("test")



function updateAnimal(lockDuration) {
    const cps = clicks / lockDuration;

    const img = document.getElementsByClassName("animalimg")[0];
    const name = document.getElementsByClassName("animalname")[0];
    const remark = document.getElementsByClassName("fremark")[0];

    if (cps <= 4) {
        img.src = "./images/sloth.png";
        name.innerText = "Sloth";
        remark.innerText = "Did you fall asleep mid-click? 😴";
    } else if (cps <= 5) {
        img.src = "./images/turtle.png";
        name.innerText = "Turtle";
        remark.innerText = "My granny could click faster 🐢";
    } else if (cps <= 6) {
        img.src = "./images/panda.png";
        name.innerText = "Panda";
        remark.innerText = "Chill but trying, I see 🐼";
    } else if (cps <= 7) {
        img.src = "./images/rabbit.png";
        name.innerText = "Rabbit";
        remark.innerText = "Quick! But I’ve seen faster 🐇";
    } else if (cps <= 8) {
        img.src = "./images/kangaroo.png";
        name.innerText = "Kangaroo";
        remark.innerText = "Hoppin' through these clicks 🦘";
    } else if (cps <= 9) {
        img.src = "./images/falcon.png";
        name.innerText = "Falcon";
        remark.innerText = "Blink and we missed it 🦅";
    } else {
        img.src = "./images/cheetah.png";
        name.innerText = "Cheetah";
        remark.innerText = "You broke the sound barrier 🐆🔥";
    }
}



clickArea.addEventListener("click",  () => {

 if (!started) {
    started = true;
    clicks = 1;
    document.getElementById("no-of-clicks").innerText = clicks;
    
    let lockDuration = duration;
    let timeLeft = duration * 1000; // in milliseconds
    let timeDisplay = document.getElementById("timeleft");

    // Update the countdown every 50ms for smooth ms display
    let countdown = setInterval(() => {
        timeLeft -= 50;

        if (timeLeft <= 0) {
            clearInterval(countdown);
            timeDisplay.innerText = "00:00";
        } else {
            let secs = Math.floor(timeLeft / 1000);
            let ms = Math.floor((timeLeft % 1000) / 10); // 2 digits

            // Pad with leading zeros
            let formatted = `${secs.toString().padStart(2, '0')}:${ms.toString().padStart(2, '0')}`;
            timeDisplay.innerText = formatted;
        }
    }, 50);

    // Timeout to end the test
    setTimeout(() => {
        clearInterval(countdown);
        started = false;
        document.getElementsByClassName("popup")[0].style.display = "block";
        document.body.style.overflow="hidden";
        document.getElementById("cpclicks").innerText = clicks;
        document.getElementById("cptime").innerText = lockDuration;
        document.getElementById("cpscore").innerText = (clicks / lockDuration).toFixed(2);
        updateAnimal(lockDuration);

        clicks = 0;
        document.getElementById("no-of-clicks").innerText = clicks;
        timeDisplay.innerText = "00:00";
    }, duration * 1000);
    
} else {
    clicks++;
    document.getElementById("no-of-clicks").innerText = clicks;
}


})

let tryAgain = document.getElementById("tryagainbutton");
tryAgain.addEventListener("click" , ()=> {
    document.getElementsByClassName("popup")[0].style.display="none";
    document.body.style.overflow="scroll";
})


let modes = document.querySelectorAll(".duration");
modes.forEach(button => {
    button.addEventListener("click", ()=>{
        modes.forEach(btn => btn.classList.remove("chosen"))
        button.classList.add("chosen")
        duration=button.querySelector("span").innerText;
        console.log(duration);
    })
    
});



let copyBtn = document.getElementById("sbl");
copyBtn.addEventListener("click", ()=> navigator.clipboard.writeText("jab domain le loge tab copy karna"))