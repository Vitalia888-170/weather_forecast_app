import styled from 'styled-components';
export const ThemeContainer = styled.div`
  background: url(${props => props.image});
  background-size: cover;
  background-repeat: no-repeat;
  background-position:center center;
  width: 100%;
  height: 100vh;
  @media (max-width: 1200px) {
   min-height:750px;
  }
`