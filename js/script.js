const container  = document.querySelector(".container")
const qrcodeBtn = document.querySelector("#qr-form button")
const qrcondeInput = document.querySelector("#qr-form input")
const qrCodeImg = document.querySelector("#qr-code img")

function generatQrCode(){
    const qrcondeValue = qrcondeInput.value;
    if(!qrcondeValue)return;

    qrcodeBtn.innerText = "Gerando codigo....";

    qrCodeImg.src =`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${qrcondeValue}`;

    qrCodeImg.addEventListener("load", ()=>{
        container.classList.add("activer")
        qrcodeBtn.innerText = "Codigo Criado!";
    })
}
qrcodeBtn.addEventListener("click",()=>{
    generatQrCode();
})
qrcondeInput.addEventListener("keydown",(e)=>{
    console.log(e.code)
    if(e.code == "Enter"){
        generatQrCode();
    }
})

qrcondeInput.addEventListener("keyup", ()=>{
    if(!qrcondeInput.value){
        container.classList.remove("activer")
        qrcodeBtn.innerText = "Gerar QR Code"
    }
})