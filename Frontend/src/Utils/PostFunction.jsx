export const PostFunction = async (url, payload) => {
  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      throw new Error("Failed to post data");
    }

    return await response.json();
  } catch (error) {
    console.error("PostFunction Error:", error);
    throw error;
  }
};
