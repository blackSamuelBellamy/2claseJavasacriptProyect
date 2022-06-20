
const allPlanet = document.querySelector('.allPlanet');
const estela = document.querySelector('.estela');
const tierra = document.querySelector('.tierra');
let planetCounter = 0;


allPlanet.addEventListener('click', () => {
    estela.classList.toggle('marteEstela');
    tierra.classList.toggle('marte');
    planetCounter ++;


    if(planetCounter == 3) {
        allPlanet.style.transition = '4s';
        allPlanet.style.opacity = '0';
        setTimeout(()=>{
            allPlanet.style.display = 'none';
            document.querySelector('.picsContainer').style.display = 'flex';
            document.querySelector('.pics').style.transformStyle = 'preserve-3d';
            document.querySelector('.pics').style.perspective = '500px';
            document.querySelector('.current').style.animation = 'startAnimation 20s ease-out';
        }, 4000);

        setTimeout(()=>{
            document.querySelector('.next').style.display = 'block';
            document.querySelector('.previous').style.display = 'block';
            document.querySelector('.pics').style.transformStyle = 'flat';
            document.querySelector('.pics').style.perspective = 'none';
        }, 24000)
    }
    
})

/*Segundo desafio*/

/*------------ Decoracion------- */

const img1 = document.getElementById('img1');
const img2 = document.getElementById('img2');
const img3 = document.getElementById('img3');

const previous = document.querySelector('.previous');
const next = document.querySelector('.next');
const pics = document.querySelector('.pics');
const current = document.querySelector('.current');
const alertaM = document.querySelector('.alertaM');
const alertaI = document.querySelector('.alertaI');
const alertaG = document.querySelector('.alertaG');


const boxMartian = document.querySelector('.boxMartian');
const boxInter = document.querySelector('.boxInter');
const boxGrav = document.querySelector('.boxGrav');

const lessM = document.querySelector('.lessM');
const moreM = document.querySelector('.moreM');

const lessI = document.querySelector('.lessI');
const moreI = document.querySelector('.moreI');

const lessG = document.querySelector('.lessG');
const moreG = document.querySelector('.moreG');


let contador = 2;


const slider = () => {
    if (contador === 2) {

        img1.style.left = '-100%';
        img2.style.left = '0';
        img3.style.left = '100%';
        previous.style.opacity = '1';
        next.style.opacity = '1';
        previous.style.cursor = 'pointer'
        next.style.cursor = 'pointer'
    }
    else if (contador === 1) {

        img1.style.left = '0';
        img2.style.left = '100%';
        img3.style.left = '200%';
        previous.style.opacity = '.1';
        next.style.opacity = '1';
        previous.style.cursor = 'default';
        next.style.cursor = 'pointer'

    }
    else if (contador === 3) {
        img1.style.left = '-200%';
        img2.style.left = '-100%';
        img3.style.left = '0';
        previous.style.opacity = '1';
        next.style.opacity = '.1';
        next.style.cursor = 'default';
        previous.style.cursor = 'pointer'
    }
}

const boxAppear = (currentBox) => {

    currentBox.style.zIndex = '100';
    currentBox.style.opacity = '1';
}

const boxFade = (currentBox) => {

    currentBox.addEventListener('mouseleave', () => {
        currentBox.style.transition = '.2s';
        currentBox.style.zIndex = '0';
        currentBox.style.opacity = '0';

    })

}



slider();

previous.addEventListener('mouseover', () => {

    boxInter.style.opacity = '0';
    boxInter.style.zIndex = '0';
    boxGrav.style.opacity = '0';
    boxGrav.style.zIndex = '0';
})
previous.addEventListener('click', () => {


    if (contador === 1) {
        return;
    }
    else {

        contador--;
        slider();
    }

})

next.addEventListener('mouseover', () => {
    boxMartian.style.opacity = '0';
    boxMartian.style.zIndex = '0';
    boxInter.style.opacity = '0';
    boxInter.style.zIndex = '0';

})
next.addEventListener('click', () => {

    if (contador === 3) {
        return
    }
    else {

        contador++;
        slider();

    }
})


current.addEventListener('mouseover', (e) => {

    if (e.target.id === 'img1') {

        boxAppear(boxMartian);
        boxFade(boxMartian);

    }

    else if (e.target.id === 'img2') {

        boxAppear(boxInter);
        boxFade(boxInter);


    }
    else if (e.target.id === 'img3') {

        boxAppear(boxGrav);
        boxFade(boxGrav);
    }
})


/*----------------------Desafio---------------------------*/

const input1 = document.getElementById('input1');

const input2 = document.getElementById('input2');

const input3 = document.getElementById('input3');



let sticker1 = 0;
let sticker2 = 0;
let sticker3 = 0;

let integ;

let suma3Stickers;

const sumaGlobal = () => {
    suma3Stickers = Number(input1.value) + Number(input2.value) + Number(input3.value);

}

