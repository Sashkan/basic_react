import styled from 'styled-components'

const StyledUserBox = styled.div`
  padding: 10px;
  transition: 0.1s;
  margin: 10px 0;
  cursor: pointer;
  border: 1px solid #d9d9d944;



border-radius: 7px;
background: #ffffff;
box-shadow:  7px 7px 13px #d9d9d9,
             -7px -7px 13px #ffffff;

  &:hover {
background: linear-gradient(145deg, #e6e6e6, #ffffff);
box-shadow:  7px 7px 13px #d9d9d9,
             -7px -7px 13px #ffffff;
  }

  &:active {
background: #ffffff;
box-shadow: inset 7px 7px 13px #d9d9d9,
            inset -7px -7px 13px #ffffff;
  }
`

export default StyledUserBox
