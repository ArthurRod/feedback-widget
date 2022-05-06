import nodemailer from "nodemailer";
import { MailAdapter, SendMailData } from "../mail-adapter";

const transport = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "c67b667da84f6d",
    pass: "d5d5d3bc0f1b26",
  },
});

export class NodemailerMailAdapter implements MailAdapter {
  async sendMail({subject, body}: SendMailData) {
    await transport.sendMail({
      from: "Equipe Feedget <equipe@feedget.com>",
      to: "Arthur Rodrigues <arthur9713@hotmail.com>",
      subject,
      html: body,
    });
  }
}
