export default async function updateUser(id, body) {
  const res = await fetch(`url/${id}`, {
    method: "PUT",
    body: JSON.stringify(body),
  });

  return res.json();
}
