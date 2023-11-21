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
  List,
  OrderedList,
  ListItem,
  Link,
  Divider
} from '@chakra-ui/react';
import {ChevronRightIcon} from '@chakra-ui/icons'


function App() {


//CALCULATOR //
  
const [attackStat, setAttackStat] = useState(0); // Or any other non-zero value
const [wordCount, setWordCount] = useState(0);   // Or any other non-zero value
const [wcResult, setWCResult] = useState(0);

  useEffect(() => {
    // Calculate the result whenever attackStat or wordCount changes
    calculateWCResult(attackStat, wordCount);
  }, [attackStat, wordCount]);
  
  const handleAttackStatChange = (valueString) => {
    const value = parseFloat(valueString); 
      setAttackStat(value);
  };
  
  const handleWordCountChange = (valueString) => {
    const value = parseFloat(valueString);
      setWordCount(value);
    };
  

  const calculateWCResult = (atk, wc) => {
    const totalWords = Math.round (wc / ((atk/100) + 1));
    setWCResult(totalWords);

};

const number = wcResult;
const USformatter = new Intl.NumberFormat("en-US");
const fixWcResult = USformatter.format(number);

  return (
      <Box textAlign="center" fontSize="xl">
        <Grid minH="100vh">
          <VStack spacing={8}>
          <Heading pt={3}>New Player Guide</Heading>
            <Container><p>Here are the most important things to know in your time on 4theWords:</p></Container>

<Container>
<Heading p={3}>Feeling Lost? Use the Wiki!</Heading>
<Container textAlign='left'>Almost any question you could ask can be answered by the 4theWords Wiki. This page 
shares some handy tips, but in-depth answers and explanations are on the Wiki.
<br></br>
<br></br>
More detailed info: <Link href='https://4thewords.fandom.com/wiki/Start_Here!' color='teal.500'>
        Getting Started Guide (4theWords Wiki)</Link></Container>
        <br></br>
<Divider />
<br></br>
<Heading p={3}>Battle Items</Heading>
<OrderedList textAlign='left'>

<p>Battle Items are part of the 4theWords game strategy. As you unlock areas, you get new and better weapons.<br></br><br></br>

<Heading  as='h2' size='lg' p={3}><ListItem>What do the stats do?</ListItem></Heading>
<b>Attack Stat:</b> decrease the words needed to defeat a monster<br></br>
<b>Defense Stat:</b> increase the time to fight a monster <br></br>
<b>Luck Stat:</b> increase the odds of better loot drops<br></br>
</p>
<br></br>
<Heading  as='h3' size='lg' p={3}><ListItem>Which stat is best?</ListItem></Heading>
<p>This varies based on personal taste. Attack 
    is generally the most helpful stat in the long-run, since lowering 
    the word count intrinsically lowers the time needed and increases the 
    average loot per actual word written. <br></br><br></br>
    More detailed info: <Link href='https://antifandom.com/4thewords/wiki/Battle_Stats' color='teal.500'>
        Battle Stats (4theWords Wiki)</Link>.
    </p>
<br></br>
<Heading  as='h3' size='lg' p={3}><ListItem>Equip your battle items</ListItem></Heading>
<p>Equip your battle items by going to the <b>Hero</b> tab, then select <b>Battle</b>.
Click the item you want to equip, then select "equip".
    <br></br><br></br>
    You will see the default icon when you don't have a weapon equipped. It's better
    to equip anything you have early game than to go without battle items.</p>
    <Heading as='h3' size='lg' p={3}><ListItem>Don't sell items/materials unless you absolutely have to</ListItem></Heading>
<p>Many materials and battle items have unexpected uses later on in the game. You will earn Coins 
    from every monster battle you have. If you need coins early game, only sell as much excess weapons or items
    as is absolutely necessary, so you are not doubling back to re-earn materials later.

</p>
    </OrderedList>
    <OrderedList textAlign='left'>
    <br></br>
<Divider />
<br></br>        <Heading textAlign='center' p={3}>Writing Streak</Heading>
        <p>Earn wardrobe wings for your avatar and badges for your profile and the forum by 
    maintaining your daily writing streak</p>
    <br></br>
<Heading as='h3' size='lg' p={3}><ListItem>Maintain your streak for free every day</ListItem></Heading>
<p>1. Go to the <b>Journal</b> tab, then select <b>Writing Streak</b> at the top of the page. 
<br></br>
2. Select the button above the calendar that says "Fix dates with stempos"
<br></br>
3. Double-click on today's date 
<br></br>
4. Select the button below the calendar that says "Fix for 0 Stempos"
</p>
<Heading as='h3' size='lg' p={3}><ListItem>Streaks can go forward or backward by 30 days</ListItem></Heading>
<p>You can save future days for your streak or repair past days, but it must be within 30 days.</p>

<Heading as='h3' size='lg' p={3}><ListItem>Editing your writing stats</ListItem></Heading>
<p><b>Wait to change your writing stat until you are done writing for today!</b> The site treats
the word count change as permanent, even if the day is not over yet.
<br></br><br></br>
To edit your word count stats, go to <b>Journal</b> and then <b>Stats</b>. Scroll to the graph
showing Lifetime Words Written. Tap or hover over a given day's stat, then select the "Edit" popup that appears.</p>
</OrderedList>
<br></br>
<Divider />
<br></br>
<Heading p={3}>Special Events</Heading>

<OrderedList textAlign='left'>
<Heading as='h3' size='lg' p={3}><ListItem>Priotize special events over the main game</ListItem></Heading>
<p>NaNoWriMo events and holiday events are always temporary. When an event timer ends, the quests and 
    monsters disappear. The event token store disappears within ~5 days of the event ending as well.
<br></br><br></br>
More detailed info: <Link href='https://4thewords.fandom.com/wiki/Events' color='teal.500'>
        Events (4theWords Wiki)</Link>.
</p>
<Heading as='h3' size='lg' p={3}><ListItem>Save event monsters in your battle queue</ListItem></Heading>
<p>If you need extra time to finish event quests, you can save the monsters you're fighting in your 
    battle queue. Be careful to keep multiple copies and disable auto-start so that you don't
    accidentally write through a monster.
    <br></br><br></br>
    You can use "Fight Again" on the last monster you fought when your battle list is empty, which is 
    a good lifeline but only works for one monster.
</p>
<Heading as='h3' size='lg' p={3}><ListItem>Inputting promotional codes</ListItem></Heading>
<p>
    4theWords gives out codes for a couple items and 2 weeks of subscription time during NaNo months.
    The November NaNoWriMo code is <b>wrimo23</b>. To use it, go to the <b>Account</b> tab,  
    then <b>Store</b> and <b>Special Codes</b>.
 </p></OrderedList>
 <br></br>
<Divider />
<br></br> 
 <Heading>Quests</Heading>
 <OrderedList textAlign='left'>
<Heading as='h3' size='lg' p={3}><ListItem>Making monsters count for multiple quests</ListItem></Heading>
<p>
   The 4theWords day resets at midnight your time. Any monsters you fight before midnight
   count for any quests you pick up that day, even if you fought the monster first. 
   <br></br><br></br>
   E.g. imagine you are doing 2-part quest chain. Part 1 needs 10 Wignow; Part 2 needs 20 Wignow.
   If you turn in Part 1 <i>and</i> pick up Part 2 before midnight, you will already be at 10/20 Wignow for 
   Part 2.
   <br></br><br></br>
   The only exception to this is timed monster quests, which don't count any monsters you fought <i>or started fighting</i> before picking up the timed quest.
</p>
<Heading as='h3' size='lg' p={3}><ListItem>Double-Dipping on Daily Quests</ListItem></Heading>
<p>There are two daily word count quests on 4theWords: 4000 words and 5000 words. <br></br> 
<br></br>
If you turn either of these in before noon your time and pick them up after 12 hours (but before midnight), 
    the same words can count twice for these quests.
</p>
<Heading as='h3' size='lg' p={3}><ListItem>What happens when you drop a quest?</ListItem></Heading>
<p>Dropping a quest erases any progress in words written or monsters fought <i>except</i> what 
you've done so far today. (Remember: the 4theWords day resets at midnight in your time zone.) Dropping a timed quest
erases all progress including from today.
<br></br><br></br>
There is no need to save a quest that only requires items, as you can drop it and pick it up without losing progress.
<br></br><br></br>

</p>

</OrderedList></Container>
          </VStack>
          
        </Grid>
      </Box>
  );
}

export default App;