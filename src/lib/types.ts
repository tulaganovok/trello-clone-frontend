import { z } from "zod";
import { signInFormSchema, signUpFormSchema } from "./validations";

type SignInFormSchema = z.infer<typeof signInFormSchema>;
type SignUpFormSchema = z.infer<typeof signUpFormSchema>;

export { type SignInFormSchema, type SignUpFormSchema };
