//Assign variables
const input = document.getElementById('number');
const output = document.getElementById('output');
const convertBtn = document.getElementById('convert-btn');
//Check input when button is clicked to make sure it meets the rules
const checkInput = (e) => {
    if (input.value.trim() === '') {
        output.innerHTML = `<span>Please enter a value.</span>`
        return;
    } else if (input.value <= 0) {
        output.innerHTML = `<span>Please enter a value greater than 0.</span>`
        return;
    } else if (input.value >= 4000) {
        output.innerHTML = `<span>Please enter a value less than 4000.</span>`
        return;
    } else {
        output.textContent = convertNums(number.value)
        return;
    }
}
//Function to convert if the input is valid
function convertNums (num) {
    //Object to assign numerals. Start with higher numbers first to pass what is not needed
    let romanTable = {
        M: 1000,
        CM: 900,
        D: 500,
        CD: 400,
        C: 100,
        XC: 90,
        L: 50,
        XL: 40,
        X: 10,
        IX: 9,
        V: 5,
        IV: 4,
        I: 1
    }
    //'result' is the general variable to that roman numeral matches will be assigned/added to
    let result = '';
    //Assign iterator to start counting at 0
    let i = 0;
    /* 'For in' loops iterate through properties of an object, returning each name of the property and its numeric index 
    - romanTable is an object containing properties with numeric indexes */
    for (i in romanTable) {
        /* 'While' loops will continue to iterate as long as the condition is true. 
        It will iterate with i through each romanTable property while the 'input' number value is still greater. */
        while (num >= romanTable[i]) {
            //Each item match via iteration will be returned to 'result'  
            result += i;
            /* Every item match will be 'removed' from 
            romanTable in the instance, so it can move onto the next property.  */
            num -= romanTable[i]
        }
    }
    /* Return total converted value that has been assigned to 'result' */
    return result;
}
//Add event listener for button
convertBtn.addEventListener('click', checkInput)

/* Optional: Add regex to restrict non-digit characters.  
\D matches any non-digit character. 
g finds all matches. */
input.addEventListener('keydown', function (e) {
    e.target.value = Math.round(e.target.value.replace(/\D/g,''))
})
