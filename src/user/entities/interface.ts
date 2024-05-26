import { Document } from 'mongoose';

export interface userinterface extends Document {
  name: string;
  password: string;
  confirmpassword: string;
  email: string;
  forgotingpassword: string;
  expiredforgotingpassword: number;
  enablestep: boolean;
  secret: string;
}
