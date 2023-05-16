/**
 * Convert date 31/12/2022 to 'Dia 31/12 de 2022'
 */
export default function dateInWords(date: string) {
  const splitedDate = date.split('-');
  return `Dia ${splitedDate[2]}/${splitedDate[1]} de ${splitedDate[0]}`;
}
