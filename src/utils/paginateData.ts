export const paginateData = <T>(
  data: T[],
  currentPage: number,
  perPage: number
): T[] => {
  return data?.slice((currentPage - 1) * perPage, currentPage * perPage);
};
