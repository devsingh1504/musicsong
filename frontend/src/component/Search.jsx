import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchData } from "../../utils/spotify-Api";
import Sidebar from "./Sidebar";
import SearchCard from "./SearchCard";

export default function Search() {
  const [result, setResult] = useState();
  const { searchQuery } = useParams();

  useEffect(() => {
    fetchSearchResults();
  }, [searchQuery]);

  const fetchSearchResults = () => {
    fetchData(`/search?q=${searchQuery}`).then(({ res }) => {
      console.log(res);
      setResult(res);
    });
  };

  return (
    <>
      <div className="mt-32">
        <div className="flex flex-row h-[calc(100%-56px)]">
          <Sidebar />
          <div className="h-[calc(100vh-6.625rem)] overflow-y-scroll overflow-x-hidden">
            <div className="grid grid-cols-1 gap-2 p-2">
              {result.map((item) => {
                <SearchCard item={item} key={item.id} />;
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
