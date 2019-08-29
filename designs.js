var color = "#000000";

document.querySelector("#colorPicker").addEventListener("change", function(evt) {
color = evt.target.value;
});


document.getElementById("sizePicker").addEventListener("submit", function(ev) {
ev.preventDefault();
var height = document.querySelector("#inputHeight").value;
var width = document.querySelector("#inputWidth").value;

var pixelCanvas = document.querySelector("#pixelCanvas");
pixelCanvas.innerHTML = "";
var tBody = makeGrid(height, width, color);
pixelCanvas.appendChild(tBody);

});

function makeGrid(height, width) {
var tBody = document.createElement("tbody");
for (var row = 0; row < height; row++) {
var tr = document.createElement("tr");
for (var column = 0; column < width; column++) {
var td = document.createElement("td");
td.addEventListener("click", function(evt) {
evt.target.style.background = color;
})
tr.appendChild(td);
}
tBody.appendChild(tr);
}
return tBody;
}
