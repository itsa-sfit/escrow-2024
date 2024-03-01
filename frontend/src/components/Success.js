import React, {useEffect} from "react";
import useUserContext from "../hooks/useUserContext";
import { serverUrl } from "../setup";

const getTime = async (user) => {
  try {
    const response = await fetch(serverUrl + "/time/sendtime", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${user.token}`,
    },
  });
  const json = await response.json();
  return json.total_time;
  } catch (e) {
    console.log(e);
  }
  
}
const Success = () => {
  const {user} = useUserContext();
  return (
    <h1 className="text-white text-2xl font-bold">
      Congratulations! You have completed the quiz in {time}
    </h1>
  );
};

export default Success;
