export const calcuate_safety = (list: number[]) => {
  const increasing = list[0] < list[1]
  list.forEach((val, index) => {
    if (index + 1 === list.length){
      return true; 
    }
    const diff = list[index + 1] - val;
    if (increasing && (diff < 1 || diff > 3)){
      return false
    }
    if (!increasing && (diff > -1 || diff < -3)){
      return false
    }
  });
}
