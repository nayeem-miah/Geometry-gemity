function calculatePentagonArea(){
    const perimeter=getInputValueById('pentagon-perimeter');
    console.log(perimeter);
    const apothem=getInputValueById('pentagon-apothem');
    console.log(apothem);
    const area= 0.5 * perimeter * apothem;
    console.log(area);


    setInnerTextBy('pentagon-area',area);

}

function getElementById(inputFieldId){
    const inputField=document.getElementById(inputFieldId);
    const inputValueText=inputField.value;
    const value=parseFloat(inputValueText);
    return value;
}

function setInnerTextBy(elementId, area){
    const element=document.getElementById(elementId);
    element.innerText=area;


}