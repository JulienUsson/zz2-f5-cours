import React from 'react'
import theme from 'theme'
import {
  BlockQuote,
  Cite,
  Deck,
  Heading,
  Image,
  List,
  ListItem,
  Quote,
  Slide,
  Text,
} from 'spectacle'

const Presentation = () => (
  <Deck theme={theme}>
    <Slide>
      <Heading fit>Javascript</Heading>
      <Text fit textAlign="center">
        Javascript everywhere
      </Text>
    </Slide>
  </Deck>
)

export default {
  Presentation,
}