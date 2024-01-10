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

    const mailOptionsToClient = {
        from: process.env.EMAIL_USER,
        to: email,
        subject: `FigesSPA - ${subject}`,
        text: `Hemos recibido tu correo, 
    te agradecemos por contactarnos,
    pronto nos estaremos comunicando contigo. \n\n
    `,
    };
    const mailOptionsToMe = {
        from: 'FIGES SPA',
        to: process.env.EMAIL_USER,
        subject: 'WEB - Nuevo mensaje de contacto desde el formulario',
        text: `Se ha recibido un nuevo correo de la pagina web Figes. \n\n
    Nombre de la persona: ${name} \n
    Telefono de contacto de la persona: ${phone} \n
    
    Se nos contacta por \n
    "${subject}" \n

    Mensaje:\n
    "${message}"

    \n
    Contactar lo antes posible a ${name}, Gracias.
        `,
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
