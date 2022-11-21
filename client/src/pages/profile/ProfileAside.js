import React, { useState } from 'react';

const lists = ['Tweets', 'Tweets & replies', 'media', 'Likes'];

const ProfileAside = () => {
  const [active, setActive] = useState('Tweets');

  return (
    <aside className="aside bg-white">
      <ul className="aside__lists">
        {lists.map((li,index) => {
          return (
            <li
              className={active === li ? 'aside__active' : undefined}
              onClick={() => setActive(li)}
              key={index}
            >
              {li}
            </li>
          );
        })}
      </ul>
    </aside>
  );
};

export default ProfileAside;
