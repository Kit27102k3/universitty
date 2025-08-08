import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";

export type UserDocument = User & Document;

@Schema({
  timestamps: true,
})
export class User {
  @Prop({ required: true, unique: true })
  fullName: string;

  @Prop({ required: true, unique: true })
  email: string;

  @Prop({ required: true })
  password: string;

  @Prop({ enum: ["admin", "student", "teacher"] })
  role: string;

  @Prop({ required: true })
  avatar: string;

  @Prop({ required: true })
  phone: string;

  @Prop({ required: true })
  address: string;

  @Prop({ enum: ["male", "female", "other"] })
  gender: string;

  @Prop({ required: true })
  dateOfBirth: string;

  @Prop({ required: true })
  dateOfJoin: string;

  @Prop({ required: true })
  dateOfLeave: string;

  @Prop({ enum: ["active", "inactive"] })
  status: string;

  @Prop({ required: true })
  isActive: boolean;

  @Prop({ required: true })
  isDeleted: boolean;

  @Prop({ required: true })
  deletedAt: string;

  @Prop({ required: true })
  createdAt: string;

  @Prop({ required: true })
  updatedAt: string;
}

export const UserSchema = SchemaFactory.createForClass(User);
