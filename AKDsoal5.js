function AngkaAcak(nilai) {
    var data = [];
    var cheknilai = [];
    var deret = 0;
    for (a = 0; a < nilai; a++) {
        var cha = '';
        for (cha; cha.length < 32;) {
            cha += Math.random().toString(36).substr(2, 1);
        }
        data.push(cha);
        if (a >= 1) {
            var check = true;
            for (e = 0; e <= deret; e++) {
                for (d = e + 1; d <= deret; d++) {
                    if (data[e] == data[d]) {
                        check = false;
                    }
                }
            }
            if (check == false) {
                nilai++;
            } else {
                cheknilai.push(cha);
                deret++;
            }
        } else {
            cheknilai.push(cha);
            deret++;
        }
    }
    var Strng = "";
    for (b = 0; b < deret; b++) {
        Strng += cheknilai[b] + "\n";

    }
    console.log(Strng);
}

AngkaAcak(3);