let nr1 = 0 ;
let o = '';//operator
let nr2  = 0;
let s1 = 0 ;


function add(a=0,b=0){
    a = a+b ;
    return a;
};

function subtract(a=0,b=0){
    a = a-b;
    return a ;
};


function multiply(a=1,b=1){
    a = a*b;
    return a;
};

function divide(a=1,b=1){
    a = a/b;
   return a;
};

function operate(a,o,b){
    if(o === '+'){
        s1 = add(a,b);
        nr1 = Math.round(s1*100000)/100000;
        
    }else if(o === '-'){
         s1 = subtract(a,b);
         nr1 = nr1 = Math.round(s1*100000)/100000;
    }else if(o == '*'){
         s1 = multiply(a,b);
        nr1 = nr1 = Math.round(s1*100000)/100000;
    }
    else if(o == '/'){
        s1 = divide(a,b);
        nr1 = nr1 = Math.round(s1*100000)/100000;
    }else{
        nr1 = nr2 ;
    }
};

let scr2 = document.getElementById('scr2');
let scr1 = document.getElementById('scr1');

scr2.style.color = 'black';

//saves input in variable 
function show(value){
    if(value === '0' && scr2.textContent === '0'){
        scr2.textContent = '0';
    }else if(value == '0' && scr2.textContent !== '0'){
        scr2.textContent += '0' ;
    }else if(value == '.'){
        scr2.textContent += value ; 
    }else{
    scr2.textContent += value ;
    scr2.textContent = parseFloat(scr2.textContent);
    }
};


let point = document.getElementById('point');

function clearScreen(){
    scr2.textContent = 0;
    scr1.textContent = '';
    nr1 = 0 ;
    nr2 = 0 ;
    o = '';
    s1 = 0 ;
    scr2.style.color = 'black';
    point.disabled = false ; 
};

clearScreen();

//stores first number and operator in variables
function act(value){
    nr2 = scr2.textContent ;    
    nr2 = parseFloat(nr2);
    operate(nr1,o,nr2);
    o = value ;
    scr1.textContent = nr1 ;
    scr2.textContent = '';
    point.disabled = false ;
};
//shows result in main screen
function submit(){
    if(scr2.textContent == ''){
        scr2.textContent = scr1.textContent ; 
    }else{
   nr2 = scr2.textContent;
   nr2 = parseFloat(nr2);
   operate(nr1,o,nr2);
   scr2.textContent = nr1 ;
    }
   scr1.textContent = 0 ;
   scr2.style.color = 'green';
   point.disabled = false ;
};

//backspace
function backspace(){
    let backspaced = Math.floor(scr2.textContent/10);
    scr2.textContent = backspaced; 
    
}

//push effect
addEventListener('click',(element)=>{
    let btnId = element.composedPath()[0].id;
    let btnn = document.getElementById(btnId);
    if(btnId == 'point'){
        point.disabled = true ;
    }else if(btnId == 'backspaceIcon'){
        btnn.style.fontSize = '35px';
        setTimeout(()=>{
            btnn.style.fontSize = '40px';
        },300);
    }else{    
    btnn.style.boxShadow = "0px 0px 0px black";
    setTimeout(()=>{
        btnn.style.boxShadow = "10px 10px 10px black";
    },500);}
});