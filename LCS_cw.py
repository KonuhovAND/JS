def lcs(x, y):
    x_list = list(x)
    y_list = list(y)
    result = []
    len_x = len(x_list)
    len_y = len(y_list)
    if len_x >= len_y:
        min_list = y_list
        max_list = x_list
    else:
        min_list = x_list
        max_list = y_list

    for char1 in min_list:
        for i,char2 in enumerate(max_list):
            if char1 == char2:
                result.append(char1)
                max_list=max_list[i+1:]
                break
    return ''.join(result)


print(lcs("anothertest", 'notatest'))
