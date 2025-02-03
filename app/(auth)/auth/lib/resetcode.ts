const sendCode = async (email: string) => {
  const response = await fetch("/api/user", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, checkUser: true }),
  });

  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData.message);
  }

  const data = await response.json();
  const id = data.id;

  if (id) {
    const response = await fetch("/api/user/verification", {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id, resetPassword: true }),
    });
    const codedata = await response.json();

    return { status: codedata.status, message: codedata.message, id: id };
  }
};

export default sendCode;
