import React, { useState } from 'react'
import TestCd from '../../../components/test/testcd/TestCd'
const TestCdWrapperContainer = () => {
  //레코드 데이터 정의
  const recordList = [
    {
      recordImg: '',
      sound:
        'https://soundpicker-bucket.s3.ap-northeast-2.amazonaws.com/hi.mp3',
      result: 'DumbDumb',
    },
    {
      recordImg: '',
      sound:
        'https://soundpicker-bucket.s3.ap-northeast-2.amazonaws.com/hi.mp3',
      result: 'Rokie',
    },
    {
      recordImg: '',
      sound:
        'https://soundpicker-bucket.s3.ap-northeast-2.amazonaws.com/hi.mp3',
      result: '빨간맛',
    },
    {
      recordImg: '',
      sound: '',
      result: '벌건맛',
    },
    {
      recordImg: '',
      sound: '',
      result: '누런맛',
    },
    {
      recordImg: '',
      sound: '',
      result: '시뻘건맛',
    },
  ]

  return (
    <div>
      <TestCd recordList={recordList} />
    </div>
  )
}

export default TestCdWrapperContainer
