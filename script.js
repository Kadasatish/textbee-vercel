const socket = io('https://socket-sms-backend.onrender.com'); // 👈 replace with your actual Render backend URL

const smsList = document.getElementById('smsList');
smsList.innerHTML = 'Connecting to server...';

socket.on('connect', () => {
  smsList.innerHTML = '';
  console.log('✅ Connected to backend via socket.io');
});

socket.on('new_sms', (msg) => {
  const li = document.createElement('li');
  li.innerHTML = `<strong>${msg.from}</strong><br>${msg.body}<br><small>${msg.timestamp}</small>`;
  smsList.prepend(li);
});
