import { useNavigation } from '@react-navigation/native';
import { TouchableOpacity, View } from 'react-native';

// CONTEXT
import { useThemeMode } from '../../context/ThemeContext';

import * as Styles from './styles';
import { IconArrowLeft, IconBars } from '../icons';

interface HeaderProps {
  title?: string;
  screen?: string;
  theme: 'light' | 'dark';
}

export default function Header({ title, screen, theme }: HeaderProps) {
  const { goBack } = useNavigation();

  return (
    <Styles.SectionHeader>
      {screen !== 'Home' ? (
        <TouchableOpacity onPress={() => goBack()}>
          <IconArrowLeft strokeWidth={1} color="#000" size={32} />
        </TouchableOpacity>
      ) : (
        <View />
      )}

      <TouchableOpacity>
        <Styles.TitleHeader theme={theme}>{title}</Styles.TitleHeader>
      </TouchableOpacity>

      <TouchableOpacity>
        <IconBars strokeWidth={2} color="#000" size={32} />
      </TouchableOpacity>
    </Styles.SectionHeader>
  );
}
