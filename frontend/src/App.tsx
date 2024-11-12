import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";

function App() {
  const [data, setData] = useState<{ message: string }>({ message: "" });
  useEffect(() => {
    axios
      .get("http://localhost:3000/")
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
    console.log("Hello world");
  }, []);
  return <h1>{data.message}</h1>;
}

export default App;
