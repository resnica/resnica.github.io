const colorText = document.getElementById('color');
const button = document.getElementById('btn');

function randomHex() {
    let hexArr = [];
    let randomNum;
    for (i = 0; i < 6; i++) {
        randomNum = Math.floor((Math.random() * (16 - 1)) + 1);
        hexArr.push(randomNum.toString(16));
    }
    return hexArr.join('');
}

button.addEventListener('click', function () {
    const hex = '#' + randomHex();
    document.body.style.backgroundColor = hex;
    colorText.textContent = hex;
});