import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";

interface newUser {
  username: string;
  email: string;
  password: string;
}

export default async function CreateUser(formData: newUser) {
  const route = useRouter();
  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/Json",
    },
    body: JSON.stringify({
      username: formData.username.toLowerCase(),
      email: formData.email.toLocaleLowerCase(),
      password: formData.password,
    }),
  };
  const api = "/api/user";
  toast.loading("Creating user......");
  const response = await fetch(api, options);
  response && toast.dismiss();
  const data = await response.json();

  if (data.status === 200) {
    toast.success(`${data.message} "Logging in "`);
    const logInData = await signIn("credentials", {
      email: formData.email.toLocaleLowerCase(),
      password: formData.password,
      redirect: false,
    });
    if (logInData?.error) {
      return toast.error("Credentials do not match");
    } else {
      route.refresh();
      route.push("/dashboard");
    }
  } else {
    toast.error(data.message);
    return;
  }
}
