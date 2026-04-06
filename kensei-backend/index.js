require('dotenv').config();
const express = require('express');
const cors = require('cors');
app.use(cors()); // Esto abre la puerta para que Netlify pueda hablar con Render sin problemas.
const mongoose = require('mongoose');
const nodemailer = require('nodemailer');

const app = express();
const PORT = process.env.PORT || 3000;

// 1. CONEXIÓN DB
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('✅ MongoDB Conectado'))
  .catch(err => console.error('❌ Error Mongo:', err));

const Contacto = mongoose.model('Contacto', new mongoose.Schema({
  nombre: String, email: String, mensaje: String, fecha: { type: Date, default: Date.now }
}));

app.use(cors());
app.use(express.json());

// 2. NODEMAILER (ZOHO)
const transporter = nodemailer.createTransport({
  host: "smtp.zoho.com", port: 587, secure: false,
  auth: { user: process.env.EMAIL_USER, pass: process.env.EMAIL_PASS },
  tls: { rejectUnauthorized: false }
});

// 3. ENVIAR CONSULTA
app.post('/api/contacto', async (req, res) => {
  try {
    const { nombre, email, mensaje } = req.body;
    const nuevo = new Contacto({ nombre, email, mensaje });
    await nuevo.save();
    
    const mailAviso = { from: process.env.EMAIL_USER, to: process.env.EMAIL_USER, subject: `🚀 Lead Kensei: ${nombre}`, html: `<p><b>Mensaje:</b> ${mensaje}</p>` };
    const mailCliente = { from: `"Kensei Way" <${process.env.EMAIL_USER}>`, to: email, subject: `Confirmación Kensei`, html: `<h3>Hola ${nombre}</h3><p>Recibimos tu consulta.</p>` };
    
    await Promise.all([transporter.sendMail(mailAviso), transporter.sendMail(mailCliente)]);
    res.status(200).send('OK');
  } catch (error) { res.status(500).send('Error'); }
});

// 4. LISTAR CONSULTAS (ADMIN)
app.get('/api/contactos', async (req, res) => {
  if (req.headers['authorization'] !== process.env.ADMIN_PASSWORD) return res.status(401).send('No autorizado');
  const contactos = await Contacto.find().sort({ fecha: -1 });
  res.json(contactos);
});

// 5. BORRAR CONSULTA (Ruta Directa)
app.get('/api/contactos/borrar/:id', async (req, res) => {
  try {
    if (req.headers['authorization'] !== process.env.ADMIN_PASSWORD) return res.status(401).send('No autorizado');
    await Contacto.findByIdAndDelete(req.params.id);
    res.status(200).send('Borrado');
  } catch (error) { res.status(500).send('Error'); }
});

app.listen(PORT, () => console.log(`🚀 Kensei Backend en puerto ${PORT}`));