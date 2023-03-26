import styled from "styled-components"

export const Container = styled.div`
  width: ${({width}) => width };
  height: ${({height}) => height }; 
  display: flex;
  flex-direction: ${({size}) => size === 'normal' ? 'column' : 'row'};
  justify-content: flex-start;
  align-items: flex-start;
`
export const Image = styled.img`
  width: ${({size}) => size === 'small' ? '50%' : '100%'};;
  border-radius: ${({borderRadius}) => borderRadius ?  '8px' : '0'};
  margin-bottom: 1em;
  margin-right: ${({size}) => size === 'small' ? '1em' : '0'};
  opacity: 0.7;
  &:hover {
    cursor: pointer;
    opacity: 1;
  }
`
export const TextContetnt =styled.div`
`
export const Title = styled.h1`
  font-size: ${({size}) => size === 'normal' ? '1rem' : '0.9rem'};
  &:hover {
    cursor: pointer;
  }
`
export const Text = styled.p`
  font-size: ${({size}) => size === 'normal' ? '1rem' : '0.8rem'};
`