function calculateEllipseArea(){
    const a=getInputValueById("Ellipse-a");
    console.log(a);
    const b=getInputValueById('Ellipse-b');
    console.log(b);
    const area=3.1416* a * b;
    console.log(' area is :',area);
    setInnerTextBy('Ellipse-area',area);
}


function getInputValueById(inputFieldId){
    
        const inputField=document.getElementById(inputFieldId);
        const inputValueText=inputField.value;
        const value=parseFloat(inputValueText);
        return value;
      
}

function setInnerTextBy(elementId,area){
    const element= document.getElementById(elementId);
    element.innerText=area;

}