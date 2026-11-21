import z from "zod";

export const loginUserSchema = z.object({
  email: z
    .email({ message: "Invalid email format" })
    .max(100, { message: "Email must not be more than 100 characters." }),
  password: z
    .string()
    .min(6, { message: "Password must be atleast 6 characters long." })
    .max(100, { message: "Password must not be more than 100 characters." }),
});

export const registerUserSchema = loginUserSchema.extend({
  name: z
    .string()
    .trim()
    .min(3, { message: "Message must be atleast 3 characters long." })
    .max(100, { message: "Message must not be more than 100 characters." })
});
