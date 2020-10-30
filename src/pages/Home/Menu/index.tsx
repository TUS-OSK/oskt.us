import { SWIFT } from 'src/utils/animations'
import styled from 'styled-components'
import { T_AROUND } from '../TopBanner'
import { slideMenu } from './animations'
import Link from 'next/link'

const T_SLIDE = 1
export default function Menu() {
  return (
    <Container>
      <MenuList>
        <li>
          <Link href="/about">About</Link>
        </li>
        {/* <li class="item">
          <a href="#page/main/schedule">Schedule</a>
        </li>
        <li class="item">
          <a href="#page/main/news">News</a>
        </li>
        <li class="item">
          <a href="#page/main/archive">Archive</a>
        </li>
        <li class="item">
          <a href="#contact">Contact</a>
        </li> */}
      </MenuList>
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  position: absolute;
  left: 0;
  width: 100%;
  top: 11%;
  animation: ${slideMenu} ${T_SLIDE}s ${SWIFT} ${T_AROUND}s 1 normal both running;
`

const MenuList = styled.div`
  color: black;
  margin: 0;
  list-style: none;
  width: 400px;
  padding: 0 10px;
  box-sizing: border-box;
  display: grid;
  grid-auto-flow: column;
  gap: 5px;
  justify-content: space-around;
`

// & :any-link {
//   text-decoration: none;
//   padding-bottom: 2px;
//   color: rgba(0, 0, 0, 0.4);
//   border-bottom: solid 1px rgba(0, 0, 0, 0.4);
//   font-size: 15px;
// }
