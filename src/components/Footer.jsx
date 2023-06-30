import React from 'react'
import { Box, Image, Heading, Container, Text, Stack, VStack, HStack, Button, Input } from '@chakra-ui/react';
import { AiOutlineSend } from 'react-icons/ai';

const Footer = () => {
  return (
    <Box bg={"blackAlpha.800"} minH={40} p="16" color={'white'}>

      <Stack direction={['column', 'row']} >
        <VStack>
          <Heading size={'md'} textTransform={'uppercase'} textAlign={['center', 'left']}>
            Subscribe to get Updates
          </Heading>

          <HStack>
            <Input placeholder={'Enter your email'} borderRadius={"none"} focusBorderColor='none' />
            <Button
              p={'0'}
              colorScheme={'purple'}
              variant={'ghost'}
              borderRadius={'0 20px 20px 0'}
            >
              <AiOutlineSend size={'20'} />
            </Button>
          </HStack>
        </VStack>

        <VStack
          w={'full'}
          borderLeft={['none', '1px solid white']}
          borderRight={['none', '1px solid white']}
        >
          <Heading textTransform={'uppercase'} textAlign={'center'}>
            MOVIE MANIA
          </Heading>
          <Text>All rights reserved</Text>
        </VStack>

        <VStack w={'full'}>
          <Heading size={'md'} textTransform={'uppercase'}>
            Social Media
          </Heading>
          <Button variant={'link'} colorScheme={'white'}>
            <a target={'black'} href="https://youtube.com">
              Youtube
            </a>
          </Button>
          <Button variant={'link'} colorScheme={'white'}>
            <a target={'black'} href="https://instagram.com">
              Instagram
            </a>
          </Button>
        </VStack>

      </Stack>
    </Box>
  )
}

export default Footer