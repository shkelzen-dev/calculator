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
        nr1 = s1;
        
    }else if(o === '-'){
         s1 = subtract(a,b);
         nr1 = s1;
    }else if(o == '*'){
         s1 = multiply(a,b);
        nr1 = s1;
    }
    else if(o == '/'){
        s1 = divide(a,b);
        nr1 = s1;
    }else{
        nr1 = nr2 ;
    }
};

let scr2 = document.getElementById('scr2');
let scr1 = document.getElementById('scr1');

scr2.style.color = 'black';

//saves input in variable 
function show(value){
    if(scr2.textContent == 0){
        scr2.textContent = '';
        scr2.textContent = value;
        nr2 = scr2.textContent ;
        nr2 = parseFloat(nr2);
        operate(nr1,o,nr2);//does calculation
        scr1.textContent = Math.round(s1*100000)/100000;//shows rounded result in top screen
        o = '';
    }else{
        scr2.textContent += value ;
        nr2 = scr2.textContent ;
        nr2 = parseFloat(nr2);
        operate(nr1,o,nr2);
        o = '';
        scr1.textContent = Math.round(s1*100000)/100000 ;
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
    scr1.textContent = nr1 ;
    o = value;
    scr2.textContent = '';
    point.disabled = false ;
};
//shows result in main screen
function submit(){
   scr2.textContent = scr1.textContent;
   scr1.textContent = '';
   scr2.style.color = 'green';
   point.disabled = false ;
};

//backspace
function backspace(){
    let backspaced = Math.floor(scr2.textContent/10);
    scr2.textContent = backspaced; 
    nr2 = scr2.textContent ;
    nr2 = parseFloat(nr2);
    operate(nr1,o,nr2);
    o = '';
    scr1.textContent = Math.round(s1*100000)/100000 ;
}

//push effect
addEventListener('click',(element)=>{
    console.log(element);
    let btnId = element.path[0].id;
    if(btnId == 'point'){
        point.disabled = true ;
    }
    let btnn = document.getElementById(btnId);
    btnn.style.boxShadow = "0px 0px 0px black";
    setTimeout(()=>{
        btnn.style.boxShadow = "10px 10px 10px black";
    },500)
})