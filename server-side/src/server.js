require('dotenv').config();
require('http');
const cors = require('cors')
const nodemailer = require('nodemailer');
const express = require('express');
const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors({origin: '*'}));

app.post('/enviar-correo', (req, res) => {
    const { nombre, email, mensaje } = req.body;
    const transporter = nodemailer.createTransport({
        host: process.env.SMTP_HOST,
        port: process.env.SMTP_PORT,
        secure: process.env.SMTP_SECURE == 'true',
        auth: {
            user: process.env.SMTP_USER,
            pass: process.env.SMTP_PASS
        },
    });

    const mailOptions = {
        from: process.env.SMTP_USER,
        to: process.env.MAILBOX,
        subject: 'Nuevo mensaje de contacto',
        text: `Nombre: ${nombre}\nEmail: ${email}\nMensaje: ${mensaje}`
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.error('Error al enviar el correo electrónico:', error);
            res.status(500).send(`Error al enviar el correo electrónico:${mailOptions.from}`);
        } else {
            console.log('Correo electrónico enviado:', info.response);
            res.status(200).send('Correo electrónico enviado correctamente');
        }
    });
});

app.listen(process.env.SERVER_PORT, () => {
    console.log(`Servidor Express escuchando en el puerto ${process.env.SERVER_PORT}`);
});
