import { SignUp } from "@clerk/nextjs";
import { AuthLayout } from "@/components/auth/auth-layout";
import { authFormAppearance } from "@/components/auth/auth-appearance";

export default function SignUpPage() {
  return (
    <AuthLayout
      title="Create your Ghost AI account"
      subtitle="Start designing systems at the speed of thought"
    >
      <SignUp
        path="/sign-up"
        routing="path"
        signInUrl="/sign-in"
        forceRedirectUrl="/editor"
        appearance={authFormAppearance}
      />
    </AuthLayout>
  );
}
