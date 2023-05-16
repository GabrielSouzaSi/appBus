/**
 * Convert date 31/12/2022 to 2022-12-31
 */
export default function slashToDashDate(date: string) {
  const separatedDate = date.split('/');
  return `${separatedDate[2]}-${separatedDate[1]}-${separatedDate[0]}`;
}
