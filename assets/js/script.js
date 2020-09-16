function page () {
    var value = confirm("Are you really want to continue?");

    if (value) {
        console.log("success");
        window.location.href = "./index.html";
    }
}