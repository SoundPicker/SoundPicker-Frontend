import React from 'react'
import TestBackground from '../../components/test/TestBackground'
import Test from '../../components/test/TestBackground'

function TestContainer({ children }) {
  return (
    <>
      <TestBackground children={children} />
    </>
  )
}

export default TestContainer
