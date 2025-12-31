import mongoose from 'mongoose';
const { Schema } = mongoose;

const employeeSchema = new Schema({
  name: String,
  salary: Number,
  language: String,
  city: String,
  isManager: Boolean
});

export const Employee = mongoose.model('Employee', employeeSchema);
