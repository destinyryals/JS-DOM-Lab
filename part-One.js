let coders = document.querySelectorAll('p');
coders.textContent = "We are coders!";

let pgOne = document.getElementById('pgOne');
pgOne.textContent = "Developers for Life!";

let img = document.createElement('img');
    img.setAttribute('src', '/img/puppy.jpg');
    img.setAttribute('width', '300');
    img.setAttribute('height', '300');
    document.querySelector('body').appendChild(img);

pgOne.style.color = 'blue';
pgOne.style.fontSize = '40px';

let hide = document.getElementById('hide');

hide.addEventListener('click', () => {
if(img.style.display == 'none'){
    hide.textContent = 'Hide Image';
    img.style.display = 'block';
} else{
    hide.textContent = 'Show Image';
    img.style.display = 'none';
}
});