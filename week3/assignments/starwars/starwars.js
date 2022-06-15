// declare any necessary variables

// define a function called 'fetchData()' that passes the values from 
// the 'queryType' and 'itemID' elements in starwars.html to the function 
// called 'getFromSWAPI()'

function fetchData() {
    let item = document.querySelector("#itemID").value;
    let type = document.querySelector("#queryType").value;
    getFromSWAPI(item,type);
}

function getFromSWAPI(type, item) {
    // assign values to any necessary variables
    fetch(`https://swapi.dev/api/${type}/${item}`)
    .then(function (response) {
        return response.json();
    })
    .then(function(data){
        updateInfo(data);
    })
    .catch(function(err) {
        console.warn(err);
    });
}

// create a new function called 'updateInfo()' that receives the data from 
// the call to that function (see above). Use logic to write the appropriate
//labels to 'dataLabel1' and 'dataLabel2' elements in starwars.html, as well
// as the appropriate values from the data object to the 'dataValue1' and 
// 'dataValue2' elements in starwars.html.

function updateInfo(data) {
    const keys = Object.keys(data);

    document.querySelector("#dataLabel1").innerText = keys[0].replace(/_/g,"");
    document.querySelector("#dataValue1").innerText = data[keys[0]];
    document.querySelector("#dataLabel2").innerText = keys[5].replace(/_/g,"");
    document.querySelector("#dataValue2").innerText = data[keys[5]];
    console.log(data);
}