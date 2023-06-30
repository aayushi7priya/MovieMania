import { Stack, VStack, Heading, Text, Button } from '@chakra-ui/react';
import React, { useState } from 'react';

const Videos = () => {
  const videosArr = [
    'https://player.vimeo.com/progressive_redirect/playback/689949818/rendition/540p?loc=external&oauth2_token_id=1027659655&signature=cf602155bf49e4e74db6f2ec9d4ecf067fbab44c4295a8950d58ecdb88910882',
    'https://player.vimeo.com/progressive_redirect/playback/697718184/rendition/360p?loc=external&oauth2_token_id=1027659655&signature=26d69c3df603d083fedd663acaab4d35a33444d11033a626864cf1e578e136cf',
    'https://player.vimeo.com/external/510850877.hd.mp4?s=d5e9ed9ea40ba755e28512cce6c1ad00d92506f7&profile_id=174',
    'https://player.vimeo.com/external/577442929.hd.mp4?s=95231c8a7fe2066ffb640204591b01a6c326b97c&profile_id=174',
    'https://player.vimeo.com/progressive_redirect/playback/689925384/rendition/360p?loc=external&oauth2_token_id=1027659655&signature=5a819f11298d53cc1ed85837342f47ea61c8f95b9aeeb0c38edab72a80e0db78',
    'https://player.vimeo.com/progressive_redirect/playback/688648666/rendition/720p?loc=external&oauth2_token_id=1027659655&signature=070a16d4b244bc11c2bd17b03e04e50460be3d2726ed554959a49fc05dbd0281',
    'https://player.vimeo.com/progressive_redirect/playback/690770660/rendition/720p?loc=external&oauth2_token_id=1027659655&signature=3a048039957fd878fc72b809b9a0e5f2102eded879a83e00784ecd3ba5123614',
  ];

  const title = [
    'The Rise of Batman',
    'Wednesday (1965)',
    'Harry Potter 1',
    'The Wizards of Narnia',
    'The Notebook',
    'Final Destination',
    'La La Land',
  ];

  const description = [
    'Batman" is an iconic superhero film that delves into the dark and enigmatic world of Gotham City. Set against a backdrop of crime and corruption, the movie follows the story of Bruce Wayne, a billionaire playboy who, driven by a tragic past, assumes the mantle of Batman to protect his city from evil forces.',
    '"Wednesday" is a captivating movie that takes viewers on a mesmerizing journey through time and mystery. Set in the year 1965, the film revolves around the life of Wednesday Addams, a young girl with an uncanny fascination for the darker side of life. As she navigates through a peculiar new school and encounters eccentric characters, Wednesday discovers her unique abilities and unleashes her mysterious powers. Fueled by a desire to solve a long-buried family secret, she embarks on a thrilling adventure that intertwines the supernatural with the ordinary, making "Wednesday" a spellbinding and heartwarming tale of self-discovery and acceptance.',
    'Harry Potter and the Sorcerer Stone introduces audiences to the magical world of Harry Potter. Adapted from J.K. Rowlings beloved novel, the film follows the extraordinary journey of Harry Potter, an orphaned boy who discovers he is a wizard on his eleventh birthday. Enrolled at Hogwarts School of Witchcraft and Wizardry, Harry befriends Ron Weasley and Hermione Granger, forming an unbreakable bond as they navigate through enchanting classes, daunting challenges, and the mysteries surrounding the legendary Sorcerer Stone',
    'Step into the enchanting world of Narnia, where a group of children discovers a hidden realm inhabited by magical creatures, embarking on an epic quest to defeat an evil witch and restore peace to the land.',
    'Set against the backdrop of a passionate and timeless love story, "The Notebook" follows the journey of a young couple, their enduring romance, and the challenges they face in a tale of devotion, sacrifice, and the power of true love.',
    'A group of teenagers narrowly escapes a tragic disaster when one of them has a premonition. However, they soon realize that they are being pursued by an unseen force that is determined to claim their lives in this gripping and suspenseful thriller.',
    '"La La Land" is a dazzling musical that follows the love story of aspiring actress Mia and jazz pianist Sebastian in Los Angeles. As they chase their dreams, their paths intertwine in a beautiful and bittersweet exploration of love, ambition, and the pursuit of artistic passion.',
  ];

  const [videoIndex, setVideoIndex] = useState(0);

  const handleVideoChange = (index) => {
    setVideoIndex(index);
  };

  return (
    <Stack direction={['column', 'row']} h={'100vh'}>
      <VStack w={'full'}>
        <video controls controlsList="nodownload" src={videosArr[videoIndex]} style={{ width: '100%' }}></video>
        <VStack alignItems={'flex-start'} p={'8'} w={'full'} overflowY={'auto'}>
          <Heading>{title[videoIndex]}</Heading>
          <Text>{description[videoIndex]}</Text>
        </VStack>
      </VStack>
      <VStack w={['full', 'xl']} alignItems={'stretch'} p="8" spacing={'8'} overflowY={'auto'}>
        {videosArr.map((item, index) => (
          <Button
            key={index}
            variant="ghost"
            colorScheme={videoIndex === index ? 'purple' : 'gray'}
            onClick={() => handleVideoChange(index)}
          >
            {title[index]}
          </Button>
        ))}
      </VStack>
    </Stack>
  );
};

export default Videos;
