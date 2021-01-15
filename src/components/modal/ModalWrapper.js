import styled from 'styled-components'

const LayoutWrapper = styled.div`
  display: ${props => (props.visible ? 'block' : 'none')};
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 1000;
  overflow: auto;
  outline: 0;
`
const ModalWrapper = ({ maskClosable, visible, children, onMaskClick }) => {
  return (
    <LayoutWrapper
      onClick={maskClosable ? onMaskClick : null}
      tabIndex="-1"
      visible={visible}
    >
      {children}
    </LayoutWrapper>
  )
}

export default ModalWrapper
