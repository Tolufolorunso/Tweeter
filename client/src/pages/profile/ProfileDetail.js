import { IoMdPersonAdd } from "react-icons/io";
import { useAuthContext } from "../../context/user/userContext";

import { Avater, Button, Text } from "../../components";
import { Link } from "react-router-dom";
const button = { fontWeight: 500, padding: "3px 8px" };
const avaterStyle = { height: "70px", width: "70px", marginTop: "-50px" };

const ProfileDetail = ({ user }) => {
  const { follow, following, followers,loadFollowing,loadFollowers, user: self } = useAuthContext();

  const handleFollow = () => {
    follow(user._id);
  };

  const HandleGetFollowing = () => {
    loadFollowing(user._id)
  }

  const HandleGetFollowers= () => {
    loadFollowers(user._id)
  }

  return (
    <div className="profile-detail">
      {!user ? (
        <h3>Loading</h3>
      ) : (
        <>
          <Avater style={avaterStyle} src={undefined} />
          <div className="profile-detail__content">
            <div className="content mb">
              <Text title={user?.name} tag="h3" fs={1.5} />
              <div>
                  <Text
                    title={
                      self.username === user.username
                        ? `${self.following.length} Following`
                        : `${user.following.length} Following`
                    }
                    tag="span"
                    fs={0.75}
                    style={{ marginRight: "5px",cursor: "pointer" }}
                    onClick= {HandleGetFollowing}
                  />
                <Text
                  title={
                    self.username === user.username
                      ? `${self.followers.length} Followers`
                      : `${user.followers.length} Followers`
                  }
                  tag="span"
                  fs={0.75}
                  style={{ cursor: "pointer" }}
                  onClick= {HandleGetFollowers}
                />
              </div>
            </div>
            <Text title={user?.bio || "Update your bio"} tag="p" />
          </div>
          <div className="follow-btn">
            {user._id}
            {console.log(user._id, following)}
            {user?.username === self?.username ? (
              <Link to={`/profile/${self.username}/edit`}>
                <IoMdPersonAdd />
                Edit Profile
              </Link>
            ) : (
              <Button
                icon={following.includes(user._id) ? "" : <IoMdPersonAdd />}
                text={following.includes(user._id) ? "Following" : "Follow"}
                style={button}
                onClick={handleFollow}
              />
            )}
          </div>
        </>
      )}
    </div>
  );
};

export default ProfileDetail;
