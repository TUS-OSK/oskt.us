import { ReactNode } from 'react'
import { PageHead } from 'src/components/Head'
import MainLayout from 'src/components/MainLayout'
import MarkdownBody from 'src/components/MarkdownBody'
import { FixedSizeContents, Section } from 'src/components/MainLayout/elements'
import { externalTo, mailTo, urlPageMdEdit } from 'src/utils/urls'
import styled from 'styled-components'
import { EnvelopeIcon, HomeIcon, TwitterIcon } from './icons'

interface Props {
  title?: string
  clubroom: string
  twitterId: string
  mail: string
  body: string
}

const ICON_HEIGHT = 20
const TITLE_GAP = 4

export default function Contact({ title, clubroom, twitterId, mail, body }: Props) {
  return (
    <>
      <PageHead title={title}></PageHead>
      <MainLayout>
        <Section>
          <FixedSizeContents size={440}>
            <ContactList>
              <ContactItem icon={<HomeIcon />} label="Clubroom">
                {clubroom}
              </ContactItem>
              <ContactItem icon={<TwitterIcon />} label="Twitter">
                <ExternalLink target="_blank" rel="noopener" href={externalTo('twitter', twitterId)}>
                  @{twitterId}
                </ExternalLink>
              </ContactItem>
              <ContactItem icon={<EnvelopeIcon />} label="Mail">
                <ExternalLink href={mailTo(mail)}>{mail}</ExternalLink>
              </ContactItem>
            </ContactList>
            <MarkdownBody centered body={body} editRequestUrl={urlPageMdEdit('archive')}></MarkdownBody>
          </FixedSizeContents>
        </Section>
      </MainLayout>
    </>
  )
}

const ContactList = styled.div``

const ExternalLink = styled.a`
  color: #333;
`

interface ContactProps {
  icon: ReactNode
  label: string
  children: ReactNode
}

function ContactItem({ icon, label, children }: ContactProps) {
  return (
    <ContactContainer>
      <ContactTitle>
        <Icon>{icon}</Icon>
        {label}
      </ContactTitle>
      {children}
    </ContactContainer>
  )
}

const ContactTitle = styled.div`
  display: flex;
  align-items: center;
  font-size: ${ICON_HEIGHT}px;
  line-height: 1;
  font-weight: bold;
  color: #333;
  text-align: center;
  margin-bottom: 16px;
`

const Icon = styled.span`
  display: inline-flex;
  vertical-align: top;
  width: ${ICON_HEIGHT}px;
  height: ${ICON_HEIGHT}px;
  margin-right: ${TITLE_GAP}px;
`

const ContactContainer = styled.div`
  margin-bottom: 40px;
  display: flex;
  flex-flow: column;
  align-items: center;
`
