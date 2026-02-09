import { useForm } from "react-hook-form"
import type { SignUpFormSchema } from "../lib/types"
import { zodResolver } from "@hookform/resolvers/zod"
import { signUpFormSchema } from "../lib/validations"
import { FieldGroup } from "../components/ui/field"
import InputField from "../components/fields/input.field"
import { Button } from "../components/ui/button"
import { Link } from "react-router"

export default function SignUp() {
  const signUpForm = useForm<SignUpFormSchema>({
    resolver: zodResolver(signUpFormSchema),
    defaultValues: { fullName: '', email: '', password: '' }
  })

  const onSignUpFormSubmit = (data: SignUpFormSchema) => {
    console.log(data);

  }

  return <div className="space-y-2">
    <form id="sign-up-form" onSubmit={signUpForm.handleSubmit(onSignUpFormSubmit)}>
      <FieldGroup>
        <InputField
          name="fullName"
          control={signUpForm.control}
          label="Full name"
          placeholder="Enter your full name"
          autoComplete="name"
        />

        <InputField
          name="email"
          control={signUpForm.control}
          label="Email address"
          type="email"
          placeholder="Enter your email address"
          autoComplete="email"
        />

        <InputField
          name="password"
          control={signUpForm.control}
          label="Password"
          type="password"
          placeholder="Enter your password"
          autoComplete="password"
        />

        <Button>Sign Up</Button>
      </FieldGroup>
    </form>

    <div className="flex items-center gap-x-2 text-sm">
      <span className="text-muted-foreground">Already have an account?</span>
      <Link to={'/sign-in'} className="text-primary hover:underline">Sign in</Link>
    </div>
  </div>
}
