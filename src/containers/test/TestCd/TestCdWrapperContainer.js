import React, { useEffect, useState } from 'react'
import TestCd from '../../../components/test/testcd/TestCd'
import axios from 'axios'
import LoadingComponent from '../../../components/common/LoadingComponent'
const TestCdWrapperContainer = ({ match }) => {
  //레코드 데이터 정의
  const [quiz, setQuiz] = useState({
    status: 'idle',
    item: null,
  })

  const url = ' http://3.35.187.65:3000'

  const getQuizApi = async id => {
    const { data } = await axios.get(`${url}/test/${id}`)
    try {
      console.log('[SUCCESS] get test', data)
      return data
    } catch (e) {
      console.log('[FAIL] get test')
    }
  }

  useEffect(() => {
    ;(async () => {
      const data = await getQuizApi(match.params.id)
      try {
        setQuiz({
          status: 'pending',
          item: null,
        })
        setQuiz({
          status: 'resolved',
          item: data,
        })
      } catch (e) {
        setQuiz({
          status: 'rejected',
          item: null,
        })
      }
    })()
  }, [match.params.id])

  switch (quiz.status) {
    case 'idle':
      return <LoadingComponent />
    case 'rejected':
      return <>Error</>
    case 'pending':
      return <LoadingComponent />
    case 'resolved':
    default:
      return (
        <div>
          <TestCd match={match} newList={quiz.item.data} />
        </div>
      )
  }
}

export default TestCdWrapperContainer
