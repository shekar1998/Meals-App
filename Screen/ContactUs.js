import React from 'react'
import { StyleSheet, View, Dimensions } from 'react-native'
import {
    Box,
    Heading,
    AspectRatio,
    Image,
    Text,
    Center,
    HStack,
    Stack,
} from "native-base"
import { MaterialIcons } from "@expo/vector-icons"
import TextWithIcon from './../Components/TextWithIcon';

let { width, height } = Dimensions.get("window");


const ContactUs = () => {
    return (
        <View style={styles.mainContainer}>
            <Text style={styles.heading} fontSize="xs"
                _light={{
                    color: "violet.500",
                }}
                _dark={{
                    color: "violet.400",
                }}>Where to contact us?</Text>
            <Box
                maxW={width - 20}
                rounded="lg"
                overflow="hidden"
                borderColor="coolGray.200"
                borderWidth="1"
                _dark={{
                    borderColor: "coolGray.600",
                    backgroundColor: "gray.700",
                }}
                _light={{
                    backgroundColor: "gray.50",
                }}
            >
                <Box>
                    <AspectRatio w="100%" ratio={16 / 9}>
                        <Image
                            source={{
                                uri: "https://www.holidify.com/images/cmsuploads/compressed/Bangalore_citycover_20190613234056.jpg",
                            }}
                            alt="image"
                        />
                    </AspectRatio>
                    <Center
                        bg="violet.500"
                        _dark={{
                            bg: "violet.400",
                        }}
                        _text={{
                            color: "warmGray.50",
                            fontWeight: "700",
                            fontSize: "xs",
                        }}
                        position="absolute"
                        bottom="0"
                        px="3"
                        py="1.5"
                    >
                        BENGALURU
                    </Center>
                </Box>
                <Stack p="4" space={3}>
                    <Stack space={2}>
                        <Heading size="md" ml="-1">
                            The Garden City
                        </Heading>
                        <Text
                            fontSize="xs"
                            _light={{
                                color: "violet.500",
                            }}
                            _dark={{
                                color: "violet.400",
                            }}
                            fontWeight="500"
                            ml="-0.5"
                            mt="-1"
                        >
                            The Silicon Valley of India.
                        </Text>
                    </Stack>
                    <Text fontWeight="400">
                        Bengaluru (also called Bangalore) is the center of India's high-tech
                        industry. This is where we reside.
                    </Text>
                    <TextWithIcon data="Bengaluru, India" icon="location-pin" />
                    <TextWithIcon data="+91 9999988888" icon="phone" />
                    <TextWithIcon data="meals@example.com" icon="email" />
                </Stack>
            </Box>
        </View>
    )
}

export default ContactUs

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        alignItems: "center",
    },
    heading: {
        fontWeight: "bold",
        fontSize: 26,
        paddingTop: 20,
        paddingBottom: 10
    }
})
