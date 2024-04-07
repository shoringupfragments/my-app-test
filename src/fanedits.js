import React from 'react';
import { useState,useEffect } from "react";
import {
  ChakraProvider,
  Box,
  Heading,
  VStack,
  Grid,
  theme,
  NumberInput,
  NumberInputField,
  Container,
  Spacer,
  Divider,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  ListItem,
  OrderedList,
  Link,
  Image,
  UnorderedList,
  Button,
} from '@chakra-ui/react';


function App() {

    const [apfChromeActive, setApfChromeActive] = useState(false);



  return (
      <Box textAlign="center" fontSize="xl">
        <Grid minH="100vh">
          <VStack spacing={8}>
          <Heading pt={3}>4theWords Fan Edits</Heading>
            <Container><p>This page lists all currently available fan edits 
                of the 4theWords site and its corresponding wiki pages. 
                <br></br>
                <br></br>

                <Divider></Divider>
                <br></br>
                <b>Required Extensions:</b></p>
                <br></br>
                <UnorderedList textAlign='left'>
                    <ListItem p={3}>
                        Advanced Profanity Filter (to change text)
                        <br></br>
                        <Link href="https://chromewebstore.google.com/detail/advanced-profanity-filter/piajkpdbaniagacofgklljacgjhefjeh"
            color='teal.500'   
            _hover={{  color: "teal.300",  }}> <b>Chrome</b></Link> / 
      <Link href="https://addons.mozilla.org/en-US/firefox/addon/advanced_profanity_filter/"
            color='teal.500'   
            _hover={{  color: "teal.300",  }}><b> Firefox</b></Link> /
                  <Link href="https://microsoftedge.microsoft.com/addons/detail/advanced-profanity-filter/lhnbdlbhcokmgpjenkjolnhdnkphnkam"
            color='teal.500'   
            _hover={{  color: "teal.300",  }}><b> Microsoft Edge</b></Link> /
                <Link href="https://addons.opera.com/en/extensions/details/advanced-profanity-filter/"
            color='teal.500'   
            _hover={{  color: "teal.300",  }}><b> Opera</b></Link>
                    </ListItem>
                    <ListItem p={3}>
                        Request Interceptor (to swap images)
                        <br></br>
                        <Link href="https://chromewebstore.google.com/detail/request-interceptor/bfgblailifedppfilabonohepkofbkpm"
            color='teal.500'   
            _hover={{  color: "teal.300",  }}> <b>Chrome and Opera</b></Link> / 
      <Link href="https://addons.mozilla.org/en-US/firefox/addon/request-interceptor/"
            color='teal.500'   
            _hover={{  color: "teal.300",  }}><b> Firefox</b></Link> /
                  <Link href="https://microsoftedge.microsoft.com/addons/detail/request-interceptor/mbfelkekkjdbfaaocmdkdchffhejfplk?hl=en-US"
            color='teal.500'   
            _hover={{  color: "teal.300",  }}><b> Microsoft Edge</b></Link> 
                    </ListItem>
                    <ListItem p={3}>
                        uBlock Origin (to block images or site elements)
                        <br></br>
                        <Link href="https://chromewebstore.google.com/detail/ublock-origin/cjpalhdlnbpafiamejdnhcphjbkeiagm"
            color='teal.500'   
            _hover={{  color: "teal.300",  }}> <b>Chrome</b></Link> / 
      <Link href="https://addons.mozilla.org/en-US/firefox/addon/ublock-origin/"
            color='teal.500'   
            _hover={{  color: "teal.300",  }}><b> Firefox</b></Link> /
                  <Link href="https://microsoftedge.microsoft.com/addons/detail/ublock-origin/odfafepnkmbhccpbejgmiehpchacaeak"
            color='teal.500'   
            _hover={{  color: "teal.300",  }}><b> Microsoft Edge</b></Link> /
                <Link href="https://addons.opera.com/en/extensions/details/ublock/"
            color='teal.500'   
            _hover={{  color: "teal.300",  }}><b> Opera</b></Link>
                    </ListItem>
                </UnorderedList>
                <br></br>
                <Divider></Divider>
                </Container>
                <Heading>Accessibility Edits</Heading>
                <b>Remove Spiders from the Aurilis Global Event</b>
                <Box boxSize='sm'>
                <Image src='https://i.imgur.com/2NKjuvK.png'/>
                  <br></br>       
                <Image src='https://i.imgur.com/ghDcuVC.png'/>
                    <br></br>       
                <Image src='https://i.imgur.com/wtgRq0Z.png'/>
                  </Box>           

          </VStack>
          
        </Grid>
      </Box>
  );
}

export default App;