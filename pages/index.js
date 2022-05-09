import { ChevronRightIcon } from '@chakra-ui/icons'
import {
  Box,
  Button,
  Container,
  Heading,
  Image,
  Link,
  useColorModeValue
} from '@chakra-ui/react'
import NextLink from 'next/link'
import { BioSection, BioYear } from '../components/bio'
import Layout from '../components/layouts/article'
import Paragraph from '../components/paragraph'
import Section from '../components/section'

const Page = () => {
  return (
    <Layout>
      <Container>
        <Box
          border="lg"
          bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
          p={3}
          mb={6}
          align="center"
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing.
        </Box>
        <Box display={{ md: 'flex' }}>
          <Box flexGrow={1}>
            <Heading as="h2" variant="page-title">
              Your Name
            </Heading>
            <p>Lorem ipsum dolor.</p>
          </Box>
          <Box
            flexShrink={0}
            mt={{ base: 4, md: 0 }}
            ml={{ md: 6 }}
            align="center"
          >
            <Image
              borderColor="whiteAlpha.800"
              borderWidth={2}
              borderStyle="solid"
              maxWidth="100px"
              display="inline-block"
              borderRadius="full"
              src="/images/snow.jpg"
              alt="Profile Image"
            />
          </Box>
        </Box>
        <Section delay={0.1}>
          <Heading as="h3" variant="section-title" mb={3}>
            Work
          </Heading>
          <Paragraph>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
            turpis arcu, congue eu mauris eget, commodo viverra ligula. Donec
            magna sem, tincidunt eu molestie sed, egestas non nisl. Duis{' '}
            <NextLink href="/works/inkdrop">
              <Link>quam</Link>
            </NextLink>
            .
          </Paragraph>
          <Box align="center" my={4}>
            <NextLink href="/works">
              <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
                My portfolio
              </Button>
            </NextLink>
          </Box>
        </Section>
        <Section delay={0.2}>
          <Heading as="h3" variant="section-title" mb={3}>
            Bio
          </Heading>
          <BioSection>
            <BioYear>1999</BioYear>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
            suscipit.
          </BioSection>
          <BioSection>
            <BioYear>2017</BioYear>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
            non.
          </BioSection>
          <BioSection>
            <BioYear>2020</BioYear>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
            fermentum.
          </BioSection>
          <BioSection>
            <BioYear>2021</BioYear>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ipsum.
          </BioSection>
        </Section>
        <Section delay={0.2}>
          <Heading as="h3" variant="section-title" mb={3}>
            I ♥
          </Heading>
          <Paragraph>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
            turpis arcu, congue eu mauris eget, commodo viverra ligula. Donec
            magna sem, tincidunt eu molestie sed, egestas non nisl. Duis quam.
          </Paragraph>
        </Section>
      </Container>
    </Layout>
  )
}

export default Page
