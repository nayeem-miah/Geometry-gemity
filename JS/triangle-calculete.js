/**
 * Objective : get base , height of a triangle. Calculate the area by using the provided formula . And then display the area.
 * step 1:get base value of the triangle
 * step 2: add an  id in the base input field
 * step 3: use getElementById to access in the input field
 * step 4: get value from the input field.(value is the string now);
 * step 5: convert the value to a number.use perseFloat
 */
function calculatorTriangleArea(){
    // triangle the base value 
    const triangleBaseInput = document.getElementById('triangle-base');
    const triangleBaseValue=triangleBaseInput.value;
    const base=parseFloat(triangleBaseValue)
    console.log( base);


    // get triangle height value 
    const triangleHeightInput = document.getElementById('triangle-height');
    const triangleHeightText=triangleHeightInput.value;
    const height = parseFloat(triangleHeightText)
    
    console.log(height);

    // calculate triangle area
    const area= 0.5 * base *height;
    console.log('area of the triangle is :',area);

    // display triangle area
    const triangleAreaSpan=document.getElementById('triangle-area');
    triangleAreaSpan.innerText=area;

}