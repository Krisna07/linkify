import { boardProps } from "./Interfaces";

export default async function AddBoard(formdata: boardProps) {
  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/Json",
    },
    body: JSON.stringify({
      title: formdata.title,
      description: formdata.description,
      link: formdata.link,
      image: formdata.image,
      tags: formdata.tags,
    }),
  };
  const api = "/api/user/boards";
  try {
    const response = await fetch(api, options);
    const data = await response.json();
    return data;
  } catch (error) {
    console.log("Network error");
  }
}
