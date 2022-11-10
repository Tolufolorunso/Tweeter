import { ProfileAside, Tweet } from "../../components";
// import { tweetData } from '../home/tweetData';
import BookmarkWrapper from "./bookmarks.styled";
import { useTweetContext } from "../../context/tweets/tweetContext";
import { useEffect, useState } from "react";
const user = JSON.parse(localStorage.getItem("user"));

const lists = ["Tweets", "Tweets & replies", "media", "Likes"];

const Bookmark = () => {
  const { getBookmarks, tweets, isLoading } = useTweetContext();
  const [selectedTab, setSelectedTab] = useState("Tweets");
  const [filteredTweets, setFilteredTweets] = useState([]);

  useEffect(() => {
    getBookmarks(user.username);
    // eslint-disable-next-line
  }, []);

  const whatToShow = (selected) => {
    selected = selected.toLowerCase()

    let tweetsArr = tweets.filter((tweet) => {
      console.log(selected)
      if (selected === "tweets") {
        return tweet
      }
      if (selected === "media") {
        console.log(tweet)
        return tweet.tweetImg;
      }
      if (selected === "likes") {
        console.log(tweet.likes)
        return tweet.likes.includes(user._id);
      }
    });

    return tweetsArr;
  };

  useEffect(() => {
    let selected = whatToShow(selectedTab);
    setFilteredTweets(selected);
  }, [selectedTab]);

  return (
    <BookmarkWrapper>
      <div className="container">
        <div className="bookmark">
          <ProfileAside
            lists={lists}
            bookmark
            selected={selectedTab}
            setSelectedTab={setSelectedTab}
          />
          <div className="bookmark__main ">
            <div className="mb-6 tweets">
              {isLoading ? (
                <div style={{ textAlign: "center", color: "green" }}>
                  <h2>Loading</h2>
                </div>
              ) : (
                filteredTweets.map((tweet) => {
                  return <Tweet tweet={tweet} key={tweet._id} />;
                })
              )}
            </div>
          </div>
        </div>
      </div>
    </BookmarkWrapper>
  );
};

export default Bookmark;
