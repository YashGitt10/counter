const cntVal = document.querySelector('#counter');

const inc = () => {
    let value = parseInt(cntVal.innerText);
    value = value + 1;
    cntVal.innerText = value;
};

const dec = () => {
    let value = parseInt(cntVal.innerText);
    value = value - 1;
    cntVal.innerText = value;
};

const reset = () => {
    let value = parseInt(cntVal.innerText);
    value = 0;
    cntVal.innerText = value;
};