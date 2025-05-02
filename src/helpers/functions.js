import Swal from "sweetalert2";
export function genericAlert(tittle,message,icon) {
    Swal.fire({
        title: tittle,
        text: message,
        icon: icon,
      });
}

export function redirectionAlert(title,message,imgUrl){
    Swal.fire({
        title: title,
        text: message,
        imageUrl: imgUrl,
        imageWidth: 400,
        imageHeight: 200,
        imageAlt: "Barbers Medayork"
      });
}

export function generateToken(){
    return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
}

