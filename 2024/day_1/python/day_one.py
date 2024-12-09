def get_diff(a: int, b: int):
    return abs(a - b)

def calcuate_distances(one, two):
    count = 0
    one.sort()
    two.sort()
    for index in range(len(one)):
        count += abs(one[index] - two[index])

    return count

def main():
    one = []
    two = []
    with open('input.txt', 'r') as file:
        for line in file:
            first, second = line.split()
            one.append(int(first))
            two.append(int(second))

    print(calcuate_distances(one, two))



if __name__ == "__main__":
    main()
