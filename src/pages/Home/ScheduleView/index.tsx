import styled from 'styled-components'
import { Section } from 'src/components/MainLayout/elements'

export default function ScheduleView() {
  return (
    <Container>
      <div className="title">SCHEDULE</div>
      <div className="content">
        <div className="timeline">
          <div className="header">
            <div className="month">Month</div>
            <div className="detail">Activities / Events</div>
          </div>
          <div className="table">
            <div className="month column">
              <div className="row label">4</div>
              <div className="row label">5</div>
              <div className="row label">6</div>
              <div className="row label">7</div>
              <div className="row label">8</div>
              <div className="row label">9</div>
              <div className="row label">10</div>
              <div className="row label">11</div>
              <div className="row label">12</div>
              <div className="row label">1</div>
              <div className="row label">2</div>
              <div className="row label">3</div>
            </div>
            <div className="detail column">
              <a href="#page/2019/lecture" className="row events big l-group">
                <div className="ja">レクチャー班活動</div>
                <div className="en">Lecture Groups</div>
              </a>
              <a href="#page/main/schedule" className="row events small summer-camp">
                <div className="ja">夏合宿</div>
                <div className="en">Summer Camp</div>
              </a>
              <a href="#page/2017/festival" className="row events small festival">
                <div className="ja">理大祭</div>
                <div className="en">Festival</div>
              </a>
              <a href="#page/2019/project" className="row events big p-group">
                <div className="ja">プロジェクト班活動</div>
                <div className="en">Project Groups</div>
              </a>
              <a href="#page/main/schedule" className="row events small winter-camp">
                <div className="ja">冬合宿</div>
                <div className="en">Winter Camp</div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </Container>
  )
}

// :root {
//   --grid: 40px;
//   --margin: 5px;
//   --grid-border: 1px;
//   --alpha-base-color: color(var(--base-color) alpha(70%));
//   --dark-sub-color: color(var(--sub-color) lightness(-8%));
// }

const Container = styled(Section)`
  overflow: hidden;

  & .title {
    /* @apply --section-title;

    @media (max-width: 700px) {
      @apply --section-title-small;
    } */

    font-family: 'novecentosans';
    font-weight: bold;
    text-align: center;
    font-size: 25px;
    /* color: var(--primary-color); */
  }

  & .timeline {
    width: 80%;
    margin: 0 auto;

    @media (max-width: 700px) {
      width: 100%;
    }
  }

  & .header {
    display: flex;
    text-align: center;
    font-size: 15px;
    height: 25px;

    & .month {
      width: 10%;
    }

    & .detail {
      width: 80%;
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

  & .label {
    font-size: 15px;
    box-sizing: border-box;
    /* height: var(--grid); */
    border-top: 1px solid #ddd;
    padding: 3px 5px;
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
    cursor: pointer;
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
      /* transition-timing-function: var(--parabola); */
      transform: scale(1.05);
      box-shadow: 0 2px 10px 0 #0003;

      &::after {
        opacity: 1;
      }
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
      /* border-color: var(--base-color);
      background-color: var(--alpha-base-color); */
      z-index: 1;

      &::after {
        color: var(--base-color);
      }
    }

    &.small {
      width: 60%;
      left: 20%;
      /* background-color: var(--sub-color);
      border-color: var(--dark-sub-color); */
      z-index: 2;

      /* &::after {
        color: var(--dark-sub-color);
      } */
    }
  }

  /* & .l-group {
    height: calc(var(--grid) * 8 - var(--margin) * 2 - var(--grid-border));
    top: calc(var(--margin) + var(--grid-border));
  }

  & .summer-camp {
    top: calc(var(--grid) * 4);
  }

  & .festival {
    top: calc(var(--grid) * 7);
  }

  & .p-group {
    height: calc(var(--grid) * 4 - var(--margin) * 2 - var(--grid-border));
    top: calc(var(--grid) * 8 + var(--margin) + var(--grid-border));
  }

  & .winter-camp {
    top: calc(var(--grid) * 10);
  } */
`
