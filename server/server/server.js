const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

app.get('/api/login', (req, res) => {
  res.json({ 
    success: true, 
    role: 'admin',
    dashboard: 'Admin sees full HR suite!'
  });
});

app.get('/api/employee-login', (req, res) => {
  res.json({ 
    success: true, 
    role: 'employee',
    dashboard: 'Employee sees personal dashboard only!'
  });
});

app.listen(3001, () => console.log('🚀 Backend ready!'));
