import { createSlugByArticleFileName, getArticleFileNamesByYear, getArticleYearDirNames } from 'api/markdowns'
import { GetStaticPaths, GetStaticPathsResult, GetStaticProps } from 'next'
import Article from 'src/pages/Article'

interface Props {}

export default function AboutPage({}: Props) {
  return <Article />
}

export const getStaticProps: GetStaticProps<Props> = async () => {
  return {
    props: {},
  }
}

type Paths = {
  year?: string
  slug?: string
}

export const getStaticPaths: GetStaticPaths<Paths> = async () => {
  const yearDirNames = getArticleYearDirNames()

  return yearDirNames.reduce(
    (prev: GetStaticPathsResult<Paths>, year) => {
      const fileNames = getArticleFileNamesByYear(year)
      return {
        ...prev,
        paths: [
          ...prev.paths,
          ...fileNames.map((fileName) => ({
            params: {
              year,
              slug: createSlugByArticleFileName(fileName),
            },
          })),
        ],
      }
    },
    { paths: [], fallback: false }
  )
}
