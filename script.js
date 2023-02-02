const Input = document.querySelector('#input');

Input.addEventListener('keypress',(e) =>{
    if (e.keyCode === 13){
        fetchFile(Input.value);
    }
    else{}
Input.value=''
});

function fetchFile(url){
    fetch(url).then(res => res.blob()).then(file => {
        let tempUrl = URL.createObjectURL(file);
        let aTag = document.createElement('a');
        aTag.href = tempUrl;
        aTag.download = url.replace(/^.*[\\\/]/, '');
        document.body.appendChild(aTag);
        aTag.click();
        aTag.remove();
    }).catch(()=>{
        alert('Failed to download file!');
    });
};