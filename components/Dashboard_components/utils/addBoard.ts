import { boardProps } from "./Interfaces";

export default async function AddSocial(formdata: boardProps) {
  console.log(formdata);

  // const options = {
  //   method: "POST",
  //   headers: {
  //     "Content-Type": "application/Json",
  //   },
  //   body: JSON.stringify({

  //   }),
  // };
  // const api = "/api/user/social";
  // try {
  //   const response = await fetch(api, options);
  //   const data = await response.json();

  //   if (data.status == 200) {
  //     // item(data.newAccount);
  //     console.log(data.newAccount);
  //   } else {
  //     return console.log(data.message);
  //   }
  // } catch (error) {
  //   console.log("Network error");
  // }
}
