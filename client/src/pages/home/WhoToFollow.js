import styled from 'styled-components';
import { Avater, Button, Text } from '../../components';
import { IoMdPersonAdd } from 'react-icons/io';
import bg from '../../assets/images/kin2.JPG';

const span = { color: '#BDBDBD', fontWeight: 500 };
const button = { fontWeight: 500, padding: '3px 8px' };

const WhoToFollows = () => {
  return (
    <li className="follow">
      <div className="follow__head">
        <Avater alt="User follow" />
        <div className="follow__title">
          <Text title="Tolulope folorunso" tag="h3" />
          <Text title="24 August at 20:43" fs="0.75" tag="span" style={span} />
        </div>
        <Button icon={<IoMdPersonAdd />} text="Folow" style={button} />
      </div>
      <Text
        title="Photographer & Filmmaker based in Copenhagen, Denmark"
        tag="p"
      />
      <div className="bg-image">
        <img src={bg} alt="user bg" />
      </div>
      <div className="line"></div>
    </li>
  );
};

const WhoToFollow = () => {
  return (
    <Wrapper>
      <Text title="Who to follow" tag="h3" style={{ color: '#4F4F4F' }} />
      <div className="line"></div>
      <ul>
        {[...new Array(2)].map((i) => {
          return <WhoToFollows />;
        })}
      </ul>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background-color: var(--clr-neutral-100);
  padding: 11px 20px;
  border-radius: 12px;
  font-family: var(--ff-secondary);
  font-size: var(--fs-12);
  margin-top: 22px;
  position: sticky;
  top: 4rem;

  .follow {
    padding-top: 20px;
    display: flex;
    flex-direction: column;
    gap: var(--fs-12);
  }

  .follow__head {
    display: flex;
    gap: var(--fs-12);
  }

  .follow__title {
    line-height: 1rem;
    display: flex;
    flex-direction: column;
    gap: 5px;
  }

  .bg-image {
    height: 6rem;
  }
  .bg-image img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 8px;
  }

  ul li:last-child {
    padding-bottom: var(--fs-12);
  }

  ul li:last-child .line {
    display: none;
  }
`;
export default WhoToFollow;
