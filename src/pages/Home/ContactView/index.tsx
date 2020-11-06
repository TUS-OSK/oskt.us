import { SectionTitle } from 'src/components/MainLayout/elements'
import { EnvelopeIcon, MarkerIcon, TwitterIcon } from 'src/pages/Contact/icons'
import styled from 'styled-components'
import { CommentsIcon, CompassIcon } from './icons'

export interface ContactData {
  clubroom: string
  twitterId: string
  mail: string
}

interface Props {
  contactData: ContactData
}

export default function ContactView({ contactData: { clubroom, twitterId, mail } }: Props) {
  return (
    <Container>
      <LocationSection>
        <Title>
          <CompassIcon />
          LOCATION
        </Title>
        <Item>
          <IconWrapper>
            <MarkerIcon />
          </IconWrapper>
          {clubroom}
        </Item>
      </LocationSection>
      <ContactSection>
        <Title>
          <CommentsIcon />
          CONTACT
        </Title>
        <Item>
          <IconWrapper>
            <TwitterIcon />
          </IconWrapper>
          @{twitterId}
        </Item>
        <Item>
          <IconWrapper>
            <EnvelopeIcon />
          </IconWrapper>
          {mail}
        </Item>
      </ContactSection>
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  flex-flow: row;

  @media (max-width: 700px) {
    flex-flow: column;
  }
`
const Section = styled.div`
  padding: 60px 40px;
  flex: 1;
`

const LocationSection = styled(Section)`
  background-color: #7987bb;
`

const ContactSection = styled(Section)`
  background-color: #da8d9b;
`

const Title = styled(SectionTitle)`
  display: flex;
  flex-flow: column;
  align-items: center;
  margin-bottom: 40px;
`

const ITEM_HEIGHT = 24

const Item = styled.div`
  display: flex;
  justify-content: center;
  font-size: 16px;
  line-height: ${ITEM_HEIGHT}px;
  color: #333;
  max-width: 240px;
  text-align: center;
  margin: 0 auto 16px;
`

const IconWrapper = styled.div`
  width: ${ITEM_HEIGHT}px;
  height: ${ITEM_HEIGHT}px;
  margin-right: 4px;
`
