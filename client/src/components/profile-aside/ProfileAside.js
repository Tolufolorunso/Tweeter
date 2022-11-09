import React, { useState } from 'react';

const ProfileAside = ({ lists,selected,setSelectedTab }) => {

  return (
    <aside className="aside bg-white">
      <ul className="aside__lists">
        {lists.map((list) => {
          return (
            <li
              className={selected === list ? 'aside__active' : undefined}
              onClick={() => setSelectedTab(list)}
              key={list}
            >
              {list}
            </li>
          );
        })}
      </ul>
    </aside>
  );
};

export default ProfileAside;
