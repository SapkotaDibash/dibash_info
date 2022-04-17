
$('#btn_saveData').click(function () {
    saveDataToLocalStorage()
});


$('#btn_saveAndUpload').click(function () {
    saveDataToLocalStorage();
    uploadDataToServer();
});


$('#btn_UploadSaved').click(function () {
    uploadDataToServer();
});




function saveDataToLocalStorage() {
    const descI = $("#Desc_I").val();
    const memName = $("#Mem_Name").val();
    const descII = $("#Desc_II").val();
    const userID = window.localStorage.getItem(USER_VAR);
    updateLocation();

    const Data = { descI, memName, descII, loc, userID }

    if (memName.length == 0) {
        $("#Mem_Name").focus();
        // alert('Enter Member Name');
        return;
    }

    const data = window.localStorage.getItem(LOCATION_VAR);

    const parsedData = JSON.parse(data);

    parsedData.push(Data);


    window.localStorage.setItem(LOCATION_VAR, JSON.stringify(parsedData));

    $("#Desc_I").val('');
    $("#Mem_Name").val('');
    $("#Desc_II").val('');
    // alert('Data Successfully Saved');
}


function uploadDataToServer() {
    const URL = "https://script.google.com/macros/s/AKfycbxdU5zRg9PNpu2npgO0J6Q6ApE3IhenRmOWPpi67k8dlqClfvBPrO9GRAUjCPQgclf7lA/exec?fun=logLocation&data="
    const savedData = window.localStorage.getItem(LOCATION_VAR);
    const encodedData = encodeURI(savedData);
    console.log(savedData)
    const urlWithData = URL + encodedData;
    fetch(urlWithData)
        .then(response => response.json())
        .then(data => {
            if (data.Status == "Success") {
                window.localStorage.setItem(LOCATION_VAR, JSON.stringify([]));
                alert('Data Uploaded Successfylly');
            }
        })
        .catch((error) => {
            alert('ERROR ON UPLOADING DATA');
            console.error('Error:', error);
        });
}