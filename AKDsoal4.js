function selection_Short(Nilaiarray) {

    var i, j, min, temp;
    for (i = 0; i < Nilaiarray.length - 1; i++) {
        min = i;
        for (j = i + 1; j < Nilaiarray.length; j++) {
            if (Nilaiarray[j] < Nilaiarray[min]) {
                min = j;

            }
        }
        temp = Nilaiarray[i];
        Nilaiarray[i] = Nilaiarray[min];
        Nilaiarray[min] = temp;
    }

    return Nilaiarray;
}

function kata(data) {
    var cData = [];
    for (a = 0; a < data.length; a++) {
        var nil = data[a].charCodeAt();
        cData.push(nil);
    }

    var urut = selection_Short(cData);
    var eData = [];
    for (b = 0; b < urut.length; b++) {
        eData.push(String.fromCharCode(urut[b]));
    }
    return eData;
}

function adhashort(data) {
    var nil = [];
    var nili = [];
    for (c = 0; c < data.length; c++) {

        nil.push(data[c].length);
        nili.push(data[c].length);
    }
    var urut = selection_Short(nil);
    var st = "";
    for (h = 0; h < urut.length; h++) {
        for (s = 0; s < urut.length; s++) {
            if (urut[h] == nili[s]) {
                var da = kata(data[s]);
                st += da + "\n";
            }
        }
    }
    console.log(st);
}

var DataArray = [
    ['b', 'e', 'c', 'd'],
    ['g', 'h', 'i'],
    ['a', 'c', 'b', 'e', 'd']
];

adhashort(DataArray);