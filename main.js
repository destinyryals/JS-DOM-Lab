let bodyStyle = document.querySelector("body");
bodyStyle.style.fontFamily = 'Arial, sans-serif';

let nickname = document.getElementById("nickname");
let favorites = document.getElementById("favorites");
let hometown = document.getElementById("hometown");
let random = document.getElementById("random");

nickname.textContent = "Nickname: Dee";
favorites.textContent = "Favorites: Criminal Minds, Music, Doing nails, and Traveling";
hometown.textContent = "Hometown: Salem";
random.textContent = "Random Fact: Jhene Aiko and Brent Faiyaz are my favorite artists.";

let styleList = document.querySelector('ul').style.color = "blue";

let img = document.createElement('img');
img.setAttribute('src', 'img/IMG_0536.jpg');
img.setAttribute('width', '300');
img.setAttribute('height', '500');
document.querySelector('body').appendChild(img);