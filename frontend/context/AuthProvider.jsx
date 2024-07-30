// AuthProvider.js
import { createContext, useEffect, useState, useContext } from "react";
import { fetchData } from "../utils/spotify-Api";

export const AuthContext = createContext();

export default function AuthProvider({ children }) {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const [value, setValue] = useState("New");

  useEffect(() => {
    fetchAlldata(value);
  }, [value]);

  const fetchAlldata = async (query) => {
    setLoading(true);
    try {
      const res = await fetchData(query);
      setData(res.data.tracks.items);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.log("error fetching api data:", error);
    }
  };

  return (
    <AuthContext.Provider value={{ loading, data, setValue }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);
