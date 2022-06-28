const parts = [ 
    { partNbr: 'R5AQDVU', partDescr: 'Halbendozer', aisle: 'B3', qty: 14 },
    { partNbr: 'LJBKC0M', partDescr: 'Knudleknorp', aisle: 'H1', qty: 12},
    { partNbr: 'HUS51DE', partDescr: 'Knudlescheiffer', aisle: 'H1', qty: 12},
    { partNbr: 'M0XORFH', partDescr: 'Borgom Oil', aisle: 'B2', qty: 3},
    { partNbr: '35X7AP8', partDescr: 'Glundelscharf', aisle: 'C3', qty: 1},
    { partNbr: 'C1AYCAI', partDescr: 'Tschoffle', aisle: 'A4', qty: 5},
    { partNbr: 'E9IEYLS', partDescr: 'Karmandloch', aisle: 'C2', qty: 2},
    { partNbr: 'IW2I0TG', partDescr: 'Shreckendwammer', aisle: 'J4', qty: 2},
    { partNbr: '95OJTV6', partDescr: 'Dimpenaus', aisle: 'B1', qty: 16},
    { partNbr: 'LYII1MJ', partDescr: 'Lumpenknorp', aisle: 'H1', qty: 12},
    { partNbr: 'VQIL7AO', partDescr: 'Lumpenschieffer', aisle: 'H1', qty: 12},
    { partNbr: 'XF0MPS9', partDescr: 'Ratklampen', aisle: 'N2', qty: 7},
    { partNbr: 'AFU9OUG', partDescr: 'Dulpo Fittings', aisle: 'J2', qty: 4},
    { partNbr: 'E7XWGGO', partDescr: 'Flugtrimsammler', aisle: 'B3', qty:3 },
    { partNbr: '981FNC9', partDescr: 'Grosstramle', aisle: 'A1', qty: 1},
    { partNbr: 'AGSXYVZ', partDescr: 'Skirpenflatch', aisle: 'B2', qty: 2},
    { partNbr: 'V0SK0UX', partDescr: 'Lumpenmagler', aisle: 'H1', qty: 12},
    { partNbr: 'CTL40Z1', partDescr: 'Lumpenflempest', aisle: 'H1', qty: 24},
    { partNbr: 'POO9ZPM', partDescr: 'Eumonklippen', aisle: 'D2', qty: 7},
    { partNbr: 'WEYPU3Z', partDescr: 'Mumpenflipper', aisle: 'E3', qty: 1}

]

// list of each part number and qty for check-off in the "detailsList" element (Map)
var newO = document.querySelector("#detailsList");

var newL = parts.map(function(element) {
        return ` <input type="checkbox" value = "${element.partNbr}"> ${element.qty} (${element.partNbr})  ${element.partDescr}`;
});
console.log(newL);
newL.forEach(function displayPart(part) {
    var newN = document.createElement("li");
    newN.innerHTML = part;
    newO.append(newN);
});




      

// if parts requiring special handling exist (in aisle B3), list of items needing (SOME)
// special packaging in the "specialPackaging" element, else remove element
var spc = document.querySelector("#specialPackaging");

var filteredData = parts.filter(function filterData(part) {
    return part.aisle === ("B3");
});

filteredData.forEach(function display2(part) {
    var new2 = document.createElement("li");
    new2.innerHTML = part;
    spc.innerHTML = ("Special Packaging Required" );
    spc.append(new2);
});

// // for (var i = 0; i < parts.length; i++) {
// //     if(parts[i].aisle === ("B3")) {
// //      var spc = document.querySelector("#specialPackaging");
// //      spc.innerHTML = ("Special Packaging Required\n" );
// //      console.log(spc);

//  }
// }


// if hazardous parts exist (in aisle J4), let employee know in the "hazardousMaterials" (filter)
// element and remind them to get gloves, else remove element
for (var i = 0; i < parts.length; i++) {
    if(parts[i].aisle === ("J4")) {
     var waste = document.querySelector("#hazardousMaterials");
     waste.innerHTML = ("Hazardous Materials USE GLOVES!!");
     console.log(waste);

    }
}

// if all items in the order are small parts (aisle H1), then let employee know that they should take (every)
// a basket and go dirctly to aisle H1
var smlItems= document.querySelector("#smallItemsOnly");
let result = parts.every(sml);

function sml( el, index, arr) {
    return el.aisle ===("H1");
}

    if (result) {
        smlItems.innerHTML = ("Take a basket and go directly to aisle H1");
    } else {
        smlItems.remove();
    }
 

// if there are large items (anthing in aisles S, T, or U), then let the employee know in the "forkiftNeeded"
// element that they will need to reserve a forklift, else remove the element

var larItems= document.querySelector("#forkLiftNeeded");
let result2 = parts.every(lar);

function lar( el, index, arr) {
    if (parts.aisle === ("S")) {
        larItems.innerHTML = ("You will need to reserve a forklift ");
    } else {
        larItems.remove();
    }
 }

// sum up the total number of parts and append that number to the text already in "totalItems" element (REDUCE)
var all =document.querySelector("#totalItems");

