import React, { useState } from 'react'
import TestCd from '../../../components/test/testcd/TestCd'
const TestCdWrapperContainer = () => {
  //레코드 데이터 정의
  const recordList = [
    {
      recordImg: '',
      sound:
        'https://soundpicker-bucket.s3.ap-northeast-2.amazonaws.com/hi.mp3',
      result: '빨간맛',
      thumb:
        'https://cdnweb01.wikitree.co.kr/webdata/editor/202004/13/img_20200413145751_8f4f9492.webp',
      hint: 'xx맛~궁금해허니',
    },
    {
      recordImg: '',
      sound:
        'https://soundpicker-bucket.s3.ap-northeast-2.amazonaws.com/hi.mp3',
      result: 'Dumb Dumb',
      thumb:
        'https://lh3.googleusercontent.com/proxy/rrlpHTBVOx-UBxXK0oORgGHrXrUPSWGdh-x7K-3fvkIwYZyaj3k1qcA-u9lL-1zcMibloFTfBkvht6ZWXypm522YuU3vjbwS4bwgx4hdNJcYkbXrx89-FHa6',
      hint: '바보',
    },
    {
      recordImg: '',
      sound:
        'https://soundpicker-bucket.s3.ap-northeast-2.amazonaws.com/hi.mp3',
      result: '빨간맛',
      thumb:
        'https://img.insight.co.kr/static/2019/10/26/700/dxherdn7b70y73b640c6.jpg',
      hint: '2번문제 hint',
    },
    {
      recordImg: '',
      sound: '',
      result: '벌건맛',
      thumb:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTu1ukWwmrKbWy0vGm_uPWNZjuGOF-no7EtfA&usqp=CAU',
      hint: '3번문제 hint',
    },
    {
      recordImg: '',
      sound:
        'https://soundpicker-bucket.s3.ap-northeast-2.amazonaws.com/hi.mp3',
      result: '누런맛',
      thumb:
        'https://img.seoul.co.kr/img/upload/2018/03/31/SSI_20180331114237_O2.jpg',
      hint: '4번문제 hint',
    },
    {
      recordImg: '',
      sound:
        'https://soundpicker-bucket.s3.ap-northeast-2.amazonaws.com/hi.mp3',
      result: '시뻘건맛',
      thumb: '',
      hint: '5번문제 hint',
    },
  ]

  return (
    <div>
      <TestCd recordList={recordList} />
    </div>
  )
}

export default TestCdWrapperContainer
