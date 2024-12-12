def calcuate_safety(data):
    increasing = data[0] < data[1]
    for index in range(len(data) - 1):
        diff = data[index + 1] - data[index]
        if increasing and (diff < 1 or diff > 3):
            return False
        if not increasing and (diff > -1 or diff < -3):
            return False
    return True

def main():

    output = []
    count = 0

    with open('input.txt', 'r') as file:
        for line in file:
            output.append([int(v) for v in line.split()])

    for a in output:
        if calcuate_safety(a):
            count = count + 1

    print(count)


if __name__ == "__main__":
    main()


