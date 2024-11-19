import "./index.css";
import MY_IMAGE from './assets/image.jpeg';
console.log('webpack')

const img = document.createElement("img");
img.src = MY_IMAGE;
document.body.append(img);

[1, 2, 3].map(n => n + 1);