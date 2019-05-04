function identitas() {
    var ADHA = {
        name: "adha",
        Address: "Antang",
        Hobbies: ["gaming COC", "fishing"],
        Is_Married: false,
        School: {
            "01": "STMIK DP"
        },
        Skills: [{
            "nama": "Arduino"
        }, {
            "nama": "CPP"
        }]
    };
    var myJSON = JSON.stringify(ADHA);
    console.log(myJSON);

    return ADHA;
}

identitas();