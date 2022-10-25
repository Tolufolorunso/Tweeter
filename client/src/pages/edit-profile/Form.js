import Input from './Input';

const Form = ({ handleOnChange, userDetail, handleSubmit, isLoading }) => {
  console.log(userDetail);
  return (
    <form className="form" onSubmit={handleSubmit}>
      <div className="form__heading">
        <h3>Change Info</h3>
        <p>Changes will be reflected to every services</p>
      </div>
      <div className="profile-image">
        {userDetail.userImg ? (
          <img src={userDetail.userImg} alt="" />
        ) : (
          <p>tf</p>
        )}
      </div>
      <Input
        label="name"
        handleOnChange={handleOnChange}
        value={userDetail.name}
      />
      <Input
        label="bio"
        inputType="textarea"
        handleOnChange={handleOnChange}
        value={userDetail.bio}
      />
      <Input
        label="phone"
        inputType="number"
        handleOnChange={handleOnChange}
        value={userDetail.phone}
      />
      <Input
        label="email"
        inputType="email"
        handleOnChange={handleOnChange}
        value={userDetail.email}
      />
      <Input
        label="password"
        inputType="password"
        handleOnChange={handleOnChange}
        value={userDetail.password}
        disable
      />
      <div className="form__group">
        <button className="form__group--btn">
          {isLoading ? 'Updating' : 'Update'}
        </button>
      </div>
    </form>
  );
};

export default Form;
