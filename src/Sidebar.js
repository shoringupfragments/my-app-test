import React from 'react';
import {
  ChakraProvider,
  Container,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Box,
  Button,
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Heading,
  VStack,
  Grid,
  theme,
  Image,
  Divider,
  useDisclosure,
  useRef,
} from '@chakra-ui/react';
import { ColorModeSwitcher } from './ColorModeSwitcher';
import { Link } from 'react-router-dom';

function App() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = React.useRef()


  return (
    <ChakraProvider theme={theme}>
      <Box textAlign="center" fontSize="xl">
        <Grid p={3}>
          <VStack spacing={8} justify='center'>
          <Button ref={btnRef} colorScheme='teal' onClick={onOpen}>
        Open
      </Button>
      <Drawer
        isOpen={isOpen}
        placement='left'
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Navigation</DrawerHeader>

          <DrawerBody> 
            <Button w="250px" variant='ghost'>
            <a href ='/quickwccalc'>Quick Word Count Calculator</a>
            </Button>
            <Button w="250px" variant='ghost'>
            <a href='/cityoflight'>City of Light</a>
            </Button>
          </DrawerBody>

        </DrawerContent>
      </Drawer>
          </VStack>
        </Grid>
      </Box>
    </ChakraProvider>
  );
}

export default App;