import React, { useEffect, useState } from 'react'
import ModalContent from '../../components/modal/ModalContent.js'
import ModalInner from '../../components/modal/ModalInner'
import ModalOverlay from '../../components/modal/ModalOverlay'
import ModalWrapperContainer from '../../containers/modal/ModalWrapperContainer.js'

function ModalPage({ visible, closeModal, maskClosable, urlId, modalIn }) {
  const [data, setData] = useState('')
  const [modalOut, setModalOut] = useState(false)

  useEffect(() => {
    setData(urlId)
    document.body.style.cssText = `position: fixed; top: -${window.scrollY}px`
    return () => {
      const scrollY = document.body.style.top
      document.body.style.cssText = `position: ""; top: "";`
      window.scrollTo(0, parseInt(scrollY || '0') * -1)
    }
  }, [])
  return (
    <>
      <ModalOverlay visible={visible} />

      <ModalWrapperContainer
        closeModal={closeModal}
        maskClosable={maskClosable}
        visible={visible}
      >
        <ModalInner modalIn={modalIn}>
          <ModalContent data={data} />
        </ModalInner>
      </ModalWrapperContainer>
    </>
  )
}

export default ModalPage
