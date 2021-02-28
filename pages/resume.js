import Link from 'next/link'
import Head from 'next/head'
import Layout from '../components/layout'
import CV from '../components/cv'

export default function FirstPost() {
  return (
    <Layout>
      <Head>
        <title>Resume</title>
      </Head>
      <h1>Resume</h1>
      <CV />
    </Layout>
  )
}
