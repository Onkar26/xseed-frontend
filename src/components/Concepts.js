import React, { useRef, useEffect, useState } from "react";
import axios from "axios";

export default function InfiniteScrollInSection() {
  const sectionRef = useRef(null);
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [pageNumber, setPageNumber] = useState(1);

  const loadData = async () => {
    try {
      const res = await axios.get(
        `https://catfact.ninja/facts?page=${pageNumber}&limit=${15}`
      );
      return res.data.data.map((b) => b.fact);
    } catch (error) {
      setError(true);
      setLoading(false);
      console.error(error);
    }
  };

  const handleScroll = () => {
    const { scrollTop, clientHeight, scrollHeight } = sectionRef.current;
    if (scrollTop + clientHeight >= scrollHeight - 10) {
      setPageNumber((prevPageNumber) => prevPageNumber + 1);
    }
  };

  useEffect(() => {
    setLoading(true);
    const fetchData = async () => {
      const newData = await loadData();
      setData((prevData) => [...prevData, ...newData]);
      setLoading(false);
    };

    fetchData();
  }, [pageNumber]);

  useEffect(() => {
    const sectionElement = sectionRef.current;
    sectionElement.addEventListener("scroll", handleScroll);
    return () => {
      sectionElement.removeEventListener("scroll", handleScroll);
    };
  }, [sectionRef]);

  return (
    <div style={{ height: "440px", overflowY: "auto" }} ref={sectionRef}>
      <div style={{ minHeight: "1000px" }}>
        {data.map((val, index) => (
          <div key={index}>{val}</div>
        ))}
        {loading && <div>Loading...</div>}
        {error && <div>Error</div>}
      </div>
    </div>
  );
}
