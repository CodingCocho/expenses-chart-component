// Hold the containers with the bar total
const barTotals: NodeListOf<HTMLElement> =  document.querySelectorAll('.bar-total');

// Hold the bars
const bars: NodeListOf<HTMLElement> = document.querySelectorAll('.bar');

/*
* Shows the container with the bar total
* @param index the index of the bar
* @return void
*/
const showTotal = (index: number): void =>
{

  // Hold the html element
  const element: HTMLElement = barTotals[index]; 

  // Apply style to show the container
  element.style.backgroundColor= 'black';
  element.style.color = 'white';

  // Brighten the bar 
  bars[index].style.filter = 'brightness(150%)'
}

/*
* Hides the container with the bar total
* @param index the index of the bar
* @return void
*/
const hideTotal = (index: number): void =>
{

  // Hold the html element
  const element: HTMLElement = barTotals[index];

  // Apply style to hide the container
  element.style.backgroundColor= 'hsl(33, 100%, 98%)';
  element.style.color = 'hsl(33, 100%, 98%)';

  // Restore the color of the bar
  bars[index].style.filter = 'brightness(100%)'
}

// Loop through the bars and add the functions
for(let counter: number = 0; counter < bars.length; counter++)
{

  // Hold the current bar element
  const barElement: HTMLElement = bars[counter];

  // Add the mouseover function
  barElement.addEventListener('mouseover', function()
  {
    showTotal(counter);
  })

  // Add the mouseout function
  barElement.addEventListener('mouseout', function()
  {
    hideTotal(counter);
  })
}