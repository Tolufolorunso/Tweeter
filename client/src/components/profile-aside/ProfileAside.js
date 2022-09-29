import React, { useState } from 'react';

const ProfileAside = ({ lists }) => {
  const [active, setActive] = useState('Tweets');

  return (
    <aside className="aside bg-white">
      <ul className="aside__lists">
        {lists.map((li) => {
          return (
            <li
              className={active === li ? 'aside__active' : undefined}
              onClick={() => setActive(li)}
              key={li}
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
