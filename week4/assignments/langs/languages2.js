

// Create an event listener for the submit button that adds all 'input' elements to 
// a single array using the spread operator. Call the chkLang() function, passing in 
// the array as an argument.




function chkLang(language,...langs)  {

//let btn = document.querySelector("#submit");

//btn.addEventListener("click", chkLang);

// let lang0 = document.querySelector('#lang0').value;
// let lang1 = document.querySelector('#lang1').value;
// let lang2 =document.querySelector('#lang2').value;
// let lang3 =document.querySelector('#lang3').value;
// let lang4 =document.querySelector('#lang4').value;
// let lang5 =document.querySelector('#lang5').value;
// let lang6 =document.querySelector('#lang6').value;
// let lang7 =document.querySelector('#lang7').value;
console.log(language);
console.log(langs);




let result = langs.includes(language);
   
    








    // use an array method to check whether the user included 'JavaScript' in their
    // list of languages

    let obj = document.querySelector('#TestResult');
    if (result) 
        obj.innerText = `Congratulations!\nYou know ${lang}.`;
    else
        obj.innerText = `Sorry,\nyou don't know ${lang}.`;
}