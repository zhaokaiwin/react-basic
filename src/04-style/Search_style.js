import styled from 'styled-components'
const Container = styled.div`
    width:100px;
    height:100px;
    color:deeppink;
    font-size:20px;
   text-align:center;
   line-height:100px;
   background-color: pink;
   .popular {
    font-size:16px;
    color:${(props) => props.color}
    }
`

export { Container }
