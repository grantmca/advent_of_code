import * as fs from 'fs'

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


const decode_file = (data: string): number[][] => {
  const output: number[][] = [];
  data.split('\n').filter(
    val => val.trim() !== ''
  ).forEach((val) => {
    output.push(
      val.split(/\s+/).map(val => parseInt(val))
    );
  })
  return output
}

function main() {
  const data: string = fs.readFileSync('input.txt', 'utf8')

  const levels = decode_file(data);

  let count = 0;

  levels.forEach((v) => {
    if(calcuate_safety(v)){
      count++;
    }
  })

  console.log(count)
}

if (require.main === module) {
  main();
}

