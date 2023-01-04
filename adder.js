export function sum(arg1 = 0) {
  let S = arg1;
  const returnSum = function (arg2) {
    S = S + arg2;
    return returnSum;
  };

  returnSum.toString = () => {
    const res = String(S);
    S = arg1;
    return res;
  };

  return returnSum;
}
