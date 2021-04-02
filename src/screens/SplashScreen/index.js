import React, { useEffect } from 'react';
import { StatusBar } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { SectionView, SectionImage } from './styles';
import Logo from '../../assets/img/Logo.png';

export const SplashScreen = () => {
  const navigator = useNavigation();

  useEffect(() => {
    setTimeout(() => {
      navigator.navigate('Home');
    }, 3000);
  }, []);

  return (
    <SectionView>
      <StatusBar translucent backgroundColor="transparent" />
      <SectionImage source={Logo} resizeMode="contain" />
    </SectionView>
  );
};
