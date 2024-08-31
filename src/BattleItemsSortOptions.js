import React, {useState} from 'react';
import {Wrap, Text, WrapItem, Button} from '@chakra-ui/react';

function ItemSortOptions() {

    const [SortByLuck, setSortByLuck] = useState(false)
const [SortByLuckIsShown, setSortByLuckIsShown] = useState(false)
const [SortByLuckActive, setSortByLuckActive] = useState(false)

const [SortByDef, setSortByDef] = useState(false)
const [SortByDefIsShown, setSortByDefIsShown] = useState(false)
const [SortByDefActive, setSortByDefActive] = useState(false)

const [SortByAtk, setSortByAtk] = useState(false)
const [SortByAtkIsShown, setSortByAtkIsShown] = useState(false)
const [SortByAtkActive, setSortByAtkActive] = useState(false)

const [SortByLocation, setSortByLocation] = useState(false)
const [SortByLocationIsShown, setSortByLocationIsShown] = useState(true)
const [SortByLocationActive, setSortByLocationActive] = useState(true)

const [SortByName, setSortByName] = useState(false)
const [SortByNameIsShown, setSortByNameIsShown] = useState(false)
const [SortByNameActive, setSortByNameActive] = useState(false)
  
const handleSortByLuckClick = event => {
  setSortByLuckIsShown (current => true);
  setSortByLuckActive (current => true);
  setSortByDefIsShown (current => false);
  setSortByDefActive (current => false);
  setSortByAtkIsShown (current => false);
  setSortByAtkActive (current => false);
  setSortByLocationIsShown (current => false);
  setSortByLocationActive (current => false);
  setSortByNameIsShown (current => false);
  setSortByNameActive (current => false);
  };

const handleSortByDefClick = event => {
  setSortByLuckIsShown (current => false);
  setSortByLuckActive (current => false);
  setSortByDefIsShown (current => true);
  setSortByDefActive (current => true);
  setSortByAtkIsShown (current => false);
  setSortByAtkActive (current => false);
  setSortByLocationIsShown (current => false);
  setSortByLocationActive (current => false);
  setSortByNameIsShown (current => false);
  setSortByNameActive (current => false);
  };    

const handleSortByAtkClick = event => {
  setSortByLuckIsShown (current => false);
  setSortByLuckActive (current => false);
  setSortByDefIsShown (current => false);
  setSortByDefActive (current => false);
  setSortByAtkIsShown (current => true);
  setSortByAtkActive (current => true);
  setSortByLocationIsShown (current => false);
  setSortByLocationActive (current => false);
  setSortByNameIsShown (current => false);
  setSortByNameActive (current => false);
  };

const handleSortByLocationClick = event => {
  setSortByLuckIsShown (current => false);
  setSortByLuckActive (current => false);
  setSortByDefIsShown (current => false);
  setSortByDefActive (current => false);
  setSortByAtkIsShown (current => false);
  setSortByAtkActive (current => false);
  setSortByLocationIsShown (current => true);
  setSortByLocationActive (current => true);
  setSortByNameIsShown (current => false);
  setSortByNameActive (current => false);
  };

const handleSortByNameClick = event => {
  setSortByLuckIsShown (current => false);
  setSortByLuckActive (current => false);
  setSortByDefIsShown (current => false);
  setSortByDefActive (current => false);
  setSortByAtkIsShown (current => false);
  setSortByAtkActive (current => false);
  setSortByLocationIsShown (current => false);
  setSortByLocationActive (current => false);
  setSortByNameIsShown (current => true);
  setSortByNameActive (current => true);
  };


    return(
        <div>
        <Text fontSize='md' mt='25px' mb='15px'>Sort By:</Text>
        <Wrap justify='center'>
        <WrapItem> 
        <Button w='90px' h='40px' pb={5} onClick={handleSortByAtkClick} style={{ backgroundColor: SortByAtkActive ? "#211742" : "#2D3748", borderColor: SortByAtkActive ? '#31294f' : 'transparent', borderWidth: '2px'}}>
        <Text fontSize='md' align='center' pt='18px'>Attack</Text>
        </Button>
        </WrapItem>
        <WrapItem>
        <Button w='90px' h='40px' pb={5} onClick={handleSortByDefClick} style={{ backgroundColor: SortByDefActive ? "#211742" : "#2D3748", borderColor: SortByDefActive ? '#31294f' : 'transparent', borderWidth: '2px'}}>
        <Text fontSize='md' align='center' pt='18px'>Defense</Text>
        </Button>
        </WrapItem>
        <WrapItem>
          <Button w='90px' h='40px' pb={5} onClick={handleSortByLuckClick} style={{ backgroundColor: SortByLuckActive ? "#211742" : "#2D3748", borderColor: SortByLuckActive ? '#31294f' : 'transparent', borderWidth: '2px'}}>
                  <Text fontSize='md' align='center' pt='18px'>Luck</Text>
          </Button>
          </WrapItem>
        <WrapItem>
          <Button w='90px' h='40px' pb={5} onClick={handleSortByLocationClick} style={{ backgroundColor: SortByLocationActive ? "#211742" : "#2D3748", borderColor: SortByLocationActive ? '#31294f' : 'transparent', borderWidth: '2px'}}>
        <Text fontSize='md' align='center' pt='18px'>Location</Text></Button>
        </WrapItem>
        <WrapItem>
        <Button w='90px' h='40px' pb={5} onClick={handleSortByNameClick} style={{ backgroundColor: SortByNameActive ? "#211742" : "#2D3748", borderColor: SortByNameActive ? '#31294f' : 'transparent', borderWidth: '2px'}}>
        <Text fontSize='md' align='center' pt='18px'>Name</Text>
        </Button>
        </WrapItem>
        </Wrap></div>
    )
}

  export default function SortOptions() {
    return(
    <ItemSortOptions/>
    );
  } 