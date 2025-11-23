const gitico = document.getElementById("github-icon");
const instaico = document.getElementById("Instagram-icon");
const ArrowUpico = document.getElementById("ArrowUp-icon");

if (gitico) {
    gitico.addEventListener("click", (e) => { 
        window.location.assign("https://github.com/Perp853"); 
    });
}
if (instaico) {
    instaico.addEventListener("click", (e) => { 
        window.location.assign("https://www.instagram.com/https._.d3v/"); 
    });
}
if(ArrowUpico){
    ArrowUpico.addEventListener("click",(e) =>{
        window.location.assign("#innest");
});
}
//https://github.com/Perp853
//https://www.instagram.com/https._.d3v/
document.addEventListener('DOMContentLoaded', () => {
    const dynamicTextElement = document.querySelector('.typing-text');
    const phrases = ["Web Developer", "Web Designer", "Software Developer", "Cybersecurity Analyst"];
    let phraseIndex = 0;
    const TYPING_SPEED = 200;
    const ERASING_SPEED = 100; 
    const PAUSE_TIME = 1000;


    const getAnimationParams = (phrase, speed) => {
        const durationInSeconds = (phrase.length * speed) / 1000;
        const steps = phrase.length;
        return { duration: durationInSeconds, steps: steps };
    };

function type() {
    const currentPhrase = phrases[phraseIndex];
    const params = getAnimationParams(currentPhrase, TYPING_SPEED);


    dynamicTextElement.textContent = currentPhrase;
    dynamicTextElement.style.animation = 
        `typing ${params.duration}s steps(${params.steps}, end) forwards, blink-caret .75s step-end infinite`;

        setTimeout(erase, params.duration * 1000 + PAUSE_TIME);
    }

function erase() {
    const currentPhrase = phrases[phraseIndex];
    const params = getAnimationParams(currentPhrase, ERASING_SPEED);
    dynamicTextElement.style.animation = 
        `erasing ${params.duration}s steps(${params.steps}, start) forwards, blink-caret .75s step-end infinite`;
    setTimeout(() => {
        dynamicTextElement.textContent = ''; 
        phraseIndex = (phraseIndex + 1) % phrases.length; 
        type(); 
    }, params.duration * 1000);
}


const style = document.createElement('style');
style.innerHTML = `
      @keyframes typing {
        from { width: 0 }
        to { width: 100% }
      }
      @keyframes erasing {
        from { width: 100% }
        to { width: 0 }
      }
`;
document.head.appendChild(style);
    type();
});
