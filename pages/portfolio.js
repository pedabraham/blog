import Link from 'next/link'
import Head from 'next/head'
import Layout from '../components/layout'
import Portfolio from '../components/portfolio'

export default function FirstPost() {
  return (
    <Layout>
      <Head>
        <title>Portfolio</title>
      </Head>
      <h1>Portfolio</h1>
      <Portfolio />
    </Layout>
  )
}
