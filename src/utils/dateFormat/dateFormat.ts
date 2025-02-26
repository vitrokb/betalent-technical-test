import { format } from 'date-fns';
import { ptBR } from 'date-fns/locale';

const dateFormat = (date: string | null | undefined): string => {
  return date ? format(new Date(date), 'dd/MM/yyyy', { locale: ptBR }) : '00/00/0000';
};

export default dateFormat;
