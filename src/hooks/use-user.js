import { useState, useEffect } from "react";
import UserContext from "../context/user";
import { getUserByUserId } from "../services/firebase";

export default function useUser(userId) {
  const [activeUser, setActiveUser] = useState({});

  useEffect(() => {
    async function getUserObjByUserId(userId) {
      //we need a function we can call (firebase service) that gets the user data based on the id
      const [user] = await getUserByUserId(userId);
      setActiveUser(user || {});
    }
    if (userId) {
      getUserObjByUserId(userId);
    }
  }, [userId]);

  return { user: activeUser };
}
