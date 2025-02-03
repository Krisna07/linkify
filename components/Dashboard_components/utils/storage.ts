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
export async function uploadImageToStorage(
  file: File,
  name: String,
  storageName?: string
) {
  try {
    console.log(storageName);
    const { data, error } = await supabase.storage
      .from(storageName ? storageName.toString() : "Boards")
      .upload(`${file.name}-${name}`, file, {
        cacheControl: "292500",
        contentType: file.type,
      });
    if (error) {
      return error;
    }
    return data?.path;
  } catch (error) {
    return error;
  }
}
