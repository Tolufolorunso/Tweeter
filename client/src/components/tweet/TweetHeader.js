import Avater from '../Avater';
import Text from '../Text';
import DefaultAvater from '../../assets/images/defaultAvater.png';

const span = { color: '#BDBDBD', fontWeight: 500 };

const TweetHeader = ({ AvaterImage, userInfo }) => {
  return (
    <header className="header">
      <Avater src={AvaterImage || DefaultAvater} alt="tolulope folorunso" />
      <div className="header__title">
        <Text title="Tolulope folorunso" tag="h3" />
        <Text title="24 August at 20:43" fs="0.75" tag="span" style={span} />
      </div>
    </header>
  );
};

export default TweetHeader;
