import styled from 'styled-components';
import TableRowCell from '../TableRowCell';
import useMediaQuery from '../../hooks/useMediaQuery';
import { Fragment, useState } from 'react';
import ChevronUp from '../../assets/chevron-up.svg';
import ChevronDown from '../../assets/chevron-down.svg';
import dateFormat from '../../utils/dateFormat';
import phoneNumberFormat from '../../utils/phoneNumberFormat';
import ExpandedRowCell from '../ExpandedRowCell';
import useEmployees from '../../hooks/useEmployees/useEmployees';

const StyledTableRow = styled.tr<{ $expanded?: boolean }>`
  border-bottom: ${(props) =>
    props.$expanded ? 'none' : `1px solid ${props.theme.colors.gray10}`};
`;

const StyledImage = styled.img`
  width: 34px;
  height: 34px;
  border-radius: 50%;

  @media (min-width: 500px) {
    width: 40px;
    height: 40px;
  }
`;

const StyledChevron = styled.img`
  width: 16px;
  height: 16px;
`;

const StyledButton = styled.button`
  background-color: ${(props) => props.theme.colors.white};
  border: none;
  @media (min-width: 500px) {
    display: none;
  }
`;

const TableBody = () => {
  const [expandedRows, setExpandedRows] = useState<number[]>([]);
  const isMobile = useMediaQuery('(max-width: 500px)');
  const {
    state: { employees },
  } = useEmployees();

  const toggleRow = (index: number) => {
    setExpandedRows((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  return (
    <tbody>
      {employees?.map((employee) => (
        <Fragment key={employee.id}>
          <StyledTableRow $expanded={expandedRows.includes(employee.id)}>
            <TableRowCell staticCell>
              <StyledImage src={employee.image} alt={`Photo of ${employee.name}`} />
            </TableRowCell>
            <TableRowCell>{employee.name}</TableRowCell>
            {!isMobile && <TableRowCell>{employee.job}</TableRowCell>}
            {!isMobile && <TableRowCell>{dateFormat(employee.admission_date)}</TableRowCell>}
            {!isMobile && <TableRowCell>{phoneNumberFormat(employee.phone)}</TableRowCell>}

            {isMobile && (
              <TableRowCell staticCell lastCell>
                <StyledButton onClick={() => toggleRow(employee.id)}>
                  {expandedRows.includes(employee.id) ? (
                    <StyledChevron src={ChevronUp} alt="Up Icon" />
                  ) : (
                    <StyledChevron src={ChevronDown} alt="Down Icon" />
                  )}
                </StyledButton>
              </TableRowCell>
            )}
          </StyledTableRow>
          <StyledTableRow $expanded={!expandedRows.includes(employee.id)}>
            {expandedRows.includes(employee.id) && (
              <td colSpan={3}>
                <ExpandedRowCell
                  job={employee.job}
                  admissionDate={employee.admission_date}
                  phone={employee.phone}
                />
              </td>
            )}
          </StyledTableRow>
        </Fragment>
      ))}
    </tbody>
  );
};

export default TableBody;
