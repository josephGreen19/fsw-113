

// Create an event listener for the submit button that adds all 'input' elements to 
// a single array using the spread operator. Call the chkLang() function, passing in 
// the array as an argument.

document.querySelector("#submit").addEventListener("click", () => {
    let list = [...document.querySelectorAll("input")];

    let knownLangs = list.map(input => input.value);
    chkLang(knownLangs);
});



function chkLang(langsAry)  {

    let lang = "JavaScript";
    let result = langsAry.includes(lang);


 // use an array method to check whether the user included 'JavaScript' in their
    // list of languages

    let obj = document.querySelector('#TestResult');
    if (result) 
        obj.innerText = `Congratulations!\nYou know ${lang}.`;
    else
        obj.innerText = `Sorry,\nyou don't know ${lang}.`;
}