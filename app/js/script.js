const slider = document.getElementById('myRange');
const views = document.getElementById('views');
const permonth = document.getElementById('permonth');
const arr = [[0, 0], [1, 8], [5, 12], [10, 16], [50, 24], [100, 36]];
const discount = 25;
const settings = {
  fill: 'hsl(174, 77%, 80%)',
  background: 'hsl(224, 65%, 95%)'
}

slider.oninput = function() {
  let flag = 0;
  if (!document.getElementById('pill').checked) {
    flag = 0;
    pillChecked(arr, this.value, flag);
  }
  else {
    flag = 1;
    pillChecked(arr, this.value, flag);  
  }

  const percentage = 100*(slider.value-slider.min)/(slider.max-slider.min);
  slider.style.background = `linear-gradient(90deg, ${settings.fill} ${percentage}%,
     ${settings.background} ${percentage + 0.1}%)`;
  
}

function calculateViews (value) {
  if(value === '0') { 
    return '';
  } else if (value === '100') {
    return '1M';
  } else return 10*value + 'K';
}

function calculatePrice (value, flag) {
  if(!flag && value !== 0) {
    return (value).toLocaleString('en-US', { style: 'currency', currency: 'USD' });
  } else {
     if (value !== 0) {
      return (value - (value/100) * discount).toLocaleString('en-US', { style: 'currency', currency: 'USD' });
     } else return '';
  }
}

function pillChecked(arr, value, flag) {
  for( var i= 0; i <= arr.length -1; i ++) {
    let temp = arr[i];
    if(value === temp[0].toString()) 
    {
      permonth.innerHTML = calculatePrice(temp[1], flag);
      views.innerHTML = calculateViews(value);
    }
  }
}