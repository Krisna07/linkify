import { supabase } from "../../../lib/supabase";

// Function to delete an image from Supabase storage
export async function deleteImageFromStorage(
  imagePath: string,
  storageName?: string
) {
  console.log(imagePath);
  try {
    const { error } = await supabase.storage
      .from(storageName ? storageName.toString() : "Boards")
      .remove([imagePath]);
    if (error) {
      throw new Error(`Error deleting image: ${error.message}`);
    }

    return "Image deleted successfully"; // Return true if deletion was successful
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
    const { data, error } = await supabase.storage
      .from(storageName ? storageName.toString() : "Boards")
      .upload(`${file.name}-${name}`, file, {
        cacheControl: "3600",
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
