function calculateTriangleArea(){
    // get triangle base value 
    const baseField = document.getElementById('triangle-base');
    const baseValueText = baseField.value;
    const base = parseFloat(baseValueText)
    console.log(base)
    
    // get triangle height value 
    const heightField = document.getElementById('triangle-height');
    const heightValueText = heightField.value;
    const height = parseFloat(heightValueText);
    console.log(height)

    const area = 0.5 * base * height
    console.log(area)

    // show triangle area 
    const areaSpan = document.getElementById('triangle-area');
    areaSpan.innerText = area;

    addToCalculationEntry('Triangle',area)
}


function calculateRectangleArea(){
    const widthField = document.getElementById('rectangle-width');
    const widthValueText =  widthField.value;
    const width = parseFloat(widthValueText);
    console.log(width)

    //get rectangle length
    const lengthField  = document.getElementById('rectangle-length');
    const lengthValueField = lengthField.value;
    const length = parseFloat(lengthValueField);
    console.log(length)

    // validate input: width and length
    if(isNaN(width)|| isNaN(length)){
        alert('Please insert a number ')
        return;
    }

    // calculate area 
    const area = width * length
    
    // show rectangle area 
    const rectangleAreaSpan = document.getElementById('rectangle-area');
    rectangleAreaSpan.innerText = area  ;

    addToCalculationEntry('Rectangle',area)
}

// reusable function --> reduce duplicate code 
function calculateParallelogramArea(){
    const base = getInputValue('parallelogram-base')
    const height = getInputValue('parallelogram-hight ');
    // validate 
    if(isNaN(base) || isNaN(height)){
        alert(' Please insert a number ')
        return;
    }

    const area = base * height;
    setElementInnerText('parallelogram-area', area);

    //add to calculate entry 
    addCalculationEntry('Parallelogram',area)
}

function calculateEllipseArea(){
    const majorRadius = getInputValue('ellipse-major-radius');
    const minorRadius = getInputValue('ellipse-minor-radios');
    const area = 3.1416 * majorRadius *minorRadius;
    const areaTwoDecimal = area.toFixed(2);
    setElementInnerText('ellipse-area',areaTwoDecimal)

    addToCalculationEntry('Ellipse',areaTwoDecimal)

}

// reusable get input value field in number 
function getInputValue(fieldId){
    const inputField = document.getElementById(fieldId);
    const inputValueText = inputField.value;
    const value = parseFloat(inputValueText);
    return value;
}

// reusable set span, p, div, etc text 
function setElementInnerText (elementId, area){
    const element = document.getElementById(elementId)
    element.innerText = area;    addToCalculationEntry('Ellipse',area)
}

// add to calculate entry 
/**
 * 1. get the element where you want to add the dynamic HTML
 * 2. create an element you want to add 
 * 4. set inner HTML. it could be dynamic Template string 
 * 5. append the created eleme    addToCalculationEntry('Ellipse',area)nt as a child of the parents 
 */
function addCalculationEntry(areaType,area){
    console.log(areaType+ ' ' + area)
    const calculationEntry = document.getElementById('calculation-entry');

    const p = document.createElement('p');
    p.classList.add('my-4')
    p.innerHTML =` ${areaType} ${area} cm<sup>2</sup> <button class="btn btn-success">
    Convert</button>`;

    calculationEntry.appendChild(p);
}
    addToCalculationEntry('Ellipse',area)
// Date  validation 
/**
 * 1. set the proper type of the input field. (number, date, email)
 * 2. check type using typeof     addToCalculationEntry('Ellipse',area)
 * 3. NaN means: Not a Number. inNaN is checking whether the input is a number or not 
 */


