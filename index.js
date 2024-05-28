const buttonValues = [
    '/', '7', '8', '9', '*',
    '4', '5', '6', '-', '1',
    '2', '3', '+', '0', '.',
    'C', '='
];

const btnContainer = document.querySelector('.btn-container');

buttonValues.forEach(value => {
    const button = document.createElement('button');
    button.value = value;
    button.textContent = value;
    btnContainer.appendChild(button);
});

const inputValue = document.getElementById('display');
const btnVal = document.getElementsByTagName('button');

Array.from(btnVal).forEach(button=>{
   button.addEventListener('click',(e)=>{
     const buttonVal=e.target.value
     buttonVal==='=' ? inputValue.value = (calValue(inputValue.value)) :buttonVal==='C' ? 
                          inputValue.value ='' : inputValue.value +=buttonVal
   })
})
function calValue(value) {
    try {
        return new Function('return ' + value)().toFixed(2);
    } catch (e) {
        return 'error'; 
    }
}

