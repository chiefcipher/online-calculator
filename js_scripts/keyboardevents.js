
let btnNumber = '.btn--number-' ; 

function click(btn){ 
    document.querySelector(btnNumber + btn).click(); 
}

function buttonControlSystem () { 
    document.addEventListener('keyup', function(event){ 
        event.preventDefault() ;  

        if (event.code == 'Enter'){document.querySelector('.btn--operator-equal').click();} 
        else if (event.key == '-'){ document.querySelector('.btn--operator-minus').click();} 
        else if(event.key == '/'){document.querySelector('.btn--operator-divide').click();} 
        else if (event.key == '+'){document.querySelector('.btn--operator-plus').click()} 
        else if (event.key == '*' ){document.querySelector('.btn--operator-times').click() }  
        else if (event.key == '%'){document.querySelector('.btn--operator-modulus').click()}
        else if (event.key =='Backspace'){document.querySelector('.btn--control-clear').click()}
        else if (event.key =='Escape'){document.querySelector('.btn--control-power').click()}
        else if (event.key == '.'){document.querySelector('.btn--number-period').click()}

   
        for (let i = 0 ; i < 10 ; i++){ 
            if (event.key == i){click(i)}
        }

    })
} 

document.addEventListener("DOMContentLoaded", buttonControlSystem) ; 
 

// FOCUS ON ENTER KEY AFTER CLICKING BUTTONS TO ALLOW BUTTON CONTROL SYSTEM WORK PERFECTLY 
let btns = document.querySelectorAll('.btn') ; 
for (element of btns){ 
    element.addEventListener('click', ()=> { 
      document.querySelector('.btn--operator-equal').focus();
    })
}
