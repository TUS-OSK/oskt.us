/**
 * やっていることの紹介
 */

import * as React from 'react'
import styled from '../../styled-components'

import { Section, Title, Content } from '../common/section'

const BTitle = Title.extend`
  color: ${p => p.theme.color.secondary};
`

const BSection = Section.extend`
  background-color: ${p => p.theme.color.secondaryInverted};
`

const BContent = Content.extend`
  padding: 20px 0;
  color: ${p => p.theme.color.secondarySub};
`

const BlockWrap = styled.div`
  display: flex;
  margin: 0 100px;
  flex-direction: column;

  background-color: rgba(0, 0, 0, 0.2);
`

const blockPadding = 40

const Block = styled.div`
  display: flex;
  padding: 40px ${blockPadding}px;
`

const BlockRight = Block.extend`
  flex-direction: row;
  align-self: flex-end;

  text-align: left;

  & > img {
    transform-origin: right center;
    transform: translate(-${blockPadding}px, 0) scale(1.6);
  }
`

const BlockLeft = Block.extend`
  flex-direction: row-reverse;
  align-self: flex-start;

  text-align: right;

  & > img {
    transform-origin: left center;
    transform: translate(${blockPadding}px, 0) scale(1.6);
  }
`

const BlockTitle = styled.h2`
  margin-top: 0;

  color: ${p => p.theme.color.secondary};
  font-family: novecentosans;
  font-weight: bold;
`

const BlockText = styled.div`
  color: ${p => p.theme.color.secondarySub}
`

const thumbnailHeight = 200

const BlockThumbnail = styled.img`
  display: block;
  height: ${thumbnailHeight}px;

  box-shadow: 0 2px 20px 0 rgba(0, 0, 0, 0.8);
`

const BlockDescription = styled.div`
`

const BlockBreak = styled.hr`
  align-self: stretch;
  margin: 0 ${thumbnailHeight * 3 / 4 + blockPadding}px;

  border: none;
  border-bottom: solid 1px rgba(255, 255, 255, 0.1);
`

type Props = {
  className?: string
}

const Description: React.SFC<Props> = function Description (p) {
  return (
    <BSection className={p.className}>
      <BTitle>What we do?</BTitle>
      <BContent>
        <BlockWrap>
          <BlockRight>
            <BlockThumbnail src='/static/images/dummy.png' />
            <BlockDescription>
              <BlockTitle>Applied Mathmatics</BlockTitle>
              <BlockText>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus earum consequatur, vitae quaerat delectus totam quos dolor libero repudiandae nesciunt provident aperiam quae! Natus ab rerum repellendus nobis beatae? Dolorem?</BlockText>
            </BlockDescription>
          </BlockRight>
          <BlockBreak />
          <BlockLeft>
            <BlockThumbnail src='/static/images/dummy.png' />
            <BlockDescription>
              <BlockTitle>Computer Graphics</BlockTitle>
              <BlockText>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus earum consequatur, vitae quaerat delectus totam quos dolor libero repudiandae nesciunt provident aperiam quae! Natus ab rerum repellendus nobis beatae? Dolorem?</BlockText>
            </BlockDescription>
          </BlockLeft>
          <BlockBreak />
          <BlockRight>
            <BlockThumbnail src='/static/images/dummy.png' />
            <BlockDescription>
              <BlockTitle>Web Application</BlockTitle>
              <BlockText>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus earum consequatur, vitae quaerat delectus totam quos dolor libero repudiandae nesciunt provident aperiam quae! Natus ab rerum repellendus nobis beatae? Dolorem?</BlockText>
            </BlockDescription>
          </BlockRight>
          <BlockBreak />
          <BlockLeft>
            <BlockThumbnail src='/static/images/dummy.png' />
            <BlockDescription>
              <BlockTitle>Virtual Reality</BlockTitle>
              <BlockText>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus earum consequatur, vitae quaerat delectus totam quos dolor libero repudiandae nesciunt provident aperiam quae! Natus ab rerum repellendus nobis beatae? Dolorem?</BlockText>
            </BlockDescription>
          </BlockLeft>
        </BlockWrap>
      </BContent>
    </BSection>
  )
}

export default Description
