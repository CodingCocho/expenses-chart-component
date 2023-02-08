// Hold the containers with the bar total
var barTotals = document.querySelectorAll('.bar-total');
// Hold the bars
var bars = document.querySelectorAll('.bar');
/*
* Shows the container with the bar total
* @param index the index of the bar
* @return void
*/
var showTotal = function (index) {
    // Hold the html element
    var element = barTotals[index];
    // Apply style to show the container
    element.style.backgroundColor = 'black';
    element.style.color = 'white';
    // Brighten the bar 
    bars[index].style.filter = 'brightness(150%)';
};
/*
* Hides the container with the bar total
* @param index the index of the bar
* @return void
*/
var hideTotal = function (index) {
    // Hold the html element
    var element = barTotals[index];
    // Apply style to hide the container
    element.style.backgroundColor = 'hsl(33, 100%, 98%)';
    element.style.color = 'hsl(33, 100%, 98%)';
    // Restore the color of the bar
    bars[index].style.filter = 'brightness(100%)';
};
var _loop_1 = function (counter) {
    // Hold the current bar element
    var barElement = bars[counter];
    // Add the mouseover function
    barElement.addEventListener('mouseover', function () {
        showTotal(counter);
    });
    // Add the mouseout function
    barElement.addEventListener('mouseout', function () {
        hideTotal(counter);
    });
};
// Loop through the bars and add the functions
for (var counter = 0; counter < bars.length; counter++) {
    _loop_1(counter);
}
