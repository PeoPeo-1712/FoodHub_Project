import { useEffect, useState } from "react";

export default function App() {
  const [msg, setMsg] = useState("");

  useEffect(() => {
    const apiUrl = import.meta.env.VITE_API_URL || "/api";
    fetch(`${apiUrl}/hello`)
      .then((res) => res.json())
      .then((data) => setMsg(data.message));
  }, []);

  return <div>{msg}</div>;
}