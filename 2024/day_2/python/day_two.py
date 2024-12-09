def calcuate_safety(data):
    increasing = data[0] < data[1]
    for index in range(len(data) - 1):
        diff = data[index + 1] - data[index]
        if increasing and (diff < 1 or diff > 3):
            return False
        if not increasing and (diff > -1 or diff < -3):
            return False
    return True


