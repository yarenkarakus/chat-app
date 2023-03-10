import React, { useContext, useState } from "react";
import {
  collection,
  query,
  where,
  getDocs,
  setDoc,
  doc,
  updateDoc,
  serverTimestamp,
  getDoc,
} from "firebase/firestore";
import { db } from "../firebase";
import { AuthContext } from "../context/AuthContext";

const Search = () => {
  const [username, setUsername] = useState("");
  const [user, setUser] = useState(null);
  const [err, setErr] = useState(false);
  const [loading, setLoading] = useState(false);

  const { currentUser } = useContext(AuthContext);

  const handleSearch = async () => {
    setLoading(true);
    const q = query(
      collection(db, "users"),
      where("displayName", "==", username)
    );

    try {
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        setUser(doc.data());
        setErr(false);
      });
    } catch (err) {
      setErr(true);
      setLoading(false);
    }
  };

  const handleKey = (e) => {
    e.code === "Enter" && handleSearch();
  };

  const handleSelect = async () => {
    const combinedId =
      currentUser.uid > user.uid
        ? currentUser.uid + user.uid
        : user.uid + currentUser.uid;
    try {
      setErr(false);
      const res = await getDoc(doc(db, "chats", combinedId));
      if (!res.exists()) {
        await setDoc(doc(db, "chats", combinedId), { messages: [] });

        await updateDoc(doc(db, "userChats", currentUser.uid), {
          [combinedId + ".userInfo"]: {
            uid: user.uid,
            displayName: user.displayName,
            photoURL: user.photoURL,
          },
          [combinedId + ".date"]: serverTimestamp(),
        });

        await updateDoc(doc(db, "userChats", user.uid), {
          [combinedId + ".userInfo"]: {
            uid: currentUser.uid,
            displayName: currentUser.displayName,
            photoURL: currentUser.photoURL,
          },
          [combinedId + ".date"]: serverTimestamp(),
        });
      }
    } catch (err) {}
    setLoading(false);
    setErr(true);
    setUser(null);
    setUsername("");
  };
  return (
    <div className="border-b-[1px] border-b-solid border-b-cool-grey-200">
      <div className="searchform bg-indigo-900 flex flex-row shadow-inner  shadow-blue-500/50">
        <input
          className="w-full bg-transparent rounded-lg border-none text-white outline-none placeholder:text-cool-grey-100 p-2.5"
          type="text"
          placeholder="Find a user"
          onKeyDown={handleKey}
          onChange={(e) => setUsername(e.target.value)}
          value={username}
        />

        {loading && (
          <div
            className="animation m-2.5 p-2.5 animate-spin inline-block w-6 h-6 border-[3px] border-current border-t-transparent text-orange-vivid-400 rounded-full"
            role="status"
          ></div>
        )}
      </div>
      {err && <span className="text-white">User not found!</span>}

      {user && (
        <div
          className="p-2.5 flex items-center gap-2.5 text-white cursor-pointer hover:bg-indigo-900"
          onClick={handleSelect}
        >
          <img
            className="w-12 h-12 rounded-full object-cover"
            src={user.photoURL}
            alt=""
          />
          <div className="userchatinfo">
            <span>{user.displayName}</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default Search;
