import React from 'react';
import { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import { http } from '../../utils/http';
import { Product } from '../../utils/model';

type ProductDetailPageProps = {
  product: Product;
}

export const PaductDetailPage: NextPage<ProductDetailPageProps> = ({ product }) => {
  return (
    <div>
      <h3>{product.name}</h3>
      <label>{product.price}</label>
      <button>Adicionar ao carrinho</button>
    </div>)
}

export default PaductDetailPage;

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: 'blocking'
  }
}

export const getStaticProps: GetStaticProps = async (context) => {
  const { id } = context.params || {};

  console.log("MEU ID -> " + id)

  const { data: product } = await http.get(`products/${id}`);

  return {
    props: { product }
  }
}