// masukan nama function previewImg sesuai dengan yang ada pada onchange di input type file di atas
function previewImg() {
    // tangkap id image pada input type file di atas
    const image = document.querySelector('#image');
    // tangkap class img-preview yang ada pada tag img di atas
    const imgPreview = document.querySelector('.img-preview');

    // jalankan kode berikut untuk dapat melakukan live preview image
    const oFReader = new FileReader();
    oFReader.readAsDataURL(image.files[0]);

    oFReader.onload = function(oFREvent) {
        imgPreview.src = oFREvent.target.result;
    }
}