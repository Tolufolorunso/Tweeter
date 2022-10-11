import defaultCoverImage from '../../assets/images/cover-image.jpeg';

const CoverPicture = ({ src, userName }) => {
  return (
    <div className="cover-picture">
      <img src={src || defaultCoverImage} alt={`${userName}'s cover-pic`} />
    </div>
  );
};

export default CoverPicture;
