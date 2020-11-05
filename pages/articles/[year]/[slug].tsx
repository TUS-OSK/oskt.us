import {
  convertMarkdownFileNameToSlug,
  convertSlugToMarkdownFileName,
  getArticleByYearAndFileName,
  getArticleFileNamesByYear,
  getArticleYearDirNames,
} from 'api/markdowns'
import { GetStaticPaths, GetStaticPathsResult, GetStaticProps } from 'next'
import Article from 'src/pages/Article'

interface Props {
  body: string
}

export default function AboutPage({ body }: Props) {
  return <Article title={undefined} body={body} />
}

type Paths = {
  year?: string
  slug?: string
}

export const getStaticProps: GetStaticProps<Props, Paths> = async ({ params }) => {
  // NOTE: [year]/[slug].tsxの中だったらparamsは全部入るはず？だと思っているけどそうじゃなかったらごめんなさい
  // https://nextjs.org/docs/basic-features/data-fetching#getstaticprops-static-generation
  const { year, slug } = params!
  const fileName = convertSlugToMarkdownFileName(slug!)
  const { body } = getArticleByYearAndFileName(year!, fileName)
  return {
    props: {
      body,
    },
  }
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
              slug: convertMarkdownFileNameToSlug(fileName),
            },
          })),
        ],
      }
    },
    { paths: [], fallback: false }
  )
}
