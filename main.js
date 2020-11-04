
document.addEventListener('DOMContentLoaded', () => {
    Continuar();

});
const Continuar = () => {
    let pag = 1;
    let val = 1;
    const blk1 = document.getElementById("block1");
    blk1.style.backgroundColor = "#4CAF50";
    const blk2 = document.getElementById("block2");
    const blk3 = document.getElementById("block3");
    const blk4 = document.getElementById("block4");

    const btc = document.getElementById("continuar");
    const bta = document.getElementById("atras");
    const rl = document.getElementById("CallU");

    const div1 = document.getElementById("d1");
    const div2 = document.getElementById("d2");
    const div3 = document.getElementById("d3");

    const div4 = document.getElementById("d4");

    const nameER = document.getElementById("nombreER");
    const apelER = document.getElementById("apellidoER");
    const dateNaciER = document.getElementById("fechaER");
    const codPosER = document.getElementById("codigoER");
    const municER = document.getElementById("municipioER")



    const infor = document.getElementById("informacion");
    const name = document.getElementById("nombre");
    const apel = document.getElementById("apellido");
    const dateNaci = document.getElementById("fechaNacimiento");
    const direc = document.getElementById("direccion");
    const codPos = document.getElementById("codPostal");
    const prov = document.getElementById("provincia");
    const munic = document.getElementById("municipio");

    apel.addEventListener("input", () => {
        if (name.value === "") {
            nameER.style.display = "block";
        } else {
            nameER.style.display = "none";
        }
    });
    dateNaci.addEventListener("input", () => {
        if (name.value === "") {
            nameER.style.display = "block";
        } else {
            nameER.style.display = "none";
        }
        if (apel.value === "") {
            apelER.style.display = "block";
        } else {
            apelER.style.display = "none";
        }
    });
    codPos.addEventListener("input", () => {
        if (name.value === "") {
            nameER.style.display = "block";
        } else {
            nameER.style.display = "none";
        }
        if (apel.value === "") {
            apelER.style.display = "block";
        } else {
            apelER.style.display = "none";
        }
        if (dateNaci.value === "") {
            dateNaciER.style.display = "block";
        } else {
            dateNaciER.style.display = "none";
        }
    });
    munic.addEventListener("input", () => {
        munic.value = munic.value.toLocaleUpperCase();
        if (name.value === "") {
            nameER.style.display = "block";
        } else {
            nameER.style.display = "none";
        }
        if (apel.value === "") {
            apelER.style.display = "block";
        } else {
            apelER.style.display = "none";
        }
        if (dateNaci.value === "") {
            dateNaciER.style.display = "block";
        } else {
            dateNaciER.style.display = "none";
        }
        if (codPos.value > 99999 || codPos.value < 10000) {
            codPosER.style.display = "block";
        } else {
            codPosER.style.display = "none";
        }
        if (munic.value == "") {
            municER.style.display = "block";
        } else {
            municER.style.display = "none";
        }
        if (
            (municER.style.display && codPosER.style.display && dateNaciER.style.display && apelER.style.display && nameER.style.display) == "none"
        ){
            btc.disabled = false;
        }

    });
    rl.addEventListener('input', () => {
        if (rl.value !== "") {
            btc.disabled = false;
        }
    });
    btc.addEventListener('click', () => {
        pag++;

        if (pag == 2) {
            blk1.style.backgroundColor = "#333";
            blk2.style.backgroundColor = "#4CAF50";
            blk3.style.backgroundColor = "#333";
            blk4.style.backgroundColor = "#333";
            bta.style.display = "block";
            btc.disabled = true;
            div1.style.display = "none";
            div2.style.display = "block";
            div3.style.display = "none";
            div4.style.display = "none";
        }

        if (pag == 3) {
            const datos = {
                web: rl.value, nombre: name.value, apellido: apel.value, FechaNacimiento: dateNaci.value, direccion: direc.value,
                codigoPostal: codPos.value, provincia: prov.value, municipio: munic.value
            };
            infor.textContent="Web: "+datos.web+" Nombre: "+datos.nombre+" Apellido: "+datos.apellido+" Fecha Nacimiento: "+datos.FechaNacimiento+
            " Direccion: "+datos.direccion+" Codigo Postal: "+datos.codigoPostal+" Provincia: "+datos.provincia+" Municipio: "+datos.municipio;
            blk1.style.backgroundColor = "#333";
            blk2.style.backgroundColor = "#333";
            blk3.style.backgroundColor = "#4CAF50";
            blk4.style.backgroundColor = "#333";
            div1.style.display = "none";
            div2.style.display = "none";
            div3.style.display = "block";
            div4.style.display = "none";

        }
        if (pag == 4) {
            blk1.style.backgroundColor = "#333";
            blk2.style.backgroundColor = "#333";
            blk3.style.backgroundColor = "#333";
            blk4.style.backgroundColor = "#4CAF50";
            btc.style.display = "none";
            div1.style.display = "none";
            div2.style.display = "none";
            div3.style.display = "none";
            div4.style.display = "block";
        }
    });








    bta.addEventListener('click', () => {
        pag--;
        if (pag == 3) {
            blk1.style.backgroundColor = "#333";
            blk2.style.backgroundColor = "#333";
            blk3.style.backgroundColor = "#4CAF50";
            blk4.style.backgroundColor = "#333";
            btc.style.display = "block";
            bta.style.display = "block";
            div1.style.display = "none";
            div2.style.display = "none";
            div3.style.display = "block";
            div4.style.display = "none";
        }
        if (pag == 2) {
            blk1.style.backgroundColor = "#333";
            blk2.style.backgroundColor = "#4CAF50";
            blk3.style.backgroundColor = "#333";
            blk4.style.backgroundColor = "#333";
            bta.style.display = "block";
            btc.style.display = "block";
            div1.style.display = "none";
            div2.style.display = "block";
            div3.style.display = "none";
            div4.style.display = "none";
        }
        if (pag == 1) {
            blk1.style.backgroundColor = "#4CAF50";
            blk2.style.backgroundColor = "#333";
            blk3.style.backgroundColor = "#333";
            blk4.style.backgroundColor = "#333";
            bta.style.display = "none";
            btc.style.display = "block";
            div1.style.display = "block";
            div2.style.display = "none";
            div3.style.display = "none";
            div4.style.display = "none";
        }
    });


}

