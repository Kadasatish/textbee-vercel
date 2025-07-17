// Connect to backend socket server
const socket = io('https://textbee-render.onrender.com');

// DOM elements
const input = document.getElementById('message');
const sendBtn = document.getElementById('sendBtn');
const messagesDiv = document.getElementById('messages');

// Send message on button click
sendBtn.addEventListener('click', () => {
  const msg = input.value.trim();
  if (msg) {
    socket.emit('message', msg); // send to server
    input.value = '';
  }
});

// Receive message from server
socket.on('message', (msg) => {
  const p = document.createElement('p');
  p.textContent = msg;
  messagesDiv.appendChild(p);
});
