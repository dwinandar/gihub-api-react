import { useEffect, useState } from "react";
import SearchForm from "./components/SearchForm";
import CardUser from "./components/CardUser";
import { useDebounce } from "use-debounce";

const API_URL = "https://api.github.com/users/";

function App() {
  const [dataUser, setDataUser] = useState([]);
  const [repoUser, setRepoUser] = useState([]);
  const [isLoading, setIsloading] = useState(false);
  const [isError, setIsError] = useState("");
  const [userSearch, setUserSearch] = useState("");
  const controller = new AbortController();

  const [debounceValue] = useDebounce(userSearch, 2000);

  useEffect(() => {
    async function fetchUserGithub() {
      try {
        if (userSearch) {
          setIsloading(true);
          setIsError("");
          const response = await fetch(`${API_URL}${userSearch}`, {
            signal: controller.signal,
          });
          if (response.status === 404)
            return setIsError("User Tidak Ditemukan");
          const data = await response.json();
          setDataUser(data);
        }
      } catch (error) {
        console.error("Error fetching user data:", error);
      } finally {
        setIsloading(false);
      }
    }

    async function fetchRepoUser() {
      try {
        if (userSearch) {
          setIsloading(true);
          const response = await fetch(
            `https://api.github.com/users/${userSearch}/repos`,
            {
              signal: controller.signal,
            },
          );
          if (!response.ok) return;
          const data = await response.json();
          setRepoUser(data);
        }
      } catch (error) {
        console.error("Error fetching user repo:", error);
      } finally {
        setIsloading(false);
      }
    }

    fetchUserGithub();
    fetchRepoUser();

    return () => {
      controller.abort();
    };
  }, [debounceValue]);

  return (
    <main className='w-full min-h-screen flex items-center flex-col'>
      <SearchForm user={userSearch} setUser={setUserSearch} />

      {isLoading ? (
        <span className='loading loading-ring loading-lg mt-5'></span>
      ) : isError ? (
        <h1 className='text-xl mt-5'>{isError}</h1>
      ) : (
        <CardUser dataUser={dataUser} repoUser={repoUser} />
      )}
    </main>
  );
}

export default App;
