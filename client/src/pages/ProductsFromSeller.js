import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Card, Divider, Table } from "antd";

const columns = [
  {
    title: "Category",
    dataIndex: "category",
    key: "category"
  },
  {
    title: "Description",
    dataIndex: "description",
    key: "description"
  },
  {
    title: "Price",
    dataIndex: "price",
    key: "price"
  }
];

const ProductsFromSeller = () => {

  const [sellerProducts, setSellerProducts] = useState([])
  useEffect(() => {
    getSellerProducts()
  }, [])
  const normalizeData = (data) => {
    let ids = data.map(t => t.seller_id)
    let uniqueIds = [... new Set(ids)]

    let normalizedData = uniqueIds.map(id => {
      let products = data.filter(d => d.seller_id === id)
      let filterProducts = products.map(prod => {
        return { key: prod.id, category: prod.category, description: prod.description, price: prod.price }
      })
      return {
        name: products[0].seller_name,
        email: products[0].seller_email,
        products: filterProducts
      }
    })
    return normalizedData
  };
  console.log(sellerProducts);

  const getSellerProducts = async () => {
    try {
      let res = await axios.get('/api/products')
      console.log(res.data)
      let normalizedData = normalizeData(res.data)
      setSellerProducts(normalizedData)
    } catch (error) {
      alert('Error has occured while getting products')
    }
  }
  const renderSellerProducts = () => {
    return sellerProducts.map((product) => {
      return (
        <>
          <div>
            <Card title={product.name} style={{ width: 300, marginBottom: "20px" }}>
              {product.email}
            </Card>
            <Table columns={columns} dataSource={product.products} />
          </div>
          <Divider orientation="left"></Divider>
        </>
      );
    });
  };
  return (
    <div>
      <h1>Products Page</h1>
      <div>{renderSellerProducts()}</div>
    </div>
  )
}

export default ProductsFromSeller;

