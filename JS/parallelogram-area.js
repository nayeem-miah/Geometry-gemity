// function calculateParallelogramArea(){
//     const parallelogramB=document.getElementById('parallelogram-base');
//     const inputTextB=parallelogramB.value;
//     const inputB=parseFloat(inputTextB);
//     console.log(inputB);


//     const parallelogramHeight=document.getElementById('parallelogram-height');
//     const inputTextHeight=parallelogramHeight.value;
//     const height=parseFloat(inputTextHeight);
//     console.log(height);

//     const area=inputB * height;
//     console.log('area is ',area);

//     // display in area
//     const parallelogramAreaSpan= document.getElementById('parallelogram-area');
//     parallelogramAreaSpan.innerText=area;


// }

function calculateParallelogramArea(){
    const base = getInputValueById('parallelogram-base');
    // console.log('base value ',base);
    const height =getInputValueById('parallelogram-height');
    // console.log('height value is :',height);
    const area=base * height;
    console.log('area is :',area);
    setInnerTextBy('parallelogram-area',area);
    
    
}

function getInputValueById(inputFieldId){
    const inputField=document.getElementById(inputFieldId);
    // console.log(inputField.value);
    const inputValueText=inputField.value;
    const inputValue=parseFloat(inputValueText);
    // console.log(inputValue);
    return inputValue;
}


function setInnerTextBy(elementId,area){
    const element=document.getElementById(elementId);
    element.innerText=area;

}