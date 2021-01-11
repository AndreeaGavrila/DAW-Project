$(document).ready(function () {
    $('.summernote').summernote({
        height: 300,
        minHeight: 200,
        focus: true,
    });
});

/*$(document).ready(function () {
    $('#Content').summernote({
        height: 300,
        minHeight: 200,
        focus: true,
        callbacks: {
            onImageUpload: function (files) {
                for (let i = 0; i < files.length; i++) {
                    UploadImage(files[i]);
                }
            }
        }
    });
});

function UploadImage(file) {
    var url = '@Url.Action("UploadFile", "SummerNoteEx")';

    formData = new FormData();
    formData.append("aUploadedFile", file);
    $.ajax({
        type: 'POST',
        url: url,
        data: formData,
        cache: false,
        contentType: false,
        processData: false,
        success: function (FileUrl) {
            // alert(FileUrl);  
            var imgNode = document.createElement('img');
            imgNode.src = FileUrl;
            $('#Content').summernote('insertNode', imgNode);
        },
        error: function (data) {
            alert(data.responseText);
        }
    });
}  
*/