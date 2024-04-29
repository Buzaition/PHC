function extractEveryThirdLetter(inputString) {
    var result = '';
    for (var i = 0; i < inputString.length; i += 3) {
        result += inputString[i];
    }
    return result;
}

var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');
const urlParams = new URLSearchParams(window.location.search);
const name = extractEveryThirdLetter(urlParams.get('n1saemfemg'));
var code=urlParams.get('c2eo98ddfeg')
var downloadBtn = document.getElementById('download-btn');

var image = new Image();
image.crossOrigin = "anonymous";
image.src = 'certificate.png';
image.onload = function () {
    drawImage();
};

function drawImage() {
    ctx.drawImage(image, 0, 0, canvas.width, canvas.height);
    ctx.font = '75px monotype corsiva';
    ctx.fillStyle = '#152B6B';
	ctx.fillText(name, 150, 350); // Corrected this line
    ctx.font = '15px verdana';
    ctx.fillStyle = '#152B6B';
	ctx.fillText(code, 370, 680); // Corrected this line
}

downloadBtn.addEventListener('click', function () {
    downloadBtn.href = canvas.toDataURL('image/jpg');
    downloadBtn.download = 'Certificate - ' + name;
});

