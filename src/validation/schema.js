import { object, string, number, ref } from "yup";

export const loginSchema = object({
  emailAddress: string().required().email().label("Input"),
  password: string().min(8).required().label("Password"),
});

export const signupSchema = object({
  businessName: string().required().min(4).label("Business Name"),
  phoneNumber: number().required().label("Phone Number"),
  emailAddress: string().email().required().label("Input"),
  password: string().min(8).required().label("Password"),
  passwordConfirm: string()
    .min(8)
    .required()
    .oneOf([ref("password"), null], "Passwords must match")
    .label("Confirm Password"),
});
