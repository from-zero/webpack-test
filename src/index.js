import logo from './reply.png'
import logo1 from './640.jpg'
import './index.css';
console.log(111)
let image = new Image();
image.src = logo;
image.setAttribute('class','img');
let image1 = new Image();
image1.src = logo1;
image1.setAttribute('class','img');
document.getElementById('root').appendChild(image);
document.getElementById('root').appendChild(image1);

document.write('hello webpack')