import styled from 'styled-components';

const Inner = styled.div`
    width:97.1rem;
    height: 100%;
    margin: 0 auto;

    @media only screen and (max-width: 1024px) {
        width:71.5rem;
  }
    @media only screen and (max-width: 768px) {
        width:54.8rem;
  }
    @media only screen and (max-width: 548px) {
        width:100%;
        padding:0 0.5rem;
    }
`


const TMInner = ({children}) => {
    
    return(
    <Inner>{children}</Inner>
    )

}

export default TMInner;