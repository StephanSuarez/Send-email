import { Injectable } from '@nestjs/common';
import { Resend } from 'resend';
import { SendEmailDtoReq } from './dtos/resendEmailDtoReq';

@Injectable()
export class AppService {

  private resend = new Resend(process.env.API_KEY_RESEND);

  getHello(): string {
    return 'Hello World!';
  }

  async sendEmail(body: SendEmailDtoReq) {
    let email: string = body.email;
    let subject: string = body.subject;
    let text: string = body.text;

    const data = await this.resend.emails.send({
      from: 'onboarding@resend.dev',
      to: email,
      subject: subject,
      html: text,
    });

    return data;
  }
}
