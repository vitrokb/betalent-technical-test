import styled from 'styled-components';
import phoneNumberFormat from '../../utils/phoneNumberFormat';
import dateFormat from '../../utils/dateFormat';

type ExpandedRowCellType = {
  job?: string;
  admissionDate?: string;
  phone?: string;
};

const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${(props) => props.theme.colors.white};
  padding: ${(props) =>
    `${props.theme.spacing.xxs} ${props.theme.spacing.rg_xs} ${props.theme.spacing.sm}`};

  @media (min-width: 500px) {
    display: none;
  }
`;

const StyledTextWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: ${(props) => props.theme.spacing.rg_xs};
  border-bottom: 1px dashed ${(props) => props.theme.colors.gray10};
`;

const StyledHeader = styled.h2<{ $bold?: boolean }>`
  font-size: ${(props) => props.theme.fontSize.md};
  font-weight: ${(props) =>
    props.$bold ? props.theme.fontWeight.medium : props.theme.fontWeight.regular};
  color: ${(props) => props.theme.colors.black};
  text-align: ${(props) => (props.$bold ? 'left' : 'right')};
`;

const ExpandedRowCell = ({ job, admissionDate, phone }: ExpandedRowCellType) => {
  return (
    <StyledDiv>
      <StyledTextWrapper>
        <StyledHeader $bold>Cargo</StyledHeader>
        <StyledHeader>{job}</StyledHeader>
      </StyledTextWrapper>
      <StyledTextWrapper>
        <StyledHeader $bold>Data de Admissão</StyledHeader>
        <StyledHeader>{dateFormat(admissionDate)}</StyledHeader>
      </StyledTextWrapper>
      <StyledTextWrapper>
        <StyledHeader $bold>Telefone</StyledHeader>
        <StyledHeader>{phoneNumberFormat(phone)}</StyledHeader>
      </StyledTextWrapper>
    </StyledDiv>
  );
};

export default ExpandedRowCell;
