const barTotals: NodeListOf<HTMLElement> =  document.querySelectorAll('.bar-total');
const bars: NodeListOf<HTMLElement> = document.querySelectorAll('.bar');

const showTotal = (index: number): void =>
{
  const element: HTMLElement = barTotals[index]; 
  element.style.backgroundColor= 'black';
  element.style.color = 'white';
  bars[index].style.filter = 'brightness(150%)'
}

const hideTotal = (index: number): void =>
{
  const element: HTMLElement = barTotals[index];
  element.style.backgroundColor= 'hsl(33, 100%, 98%)';
  element.style.color = 'hsl(33, 100%, 98%)';
  bars[index].style.filter = 'brightness(100%)'
}

for(let counter: number = 0; counter < bars.length; counter++)
{
  const barElement: HTMLElement = bars[counter];
  barElement.addEventListener('mouseover', function()
  {
    showTotal(counter);
  })
  barElement.addEventListener('mouseout', function()
  {
    hideTotal(counter);
  })
}