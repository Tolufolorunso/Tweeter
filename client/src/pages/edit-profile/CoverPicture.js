import defaultCoverImage from '../../assets/images/cover-image.jpeg';
import './cover.css';
import { FaUpload } from 'react-icons/fa';

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
      <label htmlFor="upload" className="upload">
        <FaUpload className="icon" />
        <input type="file" name="" id="upload" />
      </label>
      {userNotFound ? (
        <div style={style}>404</div>
      ) : (
        <img src={src || defaultCoverImage} alt={`${userName}'s cover-pic`} />
      )}
    </div>
  );
};

export default CoverPicture;
