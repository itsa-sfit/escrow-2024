import React, { useEffect, useState } from "react";
import useUserContext from "../hooks/useUserContext";
import { serverUrl } from "../setup";

const Success = () => {
  const { user } = useUserContext();
  const [time, setTime] = useState(null);

  useEffect(() => {
    const fetchTime = async () => {
      try {
        const response = await fetch(serverUrl + "/time/sendtime", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${user.token}`,
          },
        });
        const json = await response.json();
        setTime(json.total_time);
      } catch (error) {
        console.error("Error fetching time:", error);
      }
    };

    fetchTime();
  }, [user.token]);

  return (
    <h1 className="text-white text-2xl font-bold">
      Congratulations! You have completed the quiz in {time}.
    </h1>
  );
};

export default Success;
