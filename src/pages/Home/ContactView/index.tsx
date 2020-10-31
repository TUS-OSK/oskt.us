import styled from 'styled-components'

export default function ContactView() {
  return (
    <Container>
      {/* ${header(html`
        <i className="fa fa-comments" aria-hidden="true"></i>
      `)(...arguments)} */}
      <section className="content">
        <h1>
          <i className="fa fa-home"></i>
          <span>Clubroom</span>
        </h1>
        <p>
          <span>神楽坂キャンパス 2号館 5階 2507教室</span>
        </p>
        <h1>
          <i className="fa fa-twitter" aria-hidden="true"></i>
          <span>Twitter</span>
        </h1>
        <p>{/* <a href=${config.TWITTER_URL}>@${config.TWITTER_SCREEN_NAME}</a> */}</p>
        <h1>
          <i className="fa fa-envelope" aria-hidden="true"></i>
          <span>Mail</span>
        </h1>
        <p>{/* <a href="mailto:${config.MAIL}">${config.MAIL}</a> */}</p>
      </section>
    </Container>
  )
}

const Container = styled.div`
  /* @apply --body; */

  & .content {
    /* @apply --section; */

    /* @media (max-width: 700px) {
      @apply --section-small;
    } */

    /* color: var(--primary-color); */
    text-align: center;

    & h1 {
      font-size: 20px;
      margin-top: 40px;
    }
  }

  & a {
    color: inherit;
  }
`
