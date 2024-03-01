import React, { useEffect, useState } from "react";
import useUserContext from "../../hooks/useUserContext";
import { serverUrl } from "../../setup";

const Intro = ({ setIntro }) => {
  console.log("Intro");
  return (
    <div className="font-medium text-lg text-white">
      <h1 className="mt-2 font-bold">The End</h1>
      <h1 className="my-2 text-justify">
        With all eight clues deciphered,you race back to Hogwarts,with your
        heart pounding with excitement you follow the path laid out before you,
        eager to uncover the secrets of the hidden treasure within the castle's
        walls.and as you take the treasure you know now you will finally get to
        your world
      </h1>
      <button
        onClick={() => setIntro(false)}
        type="submit"
        className="border-2 border-white p-2 m-2 rounded-lg w-[50%] "
      >
        Next
      </button>
    </div>
  );
};

const Success = () => {
  const { user } = useUserContext();
  const [time, setTime] = useState(null);
  const [intro, setIntro] = useState(true);

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

  return intro ? (
    <Intro setIntro={setIntro} />
  ) : (
    <h1 className="text-white text-2xl font-bold">
      Congratulations! You have completed the quiz in {time}.
    </h1>
  );
};

export default Success;
