import { Col, Row, Select } from 'antd';
import axios from 'axios'
import React, { useState, useEffect } from 'react'
import ProductCard from '../components/ProductCard';
const { Option } = Select;

const Categories = () => {
  const [categories, setCategories] = useState(null)
  const [categoryProducts, setCategoryProducts] = useState(null)
  useEffect(() => {
    getCategories()
  }, [])

  const getCategories = async () => {
    try {
      let res = await axios.get('/api/categories')
      setCategories(res.data)
    } catch (err) {
      alert('err in getCategories')
    }
  }
  const handleChange = async (value) => {
    try {
      let res = await axios.get('/api/cities/${value}')
      setCategoryProducts(res.data)
    } catch (err) {
      alert('err in handleChange')
      console.log(err)
    }
  }
  const renderSelect = () => {
    if (!categories) {
      return (
        <Select style={{ width: 120 }} loading>
        </Select>
      )
    } else {
      return (
        <Select style={{ width: 120 }} onChange={handleChange}>
          {categories.map(c => <Option key={c} value={c}>{c}</Option>)}
        </Select>
      )
    }
  }

  const renderCategory = () => {
    if (!categoryProducts) {
      return <p>Loading Categories / or select a Category</p>
    }
    return (
      <div>
        <Row>
          {categoryProducts.map(cp => {
            return (
              <Col key={cp.id} sm={24} md={12} lg={8}>
                <ProductCard {...cp} />
              </Col>
            )
          })}
        </Row>
      </div>
    )
  }
  return (
    <div>
      <h1>Categories</h1>
      {renderSelect()}
      {renderCategory()}
    </div>
  )
}

export default Categories;