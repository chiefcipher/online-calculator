

//CONVERT RADIANS TO DEGREE
function convertAngleState(angle, radians) { 
    //convert to degree
    if (radians) { 
        return (angle * (180/Math.PI)) ;  
    }
    else { 
        //convert to radian 
        return (angle * (Math.PI/180)) ;  
    }
}


//TRIG FUNCTIONS EVENT LISTENERS 
let trigBtns = document.querySelectorAll('.btn--trig') ;   
for (let i=0 ;i < trigBtns.length ; i++ ) { 
    trigBtns[i].addEventListener('click' , function () { 
        if (this.id=='sin') { 
            let result = Math.sin(convertAngleState(getOutputValue() , false)) ; 
            displayOutput(formatNumbers(result)) ; 
            history.innerText=''; 
        } 
        else if (this.id=='cos') { 
            let result = Math.cos(convertAngleState(getOutputValue() , false)) ; 
            displayOutput(formatNumbers(result)) ; 
            history.innerText=''; 
        }
        else if (this.id =='tan')  { 
            let result = Math.tan(convertAngleState(getOutputValue() , false )) ; 
            displayOutput(formatNumbers(result)) ; 
            history.innerText=''; 
        }
    })
        
}

//LOG BTN EVENT LISTENER 
let logBtn = document.querySelector('.btn--log') ;   
    logBtn.addEventListener('click' , function (){ 
        let result = Math.log10(getOutputValue()) ; 
        displayOutput(formatNumbers(result)) ; 
        history.innerText=''; 
    })
