// import { useState } from "react";
// import Main from "../../components/main/Main";
// import Background from "../../components/main/Main";

// const MainContainer = () => {

//   return <Background />;
// };

// export default MainContainer;

import React, { useState, useEffect } from 'react'
import CategoryList from '../../components/main/category/CategoryList'
import axios from 'axios'

const CategoryWrapperContainer = ({ match }) => {
  const [category, setCategory] = useState({
    status: 'idle',
    item: null,
  })

  const url = 'http://3.35.187.65:3000'

  const getCategoryAPI = async () => {
    const { data } = await axios.get(`${url}/main/`)
    try {
      console.log('[SUCCESS] GET CATEGORY', data)
      return data
    } catch (e) {
      console.log('[FAIL] GET CATEGORY')
    }
  }

  useEffect(() => {
    ;(async () => {
      const data = await getCategoryAPI()
      try {
        setCategory({
          status: 'pending',
          item: null,
        })
        setCategory({
          status: 'resolved',
          item: data,
        })
      } catch (e) {
        setCategory({
          status: 'rejected',
          item: null,
        })
      }
    })()
  }, [])

  switch (category.status) {
    case 'idle':
      return <>idle</>
    case 'rejected':
      return <>Error</>
    case 'pending':
      return <>pending</>
    case 'resolved':
    default:
      return (
        <CategoryList match={match} newList={category.item.data.categories} />
      )
  }
}

export default CategoryWrapperContainer
