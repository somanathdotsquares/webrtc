import React, { useState } from "react";
import Card from "../../components/shared/Card/Card";
import styles from "./Register.module.css";
import StepPhoneEmail from "../Steps/StepPhoneEmail/StepPhoneEmail";
import StepOTP from "../Steps/StepOTP/StepOTP";
import StepName from "../Steps/StepName/StepName";
import StepAvtar from "../Steps/StepAvtar/StepAvtar";
import StepUserName from "../Steps/StepUserName/StepUserName";
//use hashmap
const steps = {
  1: StepPhoneEmail,
  2: StepOTP,
  3: StepName,
  4: StepAvtar,
  5: StepUserName,
};

const Register = () => {
  const [step, setStep] = useState(1);
  const Step = steps[step];

  function onNext() {
    setStep(step + 1);
  }

  return (
    <div>
      <Step onNext={onNext} />
    </div>
  );
};

export default Register;
