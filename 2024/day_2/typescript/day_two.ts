export const calcuate_safety = (list: number[]) => {
  const increasing = list[0] < list[1]
  for(let index = 0; index < list.length -1; index++) {
    const diff = list[index + 1] - list[index];
    if (increasing && (diff < 1 || diff > 3)){
      return false
    }
    if (!increasing && (diff > -1 || diff < -3)){
      return false
    }
  };
  return true;
}
