function calculateRhombusArea(){
    const d1=getInputValueById('Rhombus-d1');
    console.log(d1);
    const d2=getInputValueById('Rhombus-d2');
    console.log(d2);
    const area=0.5 * d1 * d2;
    console.log(area);
    setInnerTextBy('Rhombus-area',area);
    
}


function getInputValueById(inputFieldId){
    const inputField=document.getElementById(inputFieldId);
    const inputValueText=inputField.value;
    const value=parseFloat(inputValueText);
    return value;

}

function setInnerTextBy(elementId,area){
    const element=document.getElementById(elementId);
    element.innerText=area;

}