import { object, string, number } from "yup";

export const loginSchema = object({
  emailAddress: string().required().email().label("Input"),
  password: string().min(8).required().label("Password"),
});

// export const signupSchema = object({
//   businessName: string().required(),
//   phoneNumber: number().required(),
//   emailAddress: string().email().required(),
//   password: string().min(8).required(),
// });
