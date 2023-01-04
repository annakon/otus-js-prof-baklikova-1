export function sum(arg1) {
  let S = arg1;

  if(arg1===undefined) return S;
  const returnSum = function (arg2) {
    if(arg2===undefined) return S;
    S = S + arg2;
    return returnSum;
  };



  return returnSum;
}
