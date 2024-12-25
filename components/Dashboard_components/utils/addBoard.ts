import { supabase } from "../../../lib/supabase";
import { NewBoardProps } from "../UI/Forms/Boardform/Boardform";
import { uploadImageToStorage } from "./storage";

export default async function AddBoard(formdata: NewBoardProps) {
  let imageurl;

  if (formdata.file) {
    const file = formdata.file;
    imageurl = await uploadImageToStorage(file, formdata.title);
    console.log(imageurl);
  }

  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/Json",
    },
    body: JSON.stringify({
      title: formdata.title,
      description: formdata.description,
      link: formdata.link,
      image: imageurl ? imageurl : "",
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
