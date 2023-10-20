import Head from 'next/head'
import {getSortedPostsData} from '/lib/posts'
import utilStyles from '/styles/utils.module.css'

export async function getStaticProps() {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData
    }
  }
}

export default function Home({ allPostsData }) {
  return (
    <>
      <Head>…</Head>
      <section className={utilStyles.headingMd}>…</section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ fileNameWithoutProfix, date, title }) => (
            <li className={utilStyles.listItem} key={fileNameWithoutProfix}>
              {title}
              <br />
              {fileNameWithoutProfix}
              <br />
              {date}
            </li>
          ))}
        </ul>
      </section>
    </>
  )
}