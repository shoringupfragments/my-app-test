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
} from '@chakra-ui/react';


function App() {


  return (
      <Box textAlign="center" fontSize="xl">
        <Grid minH="100vh">
          <VStack spacing={8}>
          <Heading pt={3}>How to Replace Images on 4theWords</Heading>
            <Container><p>This page was created to de-spooder 
                4theWords' November 2023 event. 
                <br></br>
                <br></br>
                Follow the instructions below to install premade alternatives
                to the spideys, or scroll on to find how to replace any other 
                image. 
                </p>
                <br></br>

                <Accordion allowMultiple>
  <AccordionItem>
    <h2>
      <AccordionButton>
      <Box as="span" flex='1' textAlign='center' p={3}>
        <Heading as='h3' size='lg'>On Desktop</Heading>
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4}>
    <OrderedList textAlign='left'>
  <ListItem>Install the <b>Request Interceptor</b> extension: 
  <Link href="https://chromewebstore.google.com/detail/request-interceptor/bfgblailifedppfilabonohepkofbkpm"
            color='teal.500'   
            _hover={{  color: "teal.300",  }}> <b>Chrome</b></Link> / 
      <Link href="https://addons.mozilla.org/en-US/firefox/addon/request-interceptor/"
            color='teal.500'   
            _hover={{  color: "teal.300",  }}><b> Firefox</b></Link> /
                  <Link href="https://microsoftedge.microsoft.com/addons/detail/request-interceptor/mbfelkekkjdbfaaocmdkdchffhejfplk"
            color='teal.500'   
            _hover={{  color: "teal.300",  }}><b> Microsoft Edge</b></Link>
            <br></br><br></br>

    </ListItem>
  <br></br>
  <ListItem>Download the following json file from Google Drive: 
  <Link href="https://drive.google.com/file/d/1KW9LXtVkjG0IjTm9ZsinF93j08xREcSD/view?usp=sharing"
            color='teal.500'   
            _hover={{  color: "teal.300",  }}><b> Pre-made Spooder Replacements</b></Link>
            <br></br>
            <br></br>

            This file has three options to replace spooders with: 
            <br></br>
            - color-coded Knuffs             <br></br>
            - class symbols (thanks Chokolatte!)             <br></br>
            - dragon preview sketches (thanks Splash!)
            <br></br>
            <br></br>
            Each option has a set of rules for the 4theWords site and the 4theWords Wiki, 
            replacing every single spooder across the sites (as of 2023-20-11). 
            <br></br>            
    </ListItem>
  <br></br>
  <ListItem>Open the settings for Request Interceptor by either selecting the 
    add-on in your browser's toolbar or expanding the add-ons list and clicking
    the name of the extension.
  </ListItem>
  <br></br>
  <Box boxSize='med'>
  <Image src='https://i.imgur.com/hPGyVq8.png'/>
</Box>
  <br></br>
  <ListItem>Select <b>Import</b> in the upper right corner and upload the json file from Step 2</ListItem>
  <br></br>
  <Box boxSize='med'>
  <Image src='https://i.imgur.com/FDZEsTU.png'/>
</Box>
<br></br>
  <ListItem>Select the image replacement you would like to use for the main 4theWords
    site and/or the Wiki from the lefthand menu.
  </ListItem>
  <br></br>
  <Box boxSize='med'>
  <Image src='https://i.imgur.com/SG5c9Nk.png'/>
</Box>
  <br></br>
  <ListItem>Toggle the image replacement categories you select (one for 4theWords, one for the Wiki)
     to <b>On</b> in the upper right corner
  </ListItem>
  <br></br>
  <Box boxSize='med'>
  <Image src='https://i.imgur.com/yRwqugW.png'/>
</Box>
  <ListItem>Select <b>Save</b> in the upper right corner</ListItem>
  <br></br>
  <Box boxSize='med'>
  <Image src='https://i.imgur.com/PGBmAwn.png'/>
</Box>
<br></br>
  <ListItem>Refresh the page to load the changes.</ListItem>
<br></br>    
  <ListItem>If refreshing doesn't load the changes, clear your broswer cache. Go to your browser's settings and clear both 4theWords' and the Wiki's cache</ListItem>
  <br></br>
  <Box boxSize='med'>
  <Image src='https://i.imgur.com/JVSzE9B.png'/>
</Box>
</OrderedList>
<br></br>
<Divider></Divider>
<br></br>
<Heading pt={3} as='h3' size='lg'>Optional: Remove Text References to Spooders</Heading>
<br></br>
<OrderedList textAlign='left'>
  <ListItem>Install the <b>Word Replacer</b> extension: 
  <Link href="https://chromewebstore.google.com/detail/word-replacer-ii/djakfbefalbkkdgnhkkdiihelkjdpbfh"
            color='teal.500'   
            _hover={{  color: "teal.300",  }}> <b>Chrome</b></Link> / 
      <Link href="https://addons.mozilla.org/en-US/firefox/addon/word_replacer/"
            color='teal.500'   
            _hover={{  color: "teal.300",  }}><b> Firefox</b></Link> /
                  <Link href="https://support.microsoft.com/en-us/microsoft-edge/add-turn-off-or-remove-extensions-in-microsoft-edge-9c0ec68c-2fbc-2f2c-9ff0-bdc76f46b026"
            color='teal.500'   
            _hover={{  color: "teal.300",  }}><b> How to Use Chrome Extension on Microsoft Edge</b></Link>
            <br></br><br></br>
    </ListItem>
  <br></br>
  <ListItem>
    Copy the appropriate Pastebin text for the version of spooder filter you want to use:
    <Link href="https://pastebin.com/HLJaRFby"
            color='teal.500'   
            _hover={{  color: "teal.300",  }}> <b> Knuffs</b></Link> / 
      <Link href="https://pastebin.com/myWqEPsF"
            color='teal.500'   
            _hover={{  color: "teal.300",  }}><b> Class Symbols</b></Link> /
                  <Link href="https://pastebin.com/Hnppuk9c"
            color='teal.500'   
            _hover={{  color: "teal.300",  }}><b> Dragons</b></Link>
            <br></br><br></br>
  </ListItem>
  <ListItem>
    Open the Word Replacer settings by clicking the add-on in your toolbar or add-ons menu
  </ListItem>
  <br></br>
  <Box boxSize='med'>
  <Image src='https://i.imgur.com/VB1WQDf.png'/>
</Box>
  <br></br>
  <ListItem>
    Paste your text into the Export / Import box and select <b>Import</b>
  </ListItem>
  <br></br>
  <Box boxSize='med'>
  <Image src='https://i.imgur.com/OYeGsRO.png'/>
</Box>
  <br></br>
  <ListItem>
    Your list will auto-populate on the left. To change the filters you use, just click the ones you 
    want to enable and select <b>Enable</b> at the top of the list. Then repeat for those you want to disable, 
    selecting <b>Disable</b> this time.
    <br></br><br></br>
    All three lists have all options available, to spare you returning to this page or copy/pasting more. 
  </ListItem>
  <br></br><br></br>
</OrderedList>

<br></br>
    </AccordionPanel>
  </AccordionItem>

  <AccordionItem>
    <h2>
      <AccordionButton>
      <Box as="span" flex='1' textAlign='center' p={3}>
        <Heading as='h3' size='lg'>On Mobile (Firefox only)</Heading>
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4}>
        <p><b>NOTE:</b> on mobile, it is only possible at this time 
        to hide images, not replace them.</p>
        <br></br>
    <OrderedList textAlign='left'>
    <ListItem>
    Download     <Link href="https://addons.mozilla.org/en-US/firefox/addon/ublock-origin/"
            color='teal.500'   
            _hover={{  color: "teal.300",  }}><b> uBlock Origin</b></Link>
    </ListItem>
    <br></br>
    <ListItem>
    Download this text file of images to block from 4theWords and the 4theWords Wiki:
    <Link href="https://drive.google.com/file/d/1EAFBuqwJrIdFBzrwFpo0uRlkKpPFPuJh/view?usp=sharing"
            color='teal.500'   
            _hover={{  color: "teal.300",  }}><b> Download Text File</b></Link>
    </ListItem>
    <br></br>
    <ListItem>
    Go to your add-ons and select <b>Ublock</b>
    </ListItem>
    <br></br>
    <ListItem>
    Go to <b>My Filters</b>
    </ListItem>
    <br></br>
    <ListItem>
    Select the upload option, which looks like the outbox emoticon 📤 
    </ListItem>
    <br></br>
    <ListItem>
    Upload the text file from step 2
    </ListItem>
    <br></br>
    <ListItem>
    Apply changes to save
    </ListItem>
    <br></br>
    <ListItem>
    <b>CLEAR YOUR CACHE!</b> The images will continue to populate from your browser cache.
     Clear the cache for both 4theWords and the Wiki in order to block the images.
    </ListItem>
    </OrderedList>
    <br></br>
    </AccordionPanel>
  </AccordionItem>
</Accordion>
<br></br>
                </Container>

          </VStack>
          
        </Grid>
      </Box>
  );
}

export default App;