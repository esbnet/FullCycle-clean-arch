import type { GetServerSideProps, NextPage } from 'next'
import Head from 'next/head'

import { http } from '../utils/http'
import { Product } from '../utils/model'

interface Props {
  products: Product[]
}

const Home: NextPage<Props> = ({ products }) => {
  return (
    <div >
      <Head>
        <title>Clean Arch</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1>Ecommerce Full Cycle</h1>

      <ul>
        {products.map((product, key) => (
          <li key={key}>
            <label htmlFor="">Nome: </label> {product.name} | <a href="#">Ver</a>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Home

export const getServerSideProps: GetServerSideProps = async () => {

  const { data: products } = await http.get("products");

  return {
    props: {
      products
    }
  }
}