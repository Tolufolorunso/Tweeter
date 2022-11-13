import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";
import Avater from "../Avater";
import Text from "../Text";

const span = {
  fontWeight: 500,
  fontSize: "0.65rem",
  lineHeight: "16px",
  letterSpacing: "-0.035em",
  color: "#BDBDBD",
};

const para = {
  fontWeight: 300,
  fontSize: "0.8rem",
  lineHeight: 1.3,
  marginTop: "5px",
};

const RepliesList = ({ comment }) => {
  return (
    <div className="user-reply gap-small">
      <Avater />
      <div className="message">
        <div className="flex gap-small">
          <Text
            title="developer_tolu"
            tag="h3"
            style={{ lineHeight: "16px", letterSpacing: "-0.035em" }}
          />
          <Text title="24 August at 20:43" tag="span" style={span} />
        </div>
        <Text title={comment.tweetText} style={para} />
      </div>
    </div>
  );
};

const Replies = ({ comments, id, username }) => {
  const location = useLocation();
  const path = location.pathname.includes("posts");
  const commentsArr = path ? [...comments].reverse() : [...comments].reverse().splice(0, 3) 
  return (
    <Wrapper>
      {
        commentsArr.map((comment) => {
          return <RepliesList comment={comment} key={comment._id} />;
        })}
      {comments.length > 3 && !path ? (
        <Link to={`/${username}/posts/${id}`}>More comments...</Link>
      ) : null}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  .message {
    background-color: #fafafa;
    padding: 10px 1rem;
    border-radius: 8px;
    width: 100%;
  }
  .user-reply {
    display: flex;
    align-items: center;
  }
`;

export default Replies;
