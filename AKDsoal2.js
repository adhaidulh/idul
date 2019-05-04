function CheckUserName(username) {
    if (username.length == 8) {
        return console.log(true);
    }
    return console.log(false);
}

function CheckPassword(password) {
    if (password.length >= 8) {
        for (var i = 0; i < password.length; i++) {
            var ch = password.charAt(i);
            if ((ch < "A" || ch > "Z") && (ch < "a" || ch > "z") && (ch < "0" || ch > "9")) {
                return console.log(true);
            }
        }
        return console.log(false);
    }

    return console.log(false);
}

CheckUserName("iduladha"); // return true
CheckUserName("idul"); // return false
CheckPassword("122404DAa+"); // return true
CheckPassword("1224"); // return false