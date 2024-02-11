//Task1
// document.addEventListener('DOMContentLoaded', function () {
//     let imageWidth = 300; 
//     const imgElement = document.getElementById('myImage');

//     imgElement.style.width = `${imageWidth}px`;

//     function changeSize(action) {
//         if (action === 'increase') {
//             imageWidth += 20; 
//         } else if (action === 'decrease') {
//             imageWidth -= 20; 
//         }

//         imgElement.style.width = `${imageWidth}px`;
//     }

//     document.querySelector('button:nth-child(1)').addEventListener('click', function () {
//         changeSize('increase');
//     });

//     document.querySelector('button:nth-child(2)').addEventListener('click', function () {
//         changeSize('decrease');
//     });
// });

//Task 2
// document.addEventListener('DOMContentLoaded', function () {
//     function changeColor() {
//         const colorTextElement = document.getElementById('colorText');
//         const colorButtonElement = document.getElementById('colorButton');

//         const currentColor = window.getComputedStyle(colorTextElement).color;

//         colorButtonElement.style.color = currentColor;
//     }
//     document.getElementById('colorButton').addEventListener('click', changeColor);
// });

//Task3
const hideButton = document.getElementById('hideButton');
const showButton = document.getElementById('showButton');
const myImage = document.getElementById('myImage');

hideButton.addEventListener('click', () => {
    myImage.style.display = 'none';
});

showButton.addEventListener('click', () => {
    myImage.style.display = 'block'; 
});

