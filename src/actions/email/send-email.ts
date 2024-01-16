'use server'

import nodemailer from 'nodemailer';
const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD,
    },
});

interface Props {
    name: string,
    phone: string,
    message: string,
    email: string,
    subject: string,
}


//this is a server actions in nextjs 14. You can use too a api endpoint if is necessary
export const sendEmail = async ({ name, phone, message, email, subject }: Props) => {

    // throw new Error('ERROR: test de prueba')
    const mailOptionsToClient = {
        from: process.env.EMAIL_USER,
        to: email,
        subject: `FigesSPA - ${subject}`,
        html: `<p>Hemos recibido tu correo,</p>
        <p>Te agradecemos por contactarnos, pronto nos estaremos comunicando contigo.</p>
        <br />
        <p>Atentamente,</p>
        <p>El equipo de FigesSPA</p>
        `,
    };
    
    const mailOptionsToMe = {
        from: 'FIGES SPA',
        to: process.env.EMAIL_USER,
        subject: 'WEB - Nuevo mensaje de contacto desde el formulario',
        html: `<p>Se ha recibido un nuevo correo de la pagina web Figes.</p>
        <br />
        <p><strong>Nombre de la persona o empresa:</strong> ${name}</p>
        <p><strong>Telefono de contacto:</strong> ${phone}</p>
        <br />
        <p>Se nos contacta por:</p>
        <p><em>"${subject}"</em></p>
        <br />
        <p><strong>Mensaje:</strong></p>
        <p>"${message}"</p>
        <br />
        <p>Contactar lo antes posible a <strong>${name}</strong>, Gracias.</p>`,
    };
    if (email === process.env.EMAIL_USER) {
        return {
            ok: false,
            message: 'No se puede utilizar el correo FigesSPA.'
        }
    }

    try {
        // Envía el correo electrónico al cliente
        const infoClient = await transporter.sendMail(mailOptionsToClient);
        // Envía el correo electrónico a nuestra bandeja de entrada gmail
        const infoMySelf = await transporter.sendMail(mailOptionsToMe);
        return {
            ok: true,
            message: 'Correo electrónico enviado exitosamente.'
        };
    } catch (error) {
        console.error('Error al enviar el correo electrónico:', error);
        return {
            ok: false,
            message: 'Error al enviar el correo electrónico.',
        };
    }
}
