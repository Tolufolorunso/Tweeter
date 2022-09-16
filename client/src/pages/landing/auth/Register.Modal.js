import AuthWrapper from './auth.styled';
import { GrClose, GrFormPreviousLink } from 'react-icons/gr';
import { useState } from 'react';
import RegisterStepOne from './Register.stepOne';
import RegisterSteptwo from './Register.stepTwo';
import RegisterStepThree from './Register.stepThree';

const RegisterModal = ({ closeModal }) => {
  const [stepOne, setStepOne] = useState(true);
  const [stepTwo, setStepTWo] = useState(false);
  const [stepThree, setStepThree] = useState(false);
  const [preStepOne, setPreStepOne] = useState(false);
  const [preStepTwo, setPreStepTwo] = useState(false);
  const [preArrow, setPreArrow] = useState(false);
  const [stepNum, setStepNum] = useState(1);
  const [stepName, setStepName] = useState('stepOne');

  const nextSlide = (stepNumber) => {
    console.log(stepNumber);

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
    console.log(stepName);

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

  return (
    <AuthWrapper>
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
          <RegisterStepOne nextSlide={nextSlide} />
        </div>
        <div
          className={`step step-2 ${stepTwo ? 'active' : ''}  ${
            preStepTwo ? 'pre' : ''
          }`}
        >
          <RegisterSteptwo nextSlide={nextSlide} />
        </div>
        <div className={`step step-3 ${stepThree ? 'active' : ''} `}>
          <RegisterStepThree />
        </div>
      </div>
    </AuthWrapper>
  );
};

export default RegisterModal;
