import React from 'react'
import { ScrollView, Linking } from 'react-native'
import iconImgSrc from '../../assets/icon.png'
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
        <LogoImage resizeMode="contain" source={iconImgSrc} />
        <AboutText>
          Mindful Life Project began teaching mindfulness in Richmond, CA elementary schools in
          October of 2012 working with 150 students. Now, Mindful Life Project works with thousands
          of students and teachers in underserved schools.
        </AboutText>
        <AboutTextWithVerticalMargins>
          Mindful Life Project&apos;s mission is to empower children through mindfulness, yoga,
          expressive arts and performing arts to gain self-awareness, confidence, self-regulation
          and resilience, leading to lifelong success.
        </AboutTextWithVerticalMargins>
        <LinksWrapper>
          <Link onPress={() => Linking.openURL('http://mindfullifeproject.org/our-team/')}>
            Our Team
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
