//Етап 1
var features = ["Multiplayer", "Story mode", "Achievement"];
var prices = [250, 150, 100];
var bugs = [25, 15, 45];

for (var i = 0; i < bugs.length; i++) {
    if (bugs[i] > 30) {
        features.splice(i, 1);
        prices.splice(i, 1);
        bugs.splice(i, 1);
    }
}

console.log(features);
console.log(prices);
console.log(bugs);

//Етап 3
var choice = '';

while (choice.toLowerCase() !== "standart" && choice.toLowerCase() !== "deluxe") {
    choice = prompt("Оберіть видання гри (standart/deluxe)");
}

var premiummFeatures = features;
var premiummPrices = prices;
var premiummBugs = bugs;


switch (choice.toLowerCase()) {
    case "standart":
        console.log("Обрано Standart Edition"); 
        break;
    case "deluxe":
        var premiumFeatures = ["Саундтрек", "Ексклюзивний скін", "DLC"];
        var premiumPrices = [50, 80, 120];
        var premiumBugs = [4, 15, 13];
        premiummFeatures = features.concat(premiumFeatures);
        premiummPrices = prices.concat(premiumPrices);
        premiummBugs = bugs.concat(premiumBugs);
        console.log("Обрано Deluxe Edition");       
        break;    
}

console.log(premiummFeatures);
console.log(premiummPrices);
console.log(premiummBugs);