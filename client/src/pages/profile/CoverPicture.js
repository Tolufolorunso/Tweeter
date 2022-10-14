import defaultCoverImage from '../../assets/images/cover-image.jpeg';

let style = {
  display: 'grid',
  placeItems: 'center',
  height: '100%',
  color: 'white',
  backgroundColor: 'black',
};

const CoverPicture = ({ src, userName, userNotFound }) => {
  return (
    <div className="cover-picture">
      {userNotFound ? (
        <div style={style}>404</div>
      ) : (
        <img src={src || defaultCoverImage} alt={`${userName}'s cover-pic`} />
      )}
    </div>
  );
};

export default CoverPicture;
