import { Box, Container, Heading } from "@chakra-ui/react"

const Page = () => {
    return (
        <Container>
            <Box border="lg" bg="red" p={3} mb={6} align="center"> 
                Hello, I'm a full-stack developer based in Brazil
            </Box>
            <Box display={{md:'flex'}}>
                <Box flexGrow={1}>
                    <Heading as="h2" variant="page-title">
                        João Falk
                    </Heading>
                    <p>Full-Stack Developer</p>
                </Box>
            </Box>
        </Container>
    )
}

export default Page