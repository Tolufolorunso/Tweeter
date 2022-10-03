import AuthWrapper from './auth.styled';
import { GrClose, GrFormPreviousLink } from 'react-icons/gr';
import { useState } from 'react';
import RegisterStepOne from './Register.stepOne';
import RegisterSteptwo from './Register.stepTwo';
import RegisterStepThree from './Register.stepThree';
import { useAuthContext } from '../../../context/auth/authContext';

const initialState = {
  username: 'tolufolorunso',
  name: 'kola jide',
  email: 'tolu@yahoo.com',
  phone: '',
  password: '12345',
  month: 'january',
  day: '20',
  year: '2006',
  calcBirthYear() {
    return `${this.day} ${this.month} ${this.year}`;
  },
};

const RegisterModal = ({ closeModal }) => {
  const [values, setValues] = useState(initialState);
  const [nameLength, setNameLength] = useState(0);
  const [usernameLength, setUsernameLength] = useState(0);

  const [stepOne, setStepOne] = useState(true);
  const [stepTwo, setStepTWo] = useState(false);
  const [stepThree, setStepThree] = useState(false);
  const [preStepOne, setPreStepOne] = useState(false);
  const [preStepTwo, setPreStepTwo] = useState(false);
  const [preArrow, setPreArrow] = useState(false);
  const [stepNum, setStepNum] = useState(1);
  const [stepName, setStepName] = useState('stepOne');
  const [emailOrPhone, setEmailOrPhone] = useState('email');

  const { isLoading, register, error } = useAuthContext();

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
    if (e.target.name === 'name') {
      setNameLength(e.target.value.length);
    }

    if (e.target.username === 'username') {
      setUsernameLength(e.target.value.length);
    }
  };

  const handleEmailPhone = () => {
    if (emailOrPhone === 'email') {
      setEmailOrPhone('phone');
      setValues({ ...values, email: '' });
    } else {
      setEmailOrPhone('email');
      setValues({ ...values, phone: '' });
    }
  };

  const editFormAgain = () => {
    setStepOne(true);
    setStepTWo(false);
    setStepThree(false);
    setStepNum(1);
    setStepName('stepOne');
    setPreArrow(false);
  };

  const nextSlide = (stepNumber) => {
    if (stepNumber === 'step-1') {
      setPreStepOne(true);
      setStepOne(false);
      setStepTWo(true);
      setPreArrow(true);
      setStepNum(stepNum + 1);
      setStepName('stepTwo');
    }
    if (stepNumber === 'step-2') {
      setPreStepTwo(true);
      // setStepOne(false);
      setStepTWo(false);
      setStepThree(true);
      setPreArrow(true);
      setStepNum(stepNum + 1);
      setStepName('stepThree');
    }
  };

  const goBack = () => {
    if (stepNum <= 1) return;

    if (stepName === 'stepTwo') {
      setStepOne(true);
      setStepTWo(false);
      setStepNum(stepNum - 1);
      setStepName('stepOne');
      setPreArrow(false);
    }
    if (stepName === 'stepThree') {
      setStepOne(false);
      setStepTWo(true);
      setStepThree(false);
      setStepNum(stepNum - 1);
      setStepName('stepTwo');
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    values.birthYear = values.calcBirthYear();
    register(values);
  };

  return (
    <AuthWrapper>
      <div>
        <div className="nav">
          {preArrow ? (
            <button className="close" onClick={goBack}>
              <GrFormPreviousLink />
            </button>
          ) : (
            <button className="close" onClick={closeModal}>
              <GrClose />
            </button>
          )}

          <span>{stepNum} of 3</span>
        </div>

        <div className="steps">
          <div
            className={`step step-1 ${stepOne ? 'active' : ''} ${
              preStepOne ? 'pre' : ''
            }`}
          >
            <RegisterStepOne
              nextSlide={nextSlide}
              nameLength={nameLength}
              usernameLength={usernameLength}
              values={values}
              handleChange={handleChange}
              handleEmailPhone={handleEmailPhone}
              emailOrPhone={emailOrPhone}
            />
          </div>
          <div
            className={`step step-2 ${stepTwo ? 'active' : ''}  ${
              preStepTwo ? 'pre' : ''
            }`}
          >
            <RegisterSteptwo nextSlide={nextSlide} />
          </div>
          <div className={`step step-3 ${stepThree ? 'active' : ''} `}>
            <RegisterStepThree
              goBack={goBack}
              setStepName={setStepName}
              editFormAgain={editFormAgain}
              values={values}
              handleSubmit={handleSubmit}
              handleChange={handleChange}
              isLoading={isLoading}
              error={error}
            />
          </div>
        </div>
      </div>
    </AuthWrapper>
  );
};

export default RegisterModal;
