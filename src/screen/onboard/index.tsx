// IMPORTS
import { useState } from 'react';

// SERVICES
import { useThemeMode } from '../../context/ThemeContext';
import { useOnboard } from '../../hook/Onboard';

//  COMPONENTS
import { TouchableOpacity } from 'react-native';
import OnboardStep1 from './step1';
import OnboardStep2 from './step2';
import OnboardStep3 from './step3';

// STYLES COMPONENTS
import * as Styles from './styles';
import { IconArrowLeft, IconArrowRight } from '../../components/icons';

export default function OnboardScreen() {
  const { theme } = useThemeMode();
  const { stepCurrent, HandleBackStep, HandleSkipStep, handleNextStep } = useOnboard();

  const RenderOnboardStep = ({ step }: { step: number }) => {
    switch (step) {
      case 1:
        return <OnboardStep1 />;
      case 2:
        return <OnboardStep2 />;
      case 3:
        return <OnboardStep3 />;
    }
  };

  return (
    <Styles.Container>
      <Styles.SectionHeader>
        {stepCurrent !== 3 && (
          <>
            {stepCurrent !== 1 && (
              <TouchableOpacity onPress={HandleBackStep}>
                <IconArrowLeft strokeWidth={1} color="#000" size={32} />
              </TouchableOpacity>
            )}

            <TouchableOpacity onPress={HandleSkipStep}>
              <Styles.TitleHeader theme={theme}>Skip</Styles.TitleHeader>
            </TouchableOpacity>

            <TouchableOpacity onPress={handleNextStep}>
              <IconArrowRight strokeWidth={1} color="#000" size={32} />
            </TouchableOpacity>
          </>
        )}
      </Styles.SectionHeader>

      <RenderOnboardStep step={stepCurrent} />

      {stepCurrent !== 3 && (
        <Styles.SectionSteps>
          {Array.from({ length: 3 }).map((_, index) => (
            <Styles.ViewStep
              key={index}
              size={index + 1 === stepCurrent ? 36 : 6}
              color={index + 1 === stepCurrent ? '#de7773' : '#9D9D9D'}
            />
          ))}
        </Styles.SectionSteps>
      )}
    </Styles.Container>
  );
}
