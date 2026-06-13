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