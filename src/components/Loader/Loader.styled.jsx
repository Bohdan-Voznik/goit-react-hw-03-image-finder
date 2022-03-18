import styled from '@emotion/styled';

export const Spiner = styled.span`
    position: absolute; 
    top: 10px;
    right: 30px;
    width: 20px;
    height: 20px;
    border: 4px solid #fff;
    border-bottom-color: transparent;
    border-radius: 50%;
    display: inline-block;
    box-sizing: border-box;
    animation: rotation 1s linear infinite;
  }

  @keyframes rotation {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;
