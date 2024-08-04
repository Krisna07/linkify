interface socialProps {
  username: string;
  type: string;
  icon?: string;
  color?: string;
}

export default async function AddSocial(formdata: socialProps) {
  console.log(formdata);
  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/Json",
    },
    body: JSON.stringify({
      type: formdata.type.toLowerCase(),
      username: formdata.username.toLocaleLowerCase(),
    }),
  };
  const api = "/api/user/social";
  try {
    const response = await fetch(api, options);
    const data = await response.json();

    if (data.status == 200) {
      // item(data.newAccount);
      console.log(data.newAccount);
    } else {
      return console.log(data.message);
    }
  } catch (error) {
    console.log("Network error");
  }
}
