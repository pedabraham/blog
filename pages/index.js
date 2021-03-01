import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import { getSortedPostsData } from '../lib/posts'
import Link from 'next/link'
import Date from '../components/date'


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
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
      <p>Hi 👋! I'm a software developer. I’m someone who does PSS, problem-solving as a service, using tech especially web tools, passionate about the internet, and amazed by computer vision.</p>
      </section>
      <section className={utilStyles.headingMd}>
      <Link href="/portfolio">
        <a className={utilStyles.redText}>
        <h3>💼 Portfolio</h3>
        </a>
      </Link>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
       <h2 className={utilStyles.headingLg}>Blog</h2>
       <ul className={utilStyles.list}>
         {allPostsData.map(({ id, date, title }) => (
           <li className={utilStyles.listItem} key={id}>
            <Link href={`/posts/${id}`}>
              <a>{title}</a>
            </Link>
            <br />
            <small className={utilStyles.lightText}>
              <Date dateString={date} />
            </small>
          </li>
         ))}
       </ul>
     </section>
    </Layout>
  )
}
