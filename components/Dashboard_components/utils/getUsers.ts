const getUser = async () => {
  try {
    const response = await fetch("/api/user");

    // Check if the response status is OK
    if (!response.ok) {
      throw new Error(`Error: ${response.status} ${response.statusText}`);
    }

    // Parse the JSON response
    const data = await response.json();

    // Log the data
    return data.user;
  } catch (err) {
    // Log any errors that occurred
    console.error("An error occurred:", err);
  }
};

export default getUser;
