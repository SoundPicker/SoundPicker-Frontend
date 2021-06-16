import React, { useState, useEffect } from 'react'
import axios from 'axios'
import StartLoading from '../../components/loading/StartLoading'
import TestEnd from '../../components/test_end/TestEnd'
import { useHistory, matchPath } from 'react-router-dom'

const TestEndContainer = ({ match }) => {
  const history = useHistory()
  const parentMatch = matchPath(history.location.pathname, {
    path: '/test/:id',
  })

  const [recommend, setRecommend] = useState({
    status: 'idle',
    item: null,
  })

  const [title, setTitle] = useState({
    status: 'idle',
    item: null,
  })

  const url = 'https://shop.soundpicker.shop'

  const getRecommendAPI = async () => {
    // id 값 추가하기
    const { data } = await axios.get(`${url}${history.location.pathname}`)
    try {
      return data
    } catch (e) {}
  }

  useEffect(() => {
    ;(async () => {
      const data = await getRecommendAPI()
      try {
        setRecommend({
          status: 'pending',
          item: null,
        })
        setRecommend({
          status: 'resolved',
          item: data,
        })
      } catch (e) {
        setRecommend({
          status: 'rejected',
          item: null,
        })
      }
    })()
  }, [])

  const getTitleAPI = async id => {
    // id 값 추가하기
    const { data } = await axios.get(`${url}/test/${id}`)
    try {
      return data
    } catch (e) {}
  }

  useEffect(() => {
    ;(async () => {
      const data = await getTitleAPI(parentMatch.params.id)
      try {
        setTitle({
          status: 'pending',
          item: null,
        })
        setTitle({
          status: 'resolved',
          item: data,
        })
      } catch (e) {
        setTitle({
          status: 'rejected',
          item: null,
        })
      }
    })()
  }, [parentMatch.params.id])

  if (recommend.status === 'idle' || title.status === 'idle') {
    return <StartLoading />
  } else if (recommend.status === 'rejected' || title.status === 'rejected') {
    return <>Error</>
  } else if (recommend.status === 'pending' || title.status === 'pending') {
    return <StartLoading />
  } else if (recommend.status === 'resolved' && title.status === 'resolved') {
    return <TestEnd recommendList={recommend.item.data} title={title.item} />
  }
}

export default TestEndContainer
