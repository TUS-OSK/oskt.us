import {
  convertMarkdownFileNameToSlug,
  convertSlugToMarkdownFileName,
  getArticleByYearAndFileName,
  getArticleFileNamesByYear,
  getArticleYearDirNames,
  MarkdownMeta,
} from 'api/markdowns'
import axios from 'axios'
import { GetStaticPaths, GetStaticPathsResult, GetStaticProps } from 'next'
import Blog from 'src/pages/Blog'

interface Props {
  title: string
  content: string
}

export default function BlogPage({ title, content }: Props) {
  return <Blog title={title} content={content} />
}

type Paths = {
  id?: string
}

export const getStaticProps: GetStaticProps<Props, Paths> = async ({ params }) => {
  const { id } = params!
  const getBlogById = async (id: string) => {
    const res = await axios.get(`http://localhost:30005/posts/${id}`)
    console.log(res)
    return res.data
  }
  const { title, content } = await getBlogById(id)
  return {
    props: {
      title,
      content,
    },
  }
}

export const getStaticPaths: GetStaticPaths<Paths> = async () => {
  return {
      paths: [
        { params: { id: '1'} },
        { params: { id: '2'} },
        { params: { id: '3'} }
       ],
     fallback: false // fallback is set to false because we already know the slugs ahead of time
   }
}
