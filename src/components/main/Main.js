import styled from 'styled-components'

const Sibal = styled.div`
    width:100%;
    height:100%;
    font-size:1.5rem;
    display:flex;
    align-items:center;
    justify-content:center;
`


const Main = ({sibal}) => {

    // component에서는 스타일 지정만
    return <Sibal>MainPage입니다{sibal}</Sibal> ;
}

export default Main;