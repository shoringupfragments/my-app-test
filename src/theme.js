import { extendTheme, } from '@chakra-ui/react'


const config = {
    initialColorMode: 'dark',
    useSystemColorMode: false,
  }

  const darkTheme = extendTheme({ config })

export default darkTheme