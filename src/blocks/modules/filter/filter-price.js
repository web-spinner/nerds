import noUiSlider from "nouislider";

var slider = document.getElementById('slider');
const inputMin = document.querySelector('#price-min');
const inputMax = document.querySelector('#price-max');
const rangeMin = document.querySelector('#range-min');
const rangeMax = document.querySelector('#range-max');
const min = +inputMin.getAttribute('data-min');
const max = +inputMax.getAttribute('data-max');
const startMin = +inputMin.getAttribute('data-start');
const startMax = +inputMax.getAttribute('data-start');

noUiSlider.create(slider, {
  start: [startMin, startMax],
  connect: true,
  range: {
    'min': min,
    'max': max 
  },
  format: {
    to: function(value){
      return Math.round(value);
    },
    from: function(value){
      return Number(value);
    }
  }
});

slider.noUiSlider.on('update', function(values){
    let min = values[0];
    let max = values[1];

    rangeMin.textContent = min;
    rangeMax.textContent = max;
    inputMin.value = min;
    inputMax.value = max;
})
