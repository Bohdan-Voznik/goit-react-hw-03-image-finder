import styled from '@emotion/styled';

export const ImageItem = styled.li`
  margin: 15px;
  flex-basis: calc((100% - 120px) / 4);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

  &:hover {
    cursor: pointer;
    transform: scale(1.1);
  }
`;

export const Image = styled.img`
  object-fit: cover;
  width: 270px;
  height: 200px;
`;

export const ImageInfo = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 5px;
  text-align: center;
`;

export const ImageInfoItem = styled.p`
  margin: 0;
  padding: 5px;
  width: 51px;
  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.25);

  & b {
    font-size: 9px;
  }

  & span {
    font-size: 14px;
  }
`;
