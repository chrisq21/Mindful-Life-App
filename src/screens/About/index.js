import React from 'react'
import { ScrollView, Linking } from 'react-native'
import logoSrc from '../../assets/logo.png'
import {
  AboutScreen,
  LogoImage,
  AboutText,
  AboutTextWithVerticalMargins,
  LinksWrapper,
  Link,
} from './styles'

function About() {
  return (
    <AboutScreen>
      <ScrollView>
        <LogoImage
          resizeMode="contain"
          source={logoSrc}
          style={{ height: undefined, aspectRatio: 1.495 }}
        />
        <AboutText>
          Mindful Life Project began teaching mindfulness in Richmond, CA elementary schools in
          October of 2012 working with 150 students. Now, Mindful Life Project works with thousands
          of students and teachers in underserved schools.
        </AboutText>
        <AboutText>
          Mindful Life Project&apos;s mission is to empower children through mindfulness, yoga,
          expressive arts and performing arts to gain self-awareness, confidence, self-regulation
          and resilience, leading to lifelong success.
        </AboutText>
        <LinksWrapper>
          <Link onPress={() => Linking.openURL('https://mindfullifeproject.org/programs/')}>
            Our Work
          </Link>
          <Link
            onPress={() =>
              Linking.openURL('https://www.mightycause.com/organization/The-Mindful-Life-Project')
            }
          >
            Donate
          </Link>
        </LinksWrapper>
      </ScrollView>
    </AboutScreen>
  )
}

export default About
