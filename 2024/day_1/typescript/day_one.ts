import * as fs from 'fs'

export const calculate_distance = (one: number[], two: number[]): number => {
  const first: number[] = one.sort((a, b) => a - b);
  const second: number[] = two.sort((a, b) => a - b);

  const count: number = first.reduce((total, value, index) => {
    const calculation: number = Math.abs(value - second[index])
    const new_total: number = total + calculation
    return new_total
  }, 0)


  return count;
};

const read_file = (data: string): number[][] => {
  const one: number[] = [];
  const two: number[] = [];
  data.split('\n').filter(val => val.trim() !== '').forEach((value) => {
    const arr = value.split(/\s+/).map((value) => { return parseInt(value.trim()) });
    one.push(arr[0])
    two.push(arr[1])
  })

  return [one, two]
}

function main() {
  const data: string = fs.readFileSync('input.txt', 'utf8')

  const arrays: number[][] = read_file(data)

  const total: number = calculate_distance(arrays[0], arrays[1])

  console.log(total)
}

if (require.main === module) {
  main();
}

