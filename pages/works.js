import { Container, Divider, Heading, SimpleGrid } from '@chakra-ui/react'
import { WorkGridItem } from '../components/grid-item'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import thumbInkdrop from '../public/images/atom.jpg'

const Works = () => {
  return (
    <Layout>
      <Container>
        <Heading as="h3" fontSize={20} mb={4}>
          Works
        </Heading>

        <SimpleGrid columns={[1, 1, 2]} gap={6}>
          <Section delay={0.3}>
            <WorkGridItem id="ipsum" title="Lorem" thumbnail={thumbInkdrop}>
              Lorem ipsum dolor sis amet.
            </WorkGridItem>
          </Section>
          <Section delay={0.3}>
            <WorkGridItem id="ipsum" title="Ipsum" thumbnail={thumbInkdrop}>
              Lorem ipsum dolor sis amet.
            </WorkGridItem>
          </Section>
          <Section delay={0.4}>
            <Divider my={6} />
            <Heading as="h3" fontSize={20} mb={4}>
              Old works
            </Heading>
            <Section delay={0.4}>
              <WorkGridItem id="dolor" title="Dolor" thumbnail={thumbInkdrop}>
                Lorem ipsum dolor sis amet.
              </WorkGridItem>
            </Section>
          </Section>
        </SimpleGrid>
      </Container>
    </Layout>
  )
}

export default Works
