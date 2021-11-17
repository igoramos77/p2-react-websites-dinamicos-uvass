const addZeroBefore = (n: number | string) => {
  return (n > 0 && n < 10) ? '0' + n : n;
}

export default addZeroBefore;
