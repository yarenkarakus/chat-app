import React, { useState } from "react";
import Add from "../img/addAvatar.png";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth, db, storage } from "../firebase";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { doc, setDoc } from "firebase/firestore";
import { useNavigate, Link } from "react-router-dom";

const Register = () => {
  const [err, setErr] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    setLoading(true);
    e.preventDefault();
    const displayName = e.target[0].value;
    const email = e.target[1].value;
    const password = e.target[2].value;
    const file = e.target[3].files[0];

    try {
      const res = await createUserWithEmailAndPassword(auth, email, password);

      const storageRef = ref(storage, `${displayName + date}`);

      const date = new Date().getTime();

      await uploadBytesResumable(storageRef, file).then(() => {
        getDownloadURL(storageRef).then(async (downloadURL) => {
          try {
            //Update profile
            await updateProfile(res.user, {
              displayName,
              photoURL: downloadURL,
            });
            //create user on firestore
            await setDoc(doc(db, "users", res.user.uid), {
              uid: res.user.uid,
              displayName,
              email,
              photoURL: downloadURL,
            });

            //create empty user chats on firestore
            await setDoc(doc(db, "userChats", res.user.uid), {});
            navigate("/");
          } catch (err) {
            console.log(err);
            setErr(true);
            setLoading(false);
          }
        });
      });
    } catch (err) {
      setErr(true);
      setLoading(false);
    }
  };

  return (
    <div className=" h-screen flex items-center justify-center">
      <div className="bg-cool-grey-050  py-5 px-14 rounded-xl flex flex-col gap-2.5 items-center ">
        <h1 className="  font-bold text-2xl">Gossip Chat</h1>
        <h3 className="  text-xl">Register</h3>
        <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
          <input className="input" type="text" placeholder="Name" />
          <input className="input" type="email" placeholder="Email" />
          <input className="input" type="password" placeholder="Password" />
          <input
            className="input"
            style={{ display: "none" }}
            type="file"
            id="file"
          />
          <label
            className="flex items-center gap-2.5  text-xs cursor-pointer"
            htmlFor="file"
          >
            <img className="w-10" src={Add} alt="Add" />
            <span> Add an avatar</span>
          </label>

          <button
            className="bg-indigo-600 flex items-center justify-center gap-1 text-white p-2.5 font-bold cursor-pointer rounded-lg hover:bg-indigo-400 "
            disabled={loading}
          >
            <div className="w-4 h-4 border-b-2 border-b-white animate-spin rounded-full"></div>
            Sign up
          </button>
          {loading && "Uploading and compressing the image please wait..."}
          {err && <span>Something went wrong</span>}
        </form>

        <p className=" text-xs mt-2.5">
          You do have an account? <Link to="/login">Login</Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
