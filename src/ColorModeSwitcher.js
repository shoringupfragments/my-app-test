import React from 'react';
import { useColorMode, useColorModeValue, Button } from '@chakra-ui/react';
import { FaMoon, FaSun } from 'react-icons/fa';

const config: ThemeConfig = {
  initialColorMode: 'dark', // 'dark' | 'light'
}

export const ColorModeSwitcher = props => {
  const { toggleColorMode } = useColorMode();
  const text = useColorModeValue('light', 'dark');
  const SwitchIcon = useColorModeValue(FaSun, FaMoon);


  return (
    <Button
      size="md"
      fontSize="lg"
      aria-label={`Switch to ${text} mode`}
      variant="ghost"
      color="current"
      marginLeft="2"
      onClick={toggleColorMode}
      rightIcon={<SwitchIcon />}
      {...props}>
        Toggle color mode </Button>
  );
};
