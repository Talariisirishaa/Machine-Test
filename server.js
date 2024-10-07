const express = require('express');
const multer = require('multer');
const path = require('path');
const cors = require('cors');

const app = express();
app.use(cors()); 


const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/images'); 
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + path.extname(file.originalname)); 
  }
});

const upload = multer({
  storage: storage,
  limits: { fileSize: 1000000 }, 
}).single('imageFilename');


app.use('/uploads/images', express.static('uploads'));


app.use(express.json());
app.use(express.urlencoded({ extended: true }));

let employees = []; 


app.post('/Employees', (req, res) => {
  upload(req, res, (err) => {
    if (err) {
      return res.status(400).json({ error: err.message });
    }
    if (!req.file) {
      return res.status(400).json({ error: 'Image file is required.' });
    }

    const { name, email, mobile, designation, course, gender } = req.body;
    const imageFile = req.file.filename;
    console.log('File uploaded:', imageFile); 

    
    const newEmployee = {
      id: employees.length + 1, 
      name,
      email,
      mobile,
      designation,
      course,
      gender,
      imageFilename: `/uploads/${imageFile}`, 
    };

    employees.push(newEmployee);

    res.status(201).json({
      message: 'Employee created successfully!',
      employee: newEmployee,
    });
  });
});


app.get('/Employees', (req, res) => {
  res.status(200).json(employees);
});


const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

