const slider = document.getElementById('myRange');
const views = document.getElementById('views');
const permonth = document.getElementById('permonth');

const settings={
  fill: 'hsl(174, 77%, 80%)',
  background: 'hsl(224, 65%, 95%)'
}

slider.oninput = function() {
  
  if (!document.getElementById('pill').checked) {
    if(this.value === '0') { permonth.innerHTML = ''; views.innerHTML = '';}
    if(this.value === '1') { permonth.innerHTML = (8).toLocaleString('en-US', {
        style: 'currency',
        currency: 'USD',
      }); views.innerHTML = 10*this.value + 'K';}
    if(this.value === '5') { permonth.innerHTML = '$12.00'; views.innerHTML = 10*this.value + 'K';}
    if(this.value === '10') { permonth.innerHTML = '$16.00'; views.innerHTML = 10*this.value + 'K';}
    if(this.value === '50') { permonth.innerHTML = '$24.00'; views.innerHTML = 10*this.value + 'K';}
    if(this.value === '100') { permonth.innerHTML = '$36.00'; views.innerHTML = '1M';}
  }
  else {
    if(this.value === '0') { permonth.innerHTML = ''; views.innerHTML = '';}
    if(this.value === '1') { permonth.innerHTML = (8).toLocaleString('en-US', {
        style: 'currency',
        currency: 'USD',
      }); views.innerHTML = 10*this.value + 'K';}
    if(this.value === '5') { permonth.innerHTML = '$9.6'; views.innerHTML = 10*this.value + 'K';}
    if(this.value === '10') { permonth.innerHTML = '$12.8'; views.innerHTML = 10*this.value + 'K';}
    if(this.value === '50') { permonth.innerHTML = '$19.2'; views.innerHTML = 10*this.value + 'K';}
    if(this.value === '100') { permonth.innerHTML = '$28.8'; views.innerHTML = '1M';}
  }

  const percentage = 100*(slider.value-slider.min)/(slider.max-slider.min);
  slider.style.background = `linear-gradient(90deg, ${settings.fill} ${percentage}%,
     ${settings.background} ${percentage + 0.1}%)`;
  
}