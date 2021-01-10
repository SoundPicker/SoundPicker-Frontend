import React from 'react'
import ModalWrapper from '../../components/modal/ModalWrapper'

const ModalWrapperContainer = ({
  closeModal,
  maskClosable,
  visible,
  children,
}) => {
  const onMaskClick = e => {
    if (e.target === e.currentTarget) {
      closeModal(e)
    }
  }

  return (
    <>
      <ModalWrapper
        children={children}
        onMaskClick={onMaskClick}
        maskClosable={maskClosable}
        visible={visible}
      />
    </>
  )
}

export default ModalWrapperContainer
