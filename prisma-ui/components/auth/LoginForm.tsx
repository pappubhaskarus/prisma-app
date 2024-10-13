import React from "react";
import toast from "react-hot-toast";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

function LoginForm() {
  const router = useRouter();

  const isValidEmail = (email: string) => {
    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    return emailRegex.test(email);
  };

  const handleSubmit = async (e: {
    preventDefault: () => void;
    target: { value }[];
  }) => {
    e.preventDefault();
    const email = e.target[0].value;
    const password = e.target[1].value;

    if (!isValidEmail(email)) {
      toast.error("Email is invalid");
      return;
    }

    if (!password) {
      toast.error("Password is invalid");
      return;
    }

    const res = await signIn("credentials", {
      redirect: false,
      email,
      password,
    });

    if (res?.error) {
      toast.error("Invalid email or password");
      if (res?.url) router.replace("/dashboard");
    } else {
      toast.success("Successful login");
    }
  };
  return (
    <form className="space-y-5" onSubmit={handleSubmit}>
      <div className="text-2xl font-bold font-mono">Login</div>
      <hr />
      <div className="form-control">
        <label className="label">
          <span className="label-text">Email</span>
        </label>
        <input
          type="email"
          className="input input-bordered input-primary"
          required
          autoFocus
        />
      </div>
      <div className="form-control">
        <label className="label">
          <span className="label-text">Password</span>
        </label>
        <input
          type="password"
          className="input input-bordered input-primary"
          required
        />
      </div>
      <div className="flex justify-between">
        <label className="label">
          <a href="#" className="label-text-alt link link-hover">
            Forgot password?
          </a>
        </label>
        <label className="label">
          <a href="/auth/register" className="label-text-alt link link-hover">
            Not yet registered? Sign up
          </a>
        </label>
      </div>
      <div className="form-control ">
        <button type="submit" className="btn btn-primary">
          Login
        </button>
      </div>
    </form>
  );
}

export default LoginForm;
