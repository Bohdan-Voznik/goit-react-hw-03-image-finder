import styled from '@emotion/styled';

export const Form = styled.form`
  display: flex;
  padding-top: 10px;
  padding-bottom: 10px;
  justify-content: center;
`;

export const Input = styled.input`
  font-size: 20px;
  padding-top: 8px;
  padding-bottom: 12px;
  padding-left: 10px;
  padding-right: 10px;
  width: 500px;
  height: 20px;
  border: none;
  background-color: #fff;
  border-radius: 6px 0px 0px 6px;

  &:focus {
    outline: none;
  }
`;

export const Submit = styled.button`
  width: 40px;
  height: 40px;
  background-color: #f2f2f2;
  border: none;
  border-radius: 0px 6px 6px 0px;

  &:hover,
  &:focus {
    cursor: pointer;
    box-shadow: inset 0px 0px 4px rgba(0, 0, 0, 0.5);
  }
`;
