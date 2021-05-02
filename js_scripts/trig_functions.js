console.log("trig Math.sin(30)" + Math.sin(convertAngleState(30,false))) ; 

//CONVERT RADIANS TO DEGREE
function convertAngleState(angle, radians) { 
    if (radians) { 
        return (angle * (180/Math.PI)) ;  
    }
    else { 
        return (angle * (Math.PI/180)) ;  
    }
}


let tan30 = Math.tan(30)  ; 
let tan30deg = Math.tan(convertAngleState(30,false)) ; 

console.log(tan30 ) 
console.log(tan30deg)