function BMI (weight,height) {
 let result = weight / (height * height)
return result;}

console.log(BMI(80,1.8))

function status(BodyMass) {
if (BodyMass <18.5) {
    return "لديك نقص في الوزن";
} else if (BodyMass <25 && BodyMass >18.5){
    return "وزنك صحي";
} else if (BodyMass >25) {
    return "لديك زياده في الوزن";
} 

}
function calculator() {
    let weight = document.getElementById("weight") .value ;
    let height = document.getElementById("height") .value ; 
    
    let BMI_value = BMI (weight,height) ; 
    let desc = status(BMI_value) ;
    
    let box = document.getElementById("result") ;
    box .innerText= BMI_value + " == " + desc ;


}