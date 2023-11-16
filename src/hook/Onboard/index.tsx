// IMPORTS
import { useState } from 'react';
import { useNavigation } from '@react-navigation/native';

export function useOnboard() {
  const { navigate } = useNavigation();

  const [stepCurrent, setStepCurrent] = useState(1);

  function handleNextStep() {
    setStepCurrent(stepCurrent + 1);
  }

  function HandleBackStep() {
    setStepCurrent(stepCurrent - 1);
  }

  function HandleSkipStep() {
    navigate('Home');
  }

  return {
    stepCurrent,

    handleNextStep,
    HandleBackStep,
    HandleSkipStep,
  };
}
