import React from 'react';
import { Box, Image, Heading, Container, Text, Stack } from '@chakra-ui/react';
import { Carousel } from "react-responsive-carousel";
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import img1 from '../assets/1.jpg';
import img2 from '../assets/2.jpg';
import img3 from '../assets/3.jpg';
import img4 from '../assets/4.jpg';
import img5 from '../assets/5.png';

const headingOptions = {
    pos: "absolute",
    left: "50%",
    top: "50%",
    transform: "translate(-50%, 50%)",
    textTransform: "uppercase",
    p: '4',
    size: "4xl"
}
const MyCarousel = () => {
    return (
        <Carousel
            autoPlay
            infiniteLoop
            interval={1000}
            showStatus={false}
            showThumbs={false}
            showArrows={false}
        >
            <Box w="full" h={'100vh'}>
                <Image src={img1} h="full" w={'full'} objectFit={'cover'} />
                <Heading bgColor={'blackAlpha.600'} color={'white'} {...headingOptions}>
                    Lights. Camera. Movies!
                </Heading>
            </Box>
            <Box w="full" h={'100vh'}>
                <Image src={img2} h="full" w={'full'} objectFit={'cover'} />
                <Heading bgColor={'whiteAlpha.900'} color={'black'} {...headingOptions}>
                    Movies at your fingertips.
                </Heading>
            </Box>

            <Box w="full" h={'100vh'}>
                <Image src={img3} h="full" w={'full'} objectFit={'cover'} />
                <Heading bgColor={'whiteAlpha.600'} color={'black'} {...headingOptions}>
                    Unleash your inner film buff.
                </Heading>
            </Box>

            <Box w="full" h={'100vh'}>
                <Image src={img4} h="full" w={'full'} objectFit={'cover'} />
                <Heading bgColor={'whiteAlpha.600'} color={'black'} {...headingOptions}>
                    All things movies in one place.
                </Heading>
            </Box>
        </Carousel>
    );
};

const Home = () => {
    return (
        <Box>
            <MyCarousel />
            <Container maxW={'container.xl'} minH={'100vh'} p="16">
                <Heading
                    textTransform={'uppercase'}
                    py="2"
                    w={"fit-content"}
                    borderBottom={'2px solid'}
                    m="auto"
                > About Us
                </Heading>  {/* py is padding on top and bottom*/}

                <Stack
                    h="full"
                    p={'4'}
                    alignItems={'center'}
                    direction={['column', 'row']}
                >                               {/*  when screen will be smaller, then column otheriwse row   */}

                    <Image src={img5} h={['40', '400']} filter={'hue-rotate(-130deg)'} />
                    <Text letterSpacing={'widest'}
                        lineHeight={'190%'}
                        p={['4', '16']}
                        textAlign={'center'}
                    >
                        Welcome to Movie Mania!

                        At Movie Mania, we are passionate about all things movies. We are dedicated to providing you with the ultimate movie experience, whether you're a casual moviegoer, an avid film enthusiast, or a hardcore cinephile.

                        Our platform is designed to be your go-to destination for everything related to movies. From the latest releases to timeless classics, we offer a wide selection of films across various genres, ensuring there's something for everyone. Whether you're in the mood for action, romance, comedy, or suspense, Movie Mania has got you covered.
                    </Text>
                </Stack>
            </Container>
        </Box>
    );
};

export default Home;
