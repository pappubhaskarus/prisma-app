import React from "react";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

function RegisterForm() {
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

    try {
      const res = await fetch("/api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          password,
        }),
      });
      if (res.status === 400) {
        toast.error("This email is already registered");
      }
      if (res.status === 200) {
        toast.success("Registration successful");
        router.push("/auth/login");
      }
    } catch (error) {
      toast.error("Error, try again");
      console.log(error);
    }
  };
  return (
    <form className="space-y-5" onSubmit={handleSubmit}>
      <div className="text-2xl font-bold font-mono">Register</div>
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
          <button type="submit" className="btn btn-primary">
            Sign up
          </button>
        </label>
        <label className="label">
          <a href="/auth/login" className="label-text-alt link link-hover">
            Already registered? Login
          </a>
        </label>
      </div>
    </form>
  );
}

export default RegisterForm;
