import { useState } from "react";
import SearchForm from "./components/SearchForm";
import CardUser from "./components/CardUser";

const API_URL = "https://api.github.com/users/";

function App() {
  const [dataUser, setDataUser] = useState([]);
  const [repoUser, setRepoUser] = useState([]);
  const [user, setUser] = useState("");

  async function fetchUserGithub(user) {
    const response = await fetch(`${API_URL}${user}`);
    const data = await response.json();
    setDataUser(data);
  }

  async function fetchRepoUser(user) {
    const response = await fetch(`https://api.github.com/users/${user}/repos`);
    const data = await response.json();
    setRepoUser(data);
  }

  function handleSubmit(e) {
    e.preventDefault();

    fetchUserGithub(user);
    fetchRepoUser(user);

    setUser("");
  }

  return (
    <main className='w-full min-h-screen flex items-center flex-col'>
      <SearchForm onSubmit={handleSubmit} user={user} setUser={setUser} />

      <CardUser dataUser={dataUser} repoUser={repoUser} />
    </main>
  );
}

export default App;
