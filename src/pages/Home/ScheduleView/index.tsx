import styled from 'styled-components'
import { Section, SectionTitle } from 'src/components/MainLayout/elements'
import Calendar from './Calendar'

export default function ScheduleView() {
  return (
    <Container>
      <SectionTitle>SCHEDULE</SectionTitle>
      <div className="content">
        <div className="timeline">
          <Calendar
            start={4}
            smallEvents={[
              {
                month: 8,
                jaName: '夏合宿',
                enName: 'Summer Camp',
              },
            ]}
          />
          <div className="detail column">
            {/* <span className="row events big l-group">
                <div className="ja">レクチャー班活動</div>
                <div className="en">Lecture Groups</div>
              </span>
              <span className="row events big p-group">
                <div className="ja">プロジェクト班活動</div>
                <div className="en">Project Groups</div>
              </span> */}
          </div>
        </div>
      </div>
    </Container>
  )
}

const GRID = 40
const MARGIN = 5
const GRID_BODER = 1

const BASE_COLOR = '#5d639e'
const ALPHA_BASE_COLOR = 'rgba(93, 100, 158, 0.7)'
const SUB_COLOR = '#da6272'
const DARK_SUB_COLOR = '#d24154'

// FIXME: ちゃんとする
const Container = styled(Section)`
  overflow: hidden;

  & .timeline {
    width: 80%;
    margin: 0 auto;

    @media (max-width: 700px) {
      width: 100%;
    }
  }

  & .table {
    position: relative;

    & .detail {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
    }
  }

  & .events {
    box-sizing: border-box;
    position: absolute;
    border-style: solid;
    border-width: 2px;
    padding: 15px 15px 13px;
    display: flex;
    align-items: baseline;
    transition-property: transform, box-shadow;
    transition-duration: 0.15s;
    transition-timing-function: ease;
    user-select: none;
    white-space: nowrap;
    text-decoration: none;

    & > div {
      margin-right: 4px;
    }

    & .ja {
      font-size: 16px;
      color: #fffd;
    }

    & .en {
      font-size: 13px;
      color: #fff7;
    }

    &:hover {
      transition-timing-function: ease;
      transform: scale(1.05);
      box-shadow: 0 2px 10px 0 #0003;

      /* FIXME: ちゃんとする */
      /* &::after {
        opacity: 1;
      } */
    }

    &::after {
      content: 'DETAIL';
      opacity: 0;
      font-family: 'novecentosans';
      font-weight: bold;
      font-size: 14px;
      flex: 1;
      text-align: right;
      transition-property: opacity;
      transition-duration: 0.3s;
    }

    &.big {
      width: 80%;
      left: 10%;
      border-color: ${BASE_COLOR};
      background-color: ${ALPHA_BASE_COLOR};
      z-index: 1;

      &::after {
        color: ${BASE_COLOR};
      }
    }

    &.small {
      width: 60%;
      left: 20%;
      border-color: ${DARK_SUB_COLOR};
      background-color: ${SUB_COLOR};
      z-index: 2;

      &::after {
        color: ${DARK_SUB_COLOR};
      }
    }
  }

  & .l-group {
    height: ${GRID * 8 - MARGIN * 2 - GRID_BODER}px;
    top: ${MARGIN + GRID_BODER}px;
  }

  & .summer-camp {
    top: ${GRID * 4}px;
  }

  & .festival {
    top: ${GRID * 7}px;
  }

  & .p-group {
    height: ${GRID * 4 - MARGIN * 2 - GRID_BODER}px;
    top: ${GRID * 8 + MARGIN + GRID_BODER}px;
  }

  & .winter-camp {
    top: ${GRID * 10}px;
  }
`
