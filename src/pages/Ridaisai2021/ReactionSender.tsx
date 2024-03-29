import { useEffect, useState } from 'react'
import styled from '@emotion/styled'
import { ContentType } from './api'
import { MEDIA_QUERY_MOBILE } from './breakpoint/helper'
import usePostLikeCount from './usePostLikeCount'
import { css } from '@emotion/react'
import Modal from 'react-modal'
import FormrunForm from 'src/components/FormrunForm'

interface Props {
  type: ContentType
  likeCount: number
}

export default function ReactionSender({ type, likeCount }: Props) {
  const [alreadySendAdditionalCount, , sendLikeCount] = usePostLikeCount(type)
  const [additionalCount, setAdditionalCount] = useState(0)
  const [modalIsOpen, setIsOpen] = useState(false)

  const active = additionalCount > 0

  useEffect(() => {
    if (active) {
      const timeoutId = setTimeout(async () => {
        try {
          await sendLikeCount(additionalCount)
        } catch {
          // エラーのときの対応を考える
        } finally {
          setAdditionalCount(0)
        }
      }, 1000)

      return () => clearInterval(timeoutId)
    }
  }, [additionalCount])

  const handleClickLikeButton = () => {
    setAdditionalCount((state) => state + 1)
  }

  return (
    <>
      <Container>
        <ModalToggle onClick={() => setIsOpen(true)}>意見・感想を書く</ModalToggle>
        <div>
          <LikeButton onClick={handleClickLikeButton}>
            <LikeIcon active={active} viewBox="0 0 52 52" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M21.0308 21.2455L16.0344 25.089C15.6806 25.3611 15.2838 25.5721 14.8604 25.7132L11 27L12 42.5L16.4143 41.422C17.1446 41.2437 17.9163 41.4038 18.5153 41.8579C19.8359 42.859 21.3849 43.5158 23.0226 43.7691L31.051 45.011C33.0453 45.3195 35.0701 44.6883 36.5358 43.3013C37.4341 42.4513 38.0724 41.3636 38.3765 40.1649L40.1821 33.0477C40.3888 32.2329 40.3335 31.3737 40.0242 30.5921L39.7603 29.9252L40.2193 28.7653C40.4048 28.2967 40.5 27.7973 40.5 27.2933V26.1825C40.5 25.2209 40.1536 24.2914 39.5242 23.5644L39.0539 23.0212C38.3252 22.1794 37.2785 21.6794 36.1657 21.6416L32 21.5L32.5 18.5L33.4399 15.4809C33.9379 13.8815 33.8388 12.1557 33.1609 10.6238C32.4177 8.94393 31.037 7.62852 29.3231 6.96742L28.4218 6.61978C27.3598 6.21011 26.2312 6 25.0929 6H25.0437C24.0454 6 23.2954 6.91153 23.4878 7.89118L23.7134 9.04044C23.904 10.0112 24 11.0024 24 11.9917C24 13.6483 23.7329 15.3012 23.2091 16.8728L22.3867 19.34C22.1347 20.0961 21.6625 20.7596 21.0308 21.2455Z"
                stroke="black"
                strokeWidth="4"
                strokeLinecap="round"
              />
            </LikeIcon>
          </LikeButton>
          <LikeCount active={active}>{likeCount + alreadySendAdditionalCount + additionalCount}+</LikeCount>
        </div>
      </Container>
      <Modal
        appElement={document.body}
        isOpen={modalIsOpen}
        style={{
          content: {
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
          },
        }}
        onRequestClose={() => setIsOpen(false)}
      >
        <FormrunForm onCancel={() => setIsOpen(false)} to={type} />
      </Modal>
    </>
  )
}

const Container = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  height: min-content;
`

const LikeIcon = styled.svg<{ active: boolean }>`
  width: 100%;
  transition: 0.2s all;

  transform: translate(0, 0) rotate(0);
  fill: ${(p) => (p.active ? '#EDF03D' : '#f3f4ba')};
`

const hoveredLikeIconParentCss = css`
  :hover ${LikeIcon} {
    transform: translate(-2px, -4px) rotate(-10deg);
  }
`

const LikeButton = styled.div`
  display: flex;
  width: 60px;
  height: 60px;
  ${MEDIA_QUERY_MOBILE} {
    width: 40px;
    height: 40px;
  }

  :hover {
    cursor: pointer;
  }

  ${hoveredLikeIconParentCss}
`

const LikeCount = styled.div<{ active: boolean }>`
  display: flex;
  justify-content: center;
  font-weight: bold;
  padding: 0 4px;
  user-select: none;

  font-size: 14px;
  ${MEDIA_QUERY_MOBILE} {
    font-size: 12px;
  }
`

const ModalToggle = styled.div`
  color: #6b76ff;
  cursor: pointer;
`
