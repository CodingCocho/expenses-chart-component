var barTotals = document.querySelectorAll('.bar-total');
var bars = document.querySelectorAll('.bar');
var showTotal = function (index) {
    var element = barTotals[index];
    element.style.backgroundColor = 'black';
    element.style.color = 'white';
    bars[index].style.filter = 'brightness(150%)';
};
var hideTotal = function (index) {
    var element = barTotals[index];
    element.style.backgroundColor = 'hsl(33, 100%, 98%)';
    element.style.color = 'hsl(33, 100%, 98%)';
    bars[index].style.filter = 'brightness(100%)';
};
var _loop_1 = function (counter) {
    var barElement = bars[counter];
    barElement.addEventListener('mouseover', function () {
        showTotal(counter);
    });
    barElement.addEventListener('mouseout', function () {
        hideTotal(counter);
    });
};
for (var counter = 0; counter < bars.length; counter++) {
    _loop_1(counter);
}
