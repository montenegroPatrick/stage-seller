import Cookies from "js-cookie"
export default async function setLike(receiver, token) {
  
    const res = await fetch('https://jsonplaceholder.typicode.com/todos/1',{
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Origin: "http://localhost:3000/",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(receiver),
    })

    if(!res.ok) {
      throw new Error('Il semble qu\'il y ait eu un problème')
    }
    return res.json().ok
}