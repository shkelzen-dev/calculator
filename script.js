let a = 0;
let o = '';
let b = 0;

function add(a,b){
    
    return a+b;
};

function subtract(a,b){
    return a-b ;
};


function multiply(a,b){
    return a*b;
};

function divide(a,b){
   return a/b;
};

function operate(a,o,b){
    if(o === '+'){
        scr2.textContent = add(a,b);
    }else if(o === '-'){
        scr2.textContent = subtract(a,b);
    }else if(o == '*'){
        scr2.textContent = multiply(a,b);
    }
    else if(o == '/'){
        scr2.textContent = divide(a,b);
    }else{
        scr2.textContent = 'Error!';
    };
};

let scr2 = document.getElementById('scr2');
let scr1 = document.getElementById('scr1');


function show(value){
    if(scr2.textContent == 0){
        scr2.textContent = '';
        scr2.textContent = value;
    }else{
        scr2.textContent += value ;
    }
    
};



function clearScreen(){
    scr2.textContent = 0;
    scr1.textContent = '';
};

clearScreen();

function act(value){
    a = scr2.textContent ;
    a = parseFloat(a);
    scr1.textContent += a ; 
    scr2.textContent = value;
    o = value ; 
    scr1.textContent += value ; 
    scr2.textContent = '';
   
}

function submit(){
    b = scr2.textContent;
    scr1.textContent += b;
    scr1.textContent += '=';
    b = parseFloat(b);
    operate(a,o,b);
}
