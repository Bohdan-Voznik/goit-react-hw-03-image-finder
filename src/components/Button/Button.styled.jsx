import styled from '@emotion/styled';

export const Btn = styled.button`
  position: relative;
  display: block;
  width: 200px;
  height: 40px;
  margin: 0 auto;
  margin-top: 30px;
  margin-bottom: 30px;
  padding-left: 35px;
  text-align: left;
  font-size: 20px;
  font-weight: 700;
  border: none;
  color: #fff;
  background-color: #2b47a8;
  border-radius: 6px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

  &:hover,
  &:focus {
    cursor: pointer;
    background-color: #233b93;
  }
`;
