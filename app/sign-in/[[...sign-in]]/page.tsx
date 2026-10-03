import { SignIn } from "@clerk/nextjs";
import { AuthLayout } from "@/components/auth/auth-layout";
import { authFormAppearance } from "@/components/auth/auth-appearance";

export default function SignInPage() {
  return (
    <AuthLayout
      title="Sign in to Ghost AI"
      subtitle="Welcome back! Please sign in to continue"
    >
      <SignIn
        path="/sign-in"
        routing="path"
        signUpUrl="/sign-up"
        forceRedirectUrl="/editor"
        appearance={authFormAppearance}
      />
    </AuthLayout>
  );
}
