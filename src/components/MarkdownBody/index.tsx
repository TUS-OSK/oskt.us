import remark from 'remark'
import styled from 'styled-components'
import react from 'remark-react'
import { ReactNode } from 'react'

interface Props {
  body: string
}

export default function MarkdownBody({ body }: Props) {
  return <Container>{remark().use(react).processSync(body).result as ReactNode}</Container>
}

const Container = styled.div`
  line-height: 1.8em;

  &::before {
    content: '';
    display: table;
  }

  &::after {
    content: '';
    display: table;
  }

  strong {
    font-weight: bold;
    font-family: novecentosans, sans-serif;
  }

  a {
    color: inherit;
    text-decoration: underline;
  }

  a[href$='?pretty'] {
    border: solid 1px var(--sub-color);
    display: inline-block;
    padding: 5px 20px;
    text-decoration: none;
    color: var(--sub-color);
    font-weight: bold;
    transition-property: background-color, color, opacity;
    transition-duration: 0.5s;
    font-size: 0.8em;

    &:hover {
      background-color: var(--sub-color);
      color: #fff;
    }

    &:active {
      opacity: 0.7;
    }

    &::before {
      content: '\f105';
      font-family: FontAwesome, sans-serif;
      margin-right: 0.3em;
      font-size: 1.2em;
    }
  }

  [tooltip] {
    background: linear-gradient(transparent 70%, color(var(--sub-color) alpha(50%)) 70%);
    cursor: help;

    &:hover::after {
      content: attr(tooltip);
      display: block;
      position: absolute;
      padding: 8px 12px;
      background-color: rgba(0, 0, 0, 0.9);
      color: var(--secondary-color);
      max-width: 80%;
      font-size: 0.8em;
      border-radius: 2px;
      box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.5);
    }
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: novecentosans, sans-serif;
  }

  h1 {
    font-size: 2.5em;
    line-height: 1.3em;
    text-align: center;

    &::after {
      content: '';
      display: block;
      width: 40px;
      border-bottom: solid 2px var(--base-color);
      margin: 50px auto;
    }
  }

  h2 {
    position: relative;
    font-size: 1.6em;
    margin-bottom: 1.4em;
    margin-top: 1.2em;

    --color: color(var(--base-color) alpha(50%));

    &::after {
      content: '';
      display: block;
      height: 0.1em;
      width: 100%;
      position: absolute;
      bottom: -0.5em;
      background-image: linear-gradient(
        -45deg,
        #fff 25%,
        var(--color) 25%,
        var(--color) 50%,
        #fff 50%,
        #fff 75%,
        var(--color) 75%,
        var(--color)
      );
      background-size: 8px 8px;
    }
  }

  h3 {
    font-size: 1.3em;
    margin-bottom: 0.6em;
    margin-top: 1em;
  }

  blockquote {
    color: #6a737d;
    border-left: 0.25em solid #dfe2e5;
    padding-left: 1em;
    margin-left: 0;
    word-wrap: break-word;
  }

  img {
    width: 300px;
    max-width: 100%;
  }

  p {
    margin-top: 0;
  }

  .lang-warning {
    display: block;
    font-family: inherit;
    padding: 1em 1.5em;
    color: var(--sub-color);
    border-left: 0.25em solid var(--sub-color);
    background-color: color(var(--sub-color) alpha(10%));
    word-wrap: break-word;
  }

  .lang-info {
    display: block;
    font-family: inherit;
    padding: 1em 1.5em;
    color: var(--base-color);
    border-left: 0.25em solid var(--base-color);
    background-color: color(var(--base-color) alpha(10%));
    word-wrap: break-word;
  }
`
