import styled from "styled-components";

// eslint-disable-next-line react/prop-types
export const BoardNoticeProcess = ({ process }) => {
  return (
    <Container>
      <p>{process}</p>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: 38px;
  display: flex;
  background-color: rgba(242, 155, 155, 20%);
  border-bottom: 1px solid #cacaca;
  padding: 10px;
  display: flex;
  justify-content: center;
`;
