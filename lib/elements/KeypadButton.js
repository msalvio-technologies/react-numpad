import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const Button = styled.button`
  color: ${props => props.theme.color.primary};
  width: 80px;
  background: none;
  border: none;
  cursor: pointer;
  display: inline-block;
  line-height: 40px;
  font-size: 1.2em;
  font-weight: 400;
  margin: '3px 0';
  outline: none;
  padding: 0 12px;
  border-radius: 0;
  &:active {
    transition: all 150ms linear;
    opacity: .75;    
  }
  &:disabled {
    color: transparent;
    cursor: auto;
  }
`

const ButtonWrapper = ({theme, value, click, disabled}) => (
    <Button onClick={() => click(value)} disabled={disabled}>{value}</Button>
)


ButtonWrapper.propTypes = {  
  click: PropTypes.func.isRequired, 
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ]),
  disabled: PropTypes.bool
}

export default ButtonWrapper