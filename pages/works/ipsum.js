import { Badge, Container, Link, List, ListItem } from '@chakra-ui/react'
import Layout from '../../components/layouts/article'
import { Meta, Title, WorkImage } from '../../components/work'
import P from '../../components/paragraph'
import { ExternalLinkIcon } from '@chakra-ui/icons'

const Work = () => {
  return (
    <Layout title="Lorem">
      <Container>
        <Title>
          Lorem Ipsum <Badge>2016</Badge>
        </Title>
        <P>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. In iaculis,
          diam vitae scelerisque suscipit, sapien lorem tincidunt leo, non
          congue purus erat vel nisl. Phasellus placerat arcu vel enim rhoncus,
          vitae lacinia risus imperdiet. Morbi tincidunt orci quis orci rhoncus
          fringilla id eu odio.
        </P>
        <List ml={4} my={4}>
          <ListItem>
            <Meta>Website</Meta>
            <Link href="https://www.google.com">
              https://www.google.com
              <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
          <ListItem>
            <Meta>Website</Meta>
            <span>Windows/macOS/Linux/iOS/Android</span>
          </ListItem>
          <ListItem>
            <Meta>Stack</Meta>
            <span>Javascript, Typescript, Nest, React, Node, Python</span>
          </ListItem>
        </List>

        <WorkImage src="/images/atom.jpg" alt="Lorem" />
        <WorkImage src="/images/church.jpg" alt="Church" />
      </Container>
    </Layout>
  )
}

export default Work
