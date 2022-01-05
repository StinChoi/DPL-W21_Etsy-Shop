import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Card, Divider, Table } from "antd";

const Products = (props) => {
  useEffect(() => {
    getProductsFromSeller
  })
}

// class Products extends React.Component {
//   state = {agent: [], };
//   componentDidMount() {
//     axios.get('/api/products')
//     .then(res => {
//       let sellers = [];
//       let { data, } = res;
//       let ids = [...new Set(data.map(s => s.seller_id))];
//       ids.map(id => {
//         let products = data.filter(s => s.seller_id === id);
//         let {seller_id, email, name} = products = 
//       })
//     })
//   }
// }