const container = document.querySelector('.container');


const display = document.querySelector('.display');


const deleteMe = document.querySelector('.deleteMe');


const clear = document.querySelector('.clear');

const equalTo = document.querySelector('.equalTo');


const result  = (input)=>{
  display.innerText += input;
  
};


const disclaimer = document.querySelector('.disclaimer');



const continueMe = document.querySelector('.continue');

const demo = document.querySelector('.demo');

const aud = document.querySelector('.aud');

const fa_volume_high = document.querySelector('.fa-volume-high');

const fa_volume_xmark = document.querySelector('.fa-volume-xmark');

const modes = document.querySelector('.modes');

const lightMode = document.querySelector('.fa-sun');

const darkMode = document.querySelector('.fa-moon');

const root = document.querySelector(':root');

const videoDemo = document.querySelector('.videoDemo');


window.onload = ()=>{
  container.style.display = 'none';
  aud.style.display = 'none';
  modes.style.display = 'none';
  videoDemo.style.display = 'none';
  disclaimer.style.display = 'block';
  disclaimer.style.top = '5em';
};

continueMe.addEventListener('click',()=>{
  disclaimer.style.display = 'none';
  modes.style.display = 'block';
  aud.style.display = 'block';
  container.style.display = 'grid';
});

demo.addEventListener('click',()=>{
  container.style.display = 'none';
  aud.style.display = 'none';
  modes.style.display = 'none';
  videoDemo.style.display = 'block';
  disclaimer.style.display = 'none';
});

deleteMe.addEventListener('click',()=>{
  
  display.innerText = display.innerText.slice(0,-1);
  console.log(display.innerText);
  
});


clear.addEventListener('click',()=>{
  display.innerHTML = '';
});

equalTo.addEventListener('click',()=>{
  try {
    display.innerText = eval(display.innerText);
  } catch (err) {
    display.innerText = 'syntax error';
  }
});


// Audio

const one = document.querySelector('.one');

const two = document.querySelector('.two');

const three = document.querySelector('.three');

const four = document.querySelector('.four');

const five = document.querySelector('.five');

const six = document.querySelector('.six');

const seven = document.querySelector('.seven');

const eight = document.querySelector('.eight');

const nine = document.querySelector('.nine');

const ten = document.querySelector('.ten');

const zero = document.querySelector('.zero');

const plus = document.querySelector('.plus');

const minus = document.querySelector('.minus');

const divided_by = document.querySelector('.divided_by');

const dot = document.querySelector('.dot');

const percent = document.querySelector('.percent');


const keyPad = new Audio('/audio/knock .mp3');

one.addEventListener('click',()=>{
  keyPad.play();
});

two.addEventListener('click',()=>{
  keyPad.play();
});

three.addEventListener('click', () => {
  keyPad.play();
});

four.addEventListener('click', () => {
  keyPad.play();
});

five.addEventListener('click', () => {
  keyPad.play();
});

six.addEventListener('click', () => {
  keyPad.play();
});

seven.addEventListener('click', () => {
  keyPad.play();
});

eight.addEventListener('click', () => {
  keyPad.play();
});

nine.addEventListener('click', () => {
  keyPad.play();
});

zero.addEventListener('click', () => {
  keyPad.play();
});

plus.addEventListener('click', () => {
  keyPad.play();
});

minus.addEventListener('click', () => {
  keyPad.play();
});

divided_by.addEventListener('click', () => {
  keyPad.play();
});

equalTo.addEventListener('click', () => {
  keyPad.play();
});

clear.addEventListener('click', () => {
  keyPad.play();
});

deleteMe.addEventListener('click', () => {
  keyPad.play();
});

dot.addEventListener('click', () => {
  keyPad.play();
});

percent.addEventListener('click', () => {
  keyPad.play();
});


fa_volume_xmark.style.display = 'none';

fa_volume_high.addEventListener('click',()=>{
  keyPad.volume = 0;
  fa_volume_high.style.display = 'none';
  fa_volume_xmark.style.display = 'block';
});


fa_volume_xmark.addEventListener('click',()=>{
  keyPad.volume = 1;
  fa_volume_high.style.display = 'block';
  fa_volume_xmark.style.display = 'none';
});


// Dark and light mode
lightMode.style.display = 'none';

darkMode.addEventListener('click',()=>{
   lightMode.style.display = 'block';
   darkMode.style.display = 'none';
  root.classList.toggle('changemode');
  
});

lightMode.addEventListener('click',()=>{
   darkMode.style.display = 'block';
   lightMode.style.display = 'none';
  root.classList.toggle('changemode');
  
})

