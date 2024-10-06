import { ConflictException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from './user.schema';
import * as bcrypt from 'bcryptjs';

@Injectable()
export class UsersService {
  constructor(@InjectModel('User') private userModel: Model<User>) {}

  async register(name: string, email: string, password: string): Promise<User> {
    const userExist = await this.userModel.findOne({ email });
    if (userExist) {
      throw new ConflictException('A user with this email already exist');
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new this.userModel({name, email, password: hashedPassword });
    return newUser.save();
  }

  async findUserByEmail(email: string,): Promise<User> {
    return this.userModel.findOne({email})
  }
}
