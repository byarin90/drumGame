window.onload = function() {
    declareEvents();
}


function declareEvents() {
    /******************************************* EventListener btn**********************************/
    let drums = document.querySelectorAll('.drum'); //array of .drum -> btn --=>(Object)
    drums.forEach(drum => { //for to array of objects
        drum.addEventListener('click', function() {
            let btnInnerHTML = this.innerHTML;
            makeSound(btnInnerHTML);
            btnAnimation(btnInnerHTML);

        })
    });
    /*******************************************End EventListener btn**********************************/

    /*******************************************EventListener KeyPress**********************************/
    document.addEventListener('keypress', (e) => {
            let keyPress = e.key;
            makeSound(keyPress);
            btnAnimation(keyPress);
        })
        /**************************************End EventListener KeyPress**************************/

}

function makeSound(key) {
    switch (key) {
        case 'w':
            let tom1 = new Audio('sounds/tom-1.mp3');
            tom1.play();

            break;
        case 'a':
            let tom2 = new Audio('sounds/tom-2.mp3');
            tom2.play();
            break;
        case 's':
            let tom3 = new Audio('sounds/tom-3.mp3');
            tom3.play();
            break;
        case 'd':
            let tom4 = new Audio('sounds/tom-4.mp3');
            tom4.play();
            break;
        case 'j':
            let snare = new Audio('sounds/snare.mp3');
            snare.play();
            break;
        case 'k':
            let crash = new Audio('sounds/crash.mp3');
            crash.play();
            break;
        case 'l':
            let kick = new Audio('sounds/kick-bass.mp3');
            kick.play();
            break;

        default:
            this.innerHTML = ''
    }

}

function btnAnimation(currentKey) {
    let activeBtn = document.querySelector(`.${currentKey}`);
    activeBtn.classList.add('pressed');
    setTimeout(() => {
        activeBtn.classList.remove('pressed');
    }, 150);
}