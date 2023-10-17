// theme.ts (Version 2 needs to be a tsx file, due to usage of StyleFunctions)
import { extendTheme } from '@chakra-ui/react'


const config = {
    initialColorMode: 'dark',
    useSystemColorMode: false,
  }

  const theme = extendTheme({ config })

export default theme