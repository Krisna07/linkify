import { supabase } from "../../../lib/supabase";
import { newBoardProps } from "../UI/Forms/NewBoardForm";

export default async function AddBoard(formdata: newBoardProps) {
  let imageurl;

  if (formdata.file) {
    const file = formdata.file;
    const { data } = await supabase.storage
      .from("Boards")
      .upload(`${file.name}-${formdata.title}`, file, {
        cacheControl: "292500",
        contentType: file.type,
      });
    imageurl = data?.path;
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
