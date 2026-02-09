import { useForm } from "react-hook-form"
import type { SignInFormSchema } from "../lib/types"
import { zodResolver } from "@hookform/resolvers/zod"
import { signInFormSchema } from "../lib/validations"
import { FieldGroup } from "../components/ui/field"
import InputField from "../components/fields/input.field"
import { Button } from "../components/ui/button"
import { Link } from "react-router"

export default function SignIn() {
  const signInForm = useForm<SignInFormSchema>({
    resolver: zodResolver(signInFormSchema),
    defaultValues: { email: '', password: '' }
  })

  const onSignInFormSubmit = (data: SignInFormSchema) => {
    console.log(data);
  }

  return <div className="space-y-2">
    <form id={'sign-in-form'} onSubmit={signInForm.handleSubmit(onSignInFormSubmit)}>
      <FieldGroup>
        <InputField
          name="email"
          control={signInForm.control}
          label="Email address"
          type="email"
          placeholder="Enter your email address"
          autoComplete="email"
        />

        <InputField
          name="password"
          control={signInForm.control}
          label="Password"
          type="password"
          placeholder="Enter your password"
          autoComplete="password"
        />

        <Button>Sign In</Button>
      </FieldGroup>
    </form>

    <div className="space-y-1 text-sm">
      <div className="flex items-center gap-x-2">
        <span className="text-muted-foreground">Don't have an account yet?</span>
        <Link to={'/sign-up'} className="text-primary hover:underline">Sign up</Link>
      </div>

      <Link to={'/forgot-password'} className="text-primary hover:underline">Forgot password?</Link>
    </div>
  </div>
}