const topeStickers = () => {

    if (suma3Stickers < 10) {

        alertaM.textContent = `Total stickers: ${suma3Stickers}`;
        alertaI.textContent = `Total stickers: ${suma3Stickers}`;
        alertaG.textContent = `Total stickers: ${suma3Stickers}`;
    } else {

        alertaM.textContent = "Llevas muchos stickers!";
        alertaI.textContent = "Llevas muchos stickers!";
        alertaG.textContent = "Llevas muchos stickers!";

        setTimeout(()=>{
            pics.style.transformStyle = 'preserve-3d';
            pics.style.perspective = '500px';
            next.style.display = 'none';
            boxGrav.style.display = 'none';
            boxInter.style.display = 'none';
            boxMartian.style.display = 'none';
            previous.style.display = 'none';
            current.style.animation = 'endAnimation 10s ease-out';
            
            setTimeout(() =>{
                document.querySelector('.inputBox').style.display = 'flex';
                document.querySelector('.inputBox').style.opacity = '1'

            }, 8000)

            setTimeout(()=> {
                document.querySelector('.picsContainer').style.display = 'none';
            }, 10000)

        }, 4000);

    }

}



const sumarStickers = (botton, input, sticker) => {

    botton.addEventListener('click', () => {
        sticker = input.value;
        sticker++;
        input.value = sticker;
        sumaGlobal();
        topeStickers();

    })
}
const restarStickers = (botton, input, sticker) => {
    botton.addEventListener('click', () => {

        if (input.value == 0) {
            return;
        }
        else {
            sticker = input.value;
            sticker--;
            input.value = sticker;
            sumaGlobal();
            topeStickers();
        }
    })
}

const valorInput = (input, sticker) => {
    input.addEventListener('change', () => {
        if (isNaN(input.value)) {
            input.value = sticker
        } else {
            integ = Math.ceil(input.value);
            sticker = integ;
            input.value = sticker;
            sumaGlobal();
            topeStickers();
        }

    })
}

valorInput(input1, sticker1);
valorInput(input2, sticker2);
valorInput(input3, sticker3);

sumarStickers(moreM, input1, sticker1);
restarStickers(lessM, input1, sticker1);

sumarStickers(moreI, input2, sticker2);
restarStickers(lessI, input2, sticker2);

sumarStickers(moreG, input3, sticker3);
restarStickers(lessG, input3, sticker3);

/* tercer desafio*/

const password1 = '911';
const password2 = '714';

const inputPass1 = document.getElementById('inputPass1');
const inputPass2 = document.getElementById('inputPass2');
const inputPass3 = document.getElementById('inputPass3');
const verificar = document.querySelector('.verificar');

const inputBox = document.querySelector('.inputBox');
const error = document.querySelector('.error');

const entendido = document.querySelector('.entendido');
const validationAnimation = document.querySelector('.validationAnimation');
const message = document.querySelector('.message');
const validationResult = document.querySelector('.validationResult');

let sumatoria;


const desfase = () => {
    setTimeout(() =>{
                
        message.style.display = 'none';
        message.style.opacity = '0';
        inputBox.style.display = 'flex';
    }, 5000)    
}

const errorWindow = () =>{
    error.style.top = '50%';
    inputBox.style.opacity = '0';
    verificar.style.display = 'none';
    error.style.opacity = '1';
}

entendido.addEventListener('click', ()=> {
    verificar.style.display = 'block';
    inputBox.style.opacity = '1';
    error.style.opacity = '0';
    error.style.top = '-100%';
})


const lengthValue = input =>{

    input.addEventListener('change', ()=>{
        if(input.value.length > 1) {
            input.value = 0;
        }
    })

}

lengthValue(inputPass1);
lengthValue(inputPass2);
lengthValue(inputPass3);



verificar.addEventListener('click', ()=>{
    sumatoria= inputPass1.value + inputPass2.value + inputPass3.value;

    if(inputPass1.value == '' || inputPass2.value == '' || inputPass3.value == '') {
        console.log('todos los numeros deben tener un código');
        errorWindow();
    } else {

        inputBox.style.display = 'none';
        validationAnimation.style.display = 'flex';
        validationAnimation.style.opacity = '.8';

        setTimeout(() =>{
            
            validationAnimation.style.display = 'none';
            validationAnimation.style.opacity = '0';

            if(sumatoria == password1) {
                validationResult.textContent = `Felicidades! password1 es correcta!!`;
                message.style.display = 'flex';
                message.style.opacity = '1';
                desfase();
            }
            else if(sumatoria == password2){
                validationResult.textContent = `Felicidades! password2 es correcta!!`;
                message.style.display = 'flex';
                message.style.opacity = '1';
                desfase();
            }
            else {
                validationResult.textContent = `No acertaste a ninguna de nuestras dos claves, 
                sigue intentando.`;
                message.style.display = 'flex';
                message.style.opacity = '1';
                desfase();
    
            }


        }, 8000)

        
        
    }   
})
