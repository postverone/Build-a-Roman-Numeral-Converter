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
//Perform conversion function if the input is valid
function convertNums (num) {
    //Object to assign numerals
    let romanLookup = {
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
    //Roman will be the variable to assign number matches to from romanLookup
    let roman = '';
    //Assign iterator to start at 0
    let i = 0;
    //For loop with condition to iterate through romanLookup with i
    for (i in romanLookup) {
        //Run for loop while the number is greater than or equal to romanLookup
        while (num >= romanLookup[i]) {
            //Each 'roman' will be added to i as it iterates through the object
            roman += i;
            /* Every value matched as it iterates will be 'removed' from 
            romanLookup in the instance so it can move onto the next value in romanLookup */
            num -= romanLookup[i]
        }
    }
    /* Return total converted value - which was assigned to roman -
    equal the initial input value */
    return roman;
}
//Add event listener for button
convertBtn.addEventListener('click', checkInput)

/* Optional: Add regex to restrict non-digit character.  
\D matches any non-digit character. 
g finds all matches. */
input.addEventListener('keydown', function (e) {
    e.target.value = Math.round(e.target.value.replace(/\D/g,''))
})