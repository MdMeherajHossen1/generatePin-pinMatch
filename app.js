
function getPin(){
    const pin = Math.round(Math.random()*10000);
    const pinString = pin + '';
    if(pinString.length == 4){
        return pin;
    }
    else{
        return getPin();
    }
}


function generatePin(){
   const pin = getPin();
   const pinScreen = document.getElementById('pin-screen');
   pinScreen.value = pin;

   
}
document.getElementById('key-pad').addEventListener('click', function(event){
    const number = event.target.innerText;
    const calcInput = document.getElementById('calc-screen');
    if(isNaN(number)){
       if(number == 'C'){
           calcInput.value = '';
       }
       else if(number == '<'){
           calcInput.value = calcInput.value.
           slice(0,-1);
       }
    }
    else{
        calcInput.value = calcInput.value + number;
    }
    
});


function pinMatch(){
    const pin = document.getElementById('pin-screen').value;
    const TypedPin = document.getElementById('calc-screen').value;
    const  succes = document.getElementById('varify-success');
    const err = document.getElementById('varify-err');
    if(pin == TypedPin){
       succes.style.display = 'block';
       err.style.display = 'none';
    }
    else{
        succes.style.display = 'none';
       err.style.display = 'block';
    }

};