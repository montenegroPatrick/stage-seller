/**
 * Sends a POST request to "someUrl" with the provided data.
 *
 * @param {Object} data - The data to include in the request body.
 */
export const PostFetch = async (data) => {
  await fetch("someUrl", {
    method: "POST",
    ...data,
  });
};
