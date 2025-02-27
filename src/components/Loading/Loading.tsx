import { ClipLoader } from 'react-spinners';
import styled from 'styled-components';

const StyledWrapper = styled.div`
  display: grid;
  place-items: center;
  height: 50vh;
`;

const Loading = () => {
  return (
    <StyledWrapper>
      <ClipLoader color={'#000000'} size={40} aria-label="Loading Spinner" data-testid="loader" />
    </StyledWrapper>
  );
};

export default Loading;
