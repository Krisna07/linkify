import { supabase } from "../../../lib/supabase";

// Function to delete an image from Supabase storage
export async function deleteImageFromStorage(imagePath: string) {
  console.log(imagePath);
  try {
    const { error } = await supabase.storage.from("Boards").remove([imagePath]);
    if (error) {
      throw new Error(`Error deleting image: ${error.message}`);
    }

    return true; // Return true if deletion was successful
  } catch (error) {
    console.error("Error deleting image from storage:", error);
    return false; // Return false to indicate failure
  }
}

// Function to upload an image to Supabase storage
export async function uploadImageToStorage(file: File, name: String) {
  try {
    const { data } = await supabase.storage
      .from("Boards")
      .upload(`${file.name}-${name}`, file, {
        cacheControl: "292500",
        contentType: file.type,
      });
    return data?.path;
  } catch (error) {
    return error;
  }
}
