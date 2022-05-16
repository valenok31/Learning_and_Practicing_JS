let userAdmin = {
    admin() {
        console.log("Я админ");
    }
};

let userGuest = {};

userAdmin.admin?.(); // Я админ

userGuest.admjkgjyggu?.uhk?.jjj?.in?.(); // ничего не произойдет (такого метода нет)