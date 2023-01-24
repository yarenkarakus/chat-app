import React from "react";

const Search = () => {
  return (
    <div className="border-b-[1px] border-b-solid border-b-cool-grey-200">
      <div className="searchform bg-indigo-900">
        <input
          className="w-full bg-transparent shadow-inner rounded-lg  shadow-blue-500/50 border-none  text-white outline-none placeholder:text-cool-grey-100 p-2.5"
          type="text"
          placeholder="Find a user"
        />
      </div>
      <div className="p-2.5 flex items-center gap-2.5 text-white cursor-pointer hover:bg-indigo-900">
        <img
          className="w-12 h-12 rounded-full object-cover"
          src="https://images.pexels.com/photos/14270561/pexels-photo-14270561.jpeg?auto=compress&cs=tinysrgb&w=300&lazy=load"
          alt=""
        />
        <div className="userchatinfo">
          <span>Jane</span>
        </div>
      </div>
    </div>
  );
};

export default Search;
