import { createTransport } from 'nodemailer';
import twilio from 'twilio';
import { ADMIN_EMAIL, ADMIN_EMAIL_PASS, TWILIO_AUTHTOKEN, TWILIO_SID } from '../config/config';

export const transporter = createTransport({
  host: 'gmail',
  port: 587,
  auth: {
    user: ADMIN_EMAIL,
    pass: ADMIN_EMAIL_PASS,
  },
});

export const twilioClient = twilio(TWILIO_SID, TWILIO_AUTHTOKEN);
