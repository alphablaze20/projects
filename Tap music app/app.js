window.addEventListener('load', () => {
    const sounds = document.querySelectorAll('.sound')
    const pads = document.querySelectorAll('.pads div')
    const visual = document.querySelector('.visual')
    const colours = [
        "#60d394",
        "#d36060",
        "#c060d3",
        "#60d394",
        "#2427b3",
        "#ceda32"
    ];
   
   
    pads.forEach((pad, index) => {

        //lets get going with the sound here

        pad.addEventListener('click', function () {
            sounds[index].currentTime = 0
            sounds[index].play();

            createBubble(index)
        })
    })


    //Create a function that makes bubbles
    const createBubble = (index)=>{
        const bubble = document.createElement('div')
        visual.appendChild(bubble)

        bubble.style.backgroundColor = colours[index]
        bubble.style.animation = "jump 1s ease"

        bubble.addEventListener('animationend', function(){
            visual.removeChild(this)
        });
    }

});