import nodemailer from "nodemailer";

 const transport = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false, // true for port 465, false for other ports
    auth: {
      user: "marketing.cumtual@gmail.com",
      pass: "bpdlwxupygymihbo",
    },
  });

  // Función para enviar un correo
  export  async function senEmailVerify(email, name) {

   // const verificationLink = `http://localhost:3000/api/auth/verify-email?token=${token}`;
     // console.log('Aqui manda el gmail', email, name,);
     // console.log(verificationLink);
      
      try {
        await transport.sendMail({
          from: '"CUMTUAL - Administrador de Proyectos" <noreply@gmail.com>',
          to: email,
          subject: 'Información sobre tu proyecto.',
          text: 'Gracias por enviar tu información, nos estaremos contactanto en cuanto se revise la información.',
          html: `
            <p>Hola ${name},</p>
            <p>Gracias por contactarnos.</p>
            <p>Tu información esta siendo revisada</p>
            <p>Si tú no creaste este lead, puedes ignorar el mensaje.</p>
            <p><img src="https://ibb.co/TLLpG5Q" alt="Imagen"></p> 
          `
        });
        console.log('Has been sent succesfully. .');
      } catch (error) {
        console.error('Error to send email.', error);
      }
    }
  