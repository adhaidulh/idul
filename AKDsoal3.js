function printbintang(angka) {

    var tengah = (angka / 2) + 0.5;
    var st = "";
    if (angka % 2 == 1) {
        for (a = 1; a <= angka; a++) {
            for (b = 1; b <= angka; b++) {
                if (b == 1 || b == angka || a == tengah) {

                    st += "* ";
                } else {

                    st += "= ";
                }

            }

            st += "\n";
        }
    }
    console.log(st);
}

printbintang(7);