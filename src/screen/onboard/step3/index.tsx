// IMPORTS
import { useNavigation } from '@react-navigation/native';
// SERVICES

//  COMPONENTS

// STYLES COMPONENTS
import * as Styles from './styles';
import LogoSvg from '../../../assets/svg/Logo';
import Images from '../../../assets/images';

export default function OnboardStep3() {
  const { navigate } = useNavigation();

  return (
    <Styles.Section>
      <Styles.SectionHeader>
        <LogoSvg />
        <Styles.Title>EASY BOOK</Styles.Title>
      </Styles.SectionHeader>

      <Styles.ImageBook source={Images.books} height={400} />

      <Styles.SectionText>
        <Styles.SubTitle>Learn Smartly</Styles.SubTitle>
        <Styles.Text>
          It’s 2022 and it’s time to learn every quickly and smartly. All books are storage in cloud and you can access
          all of them from your laptop or PC.{' '}
        </Styles.Text>

        <Styles.Btn onPress={() => navigate('Home')}>
          <Styles.BtnText>Get Started Now</Styles.BtnText>
        </Styles.Btn>
      </Styles.SectionText>
    </Styles.Section>
  );
}
