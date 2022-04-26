import { Box, Container, Heading, Image, useColorModeValue } from "@chakra-ui/react"
import Section from "../components/section"

const Page = () => {
    return (
        <Container>
            <Box 
            border="lg"
            bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
            p={3}
            mb={6}
            align="center"> 
                Hello, I'm a full-stack developer based in Brazil
            </Box>
            <Box display={{md:'flex'}}>
                <Box flexGrow={1}>
                    <Heading as="h2" variant="page-title">
                        João Falk
                    </Heading>
                    <p>Full-Stack Developer</p>
                </Box>
                <Box 
                flexShrink={0}
                mt={{ base: 4, md: 0 }}
                ml={{ md: 6 }}
                align= "center">
                    <Image
                    borderColor="whiteAlpha.800"
                    borderWidth={2}
                    borderStyle="solid"
                    maxWidth="100px"
                    display="inline-block"
                    borderRadius="full"
                    src="/images/snow.jpg"
                    alt="Profile Image"/>
                </Box>
            </Box>
        <Section delay={0.1}>
            <Heading as="h3" variant="section-title" mb={3}>
                Work
            </Heading>
            <p >Paragraph</p>
        </Section>
        </Container>
    )
}

export default Page