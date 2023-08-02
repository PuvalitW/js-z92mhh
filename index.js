// Import stylesheets
import './style.css';
import { Fancybox } from '@fancyapps/ui';
import '@fancyapps/ui/dist/fancybox/fancybox.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>JS Starter</h1>`;

// สร้าง element <a> และ <img> ของรูปแบบที่ 1
const linkA = document.createElement('a');
linkA.setAttribute('href', 'https://lipsum.app/id/31/300x200');
linkA.setAttribute('data-fancybox', 'gallery');
linkA.setAttribute('data-caption', 'Caption #1');

const imgA = document.createElement('img');
imgA.setAttribute('src', 'https://lipsum.app/id/31/300x200');

// นำ <img> เข้าไปใน <a>
linkA.appendChild(imgA);

// สร้าง element <a> และ <img> ของรูปแบบที่ 2
const linkB = document.createElement('a');
linkB.setAttribute('href', 'https://lipsum.app/id/31/300x200');
linkB.setAttribute('data-fancybox', 'gallery');
linkB.setAttribute('data-caption', 'Caption #2');

const imgB = document.createElement('img');
imgB.setAttribute('src', 'https://lipsum.app/id/31/300x200');

// นำ <img> เข้าไปใน <a>
linkB.appendChild(imgB);

// นำ <a> ทั้งสองแบบมาใส่ในตำแหน่งที่ต้องการ
//const container = document.getElementById("your-container-id");
appDiv.appendChild(linkA);
appDiv.appendChild(linkB);

Fancybox.bind('[data-fancybox]', {
  // Your custom options
});
