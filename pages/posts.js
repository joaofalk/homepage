import Layout from '../components/layouts/article'
import Section from '../components/section'
import { GridItem } from '../components/grid-item'
import { Container, Heading, SimpleGrid } from '@chakra-ui/react'
import thumbnail from '../public/images/footprint.png'

const Posts = () => (
  <Layout title="Posts">
    <Container>
      <Heading as="h3" fontSize={20} mb={4}>
        Popular Posts
      </Heading>
      <Section delay={0.1}>
        <SimpleGrid columns={[1, 2, 3]} gap={6}>
          <GridItem
            title="Lorem"
            thumbnail={thumbnail}
            href="https://www.google.com"
          />
          <GridItem
            title="Ipsum"
            thumbnail={thumbnail}
            href="https://www.google.com"
          />
          <GridItem
            title="Dolor"
            thumbnail={thumbnail}
            href="https://www.google.com"
          />
        </SimpleGrid>
      </Section>
    </Container>
  </Layout>
)

export default Posts
