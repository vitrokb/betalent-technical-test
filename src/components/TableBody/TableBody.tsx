import styled from 'styled-components';
import TableRowCell from '../TableRowCell';
import useMediaQuery from '../../hooks/useMediaQuery';
import { useState } from 'react';
import ChevronUp from '../../assets/chevron-up.svg';
import ChevronDown from '../../assets/chevron-down.svg';

const employees = [
  {
    id: 1,
    name: 'João',
    job: 'Back-end',
    admission_date: '2019-12-02T00:00:00.000Z',
    phone: '5551234567890',
    image:
      'https://img.favpng.com/25/7/23/computer-icons-user-profile-avatar-image-png-favpng-LFqDyLRhe3PBXM0sx2LufsGFU.jpg',
  },
  {
    id: 2,
    name: 'Roberto',
    job: 'Front-end',
    admission_date: '2020-03-12T00:00:00.000Z',
    phone: '5550321654789',
    image:
      'https://e7.pngegg.com/pngimages/550/997/png-clipart-user-icon-foreigners-avatar-child-face.png',
  },
];

const StyledTableRow = styled.tr`
  border-bottom: 1px solid ${(props) => props.theme.colors.gray10};
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

  const toggleRow = (index: number) => {
    setExpandedRows((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  return (
    <tbody>
      {employees.map((employee) => (
        <StyledTableRow key={employee.id}>
          <TableRowCell staticCell>
            <StyledImage src={employee.image} alt={`Photo of ${employee.name}`} />
          </TableRowCell>
          <TableRowCell>{employee.name}</TableRowCell>
          <TableRowCell isMobile={isMobile}>{employee.job}</TableRowCell>
          <TableRowCell isMobile={isMobile}>{employee.admission_date}</TableRowCell>
          <TableRowCell isMobile={isMobile}>{employee.phone}</TableRowCell>

          <TableRowCell staticCell lastCell isMobile={!isMobile}>
            <StyledButton onClick={() => toggleRow(employee.id)}>
              {expandedRows.includes(employee.id) ? (
                <StyledChevron src={ChevronUp} alt="Up Icon" />
              ) : (
                <StyledChevron src={ChevronDown} alt="Down Icon" />
              )}
            </StyledButton>
          </TableRowCell>
        </StyledTableRow>
      ))}
    </tbody>
  );
};

export default TableBody;
