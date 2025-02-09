// import { NewBoardProps } from "../UI/Forms/Boardform/Boardform";
// import { newBoardFormData } from "../../../app/(dashboard)/dashboard/projects/[project]/newboard/page";
import { newBoardFormData } from "../../../app/(dashboard)/dashboard/projects/[project]/newboard/page";
import { boardProps } from "./Interfaces";

export default async function AddBoard(formdata: newBoardFormData) {
  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/Json",
    },
    body: JSON.stringify({
      formdata,
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
