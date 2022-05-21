    let arr1 =  ['js', 'css', 'html'];
    alert (arr1[0]);

    let arr2 = [0, 1, false, 2, undefined, '', 3, null];
    let arrFilter = arr2.filter(Boolean);
    alert(arrFilter);


    let arr3 = [[1,2], [1,2,3], [1,2,3,4]];
    for (i = 0; i < arr3.length; i++) {
        if (arr3[i].length > 3) {
            alert(i);
        }
    } 