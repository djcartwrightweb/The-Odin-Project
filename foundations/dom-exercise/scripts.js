const container = document.querySelector('#container');

const content = document.createElement('div');
content.classList.add('content');
content.textContent = 'This is the glorious text-content!';

container.appendChild(content);

let newContent = document.createElement('p');
newContent.style.color = 'red';
newContent.textContent = 'Hey I\'m red!';

container.appendChild(newContent);

newContent = document.createElement('h3');
newContent.style.color = 'blue';
newContent.textContent = 'Hey I\'m a blue h3!';

container.appendChild(newContent);

newContent = document.createElement('div');
let newH1 = document.createElement('h1');
newH1.textContent = 'I\'m in a div';
let newP = document.createElement('p');
newP.textContent = 'ME TOO!';

newContent.appendChild(newH1);
newContent.appendChild(newP);

container.appendChild(newContent);