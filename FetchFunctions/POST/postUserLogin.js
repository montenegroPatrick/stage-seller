export const postUserLogin = (data) => {
  const response = fetch("http://anis-farsi-server.eddi.cloud/api/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Origin: "http://localhost:3000/",
    },
    body: JSON.stringify(data),
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error("error" + response.status);
      }
      return response.json();
    })
    .then((data) => data)
    .catch((err) => {
      console.error("erreur lors du fetch ", err);
    });
  return response;
};
