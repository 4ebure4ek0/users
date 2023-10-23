import { useEffect, useState } from "react";
import "./app.scss";
import User from "./components/user/user";
import axios from "axios";

interface IUser {
  name: string;
  phone: string;
  email: string;
  address: string;
  position_name: string;
  department: string;
  hire_date: string;
}

function App() {
  const [users, setUsers] = useState<Array<IUser>>([]);
  const [search, setSearch] = useState<string | number | readonly string[] | undefined>('')

  useEffect(() => {
    axios.get(`http://127.0.0.1:3000/?term=${search}`)
    .then(res => setUsers(res.data))
  }, [search]);
  return (
    <div className="container">
      <div className="search">
        <input type="text" value={search} className="search_input" onInput={(e:React.ChangeEvent<HTMLInputElement>) => setSearch(e.target.value)}/>
        <img src="/img/glass.png" alt="search" />
      </div>
      <div className="users">
        {users.map((user, i) => (
          <User key={i} user={user}/>
        ))}
      </div>
    </div>
  );
}

export default App;
