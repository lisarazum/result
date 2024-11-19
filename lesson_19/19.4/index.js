import './index.css';
import photo from './assets/jsLogo.png';

console.log('Hello World!');

const h1 = document.createElement('h1');
h1.textContent = 'I love JavaScript';

const img = document.createElement("img");
img.src = photo;
document.body.append(h1);
document.body.append(img);