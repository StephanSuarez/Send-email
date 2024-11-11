import { IsEmail, IsNotEmpty, IsString } from "class-validator";

export class SendEmailDtoReq {
  @IsString()
  @IsNotEmpty()
  @IsEmail()
  email: string;

  @IsString()
  @IsNotEmpty()
  subject: string;

  @IsString()
  @IsNotEmpty()
  text: string;
}
