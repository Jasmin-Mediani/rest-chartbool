$(document).ready(function () {
    $.ajax({
        url: "http://157.230.17.132:4021/sales",
        type: "GET",
        //data: {},
        success: function (arrayDiOggetti) {

            var gennaio = [];
            var febbraio = [];
            var marzo = [];
            var aprile = [];
            var maggio = [];
            var giugno = [];
            var luglio = [];
            var agosto = [];
            var settembre = [];
            var ottobre = [];
            var novembre = [];
            var dicembre = [];


            for (let i = 0; i < arrayDiOggetti.length; i++) {
                var oggettoSingolo = arrayDiOggetti[i];
                //console.log(oggettoSingolo);

                var dataDelcalendario = {
                    data: oggettoSingolo.date,
                }

                var mese = moment(dataDelcalendario.data, "DD-MM-YYYY").month() + 1; //+1 perché non ho trovato iso + month
                //console.log(mese);

                var quantita = oggettoSingolo.amount;
                //console.log("quantità: " + quantita);


                switch (mese) {
                    case 1:
                        gennaio.push(quantita);
                        break;

                    case 2:
                        febbraio.push(quantita);
                        break;

                    case 3:
                        marzo.push(quantita);
                        break;

                    case 4:
                        aprile.push(quantita);
                        break;

                    case 5:
                        maggio.push(quantita);
                        break;

                    case 6:
                        giugno.push(quantita);
                        break;

                    case 7:
                        luglio.push(quantita);
                        break;

                    case 8:
                        agosto.push(quantita);
                        break;
                    case 9:
                        settembre.push(quantita);
                        break;

                    case 10:
                        ottobre.push(quantita);
                        break;

                    case 11:
                        novembre.push(quantita);
                        break;

                    case 12:
                        dicembre.push(quantita);
                        break;
                }
            }

            // console.log("gennaio: " + gennaio);
            // console.log("febbraio: " + febbraio);
            // console.log("marzo: " + marzo);
            // console.log("aprile: " + aprile);
            // console.log("maggio: " + maggio);
            // console.log("giugno: " + giugno);
            // console.log("luglio: " + luglio);
            // console.log("agosto: " + agosto);
            // console.log("settembre: " + settembre);
            // console.log("ottobre: " + ottobre);
            // console.log("novembre: " + novembre);
            // console.log("dicembre: " + dicembre);

            /********* SOMMA GENNAIO *******/

            for (var i = 0, sommaGennaio = 0; i < gennaio.length; sommaGennaio += gennaio[i++]);
            var sommaAmountGennaio = sommaGennaio;
            console.log("somma di gennaio:" + sommaGennaio);

            /*** E DA QUI HO CAPITO CHE ERA MEGLIO UN ARRAY DI OGGETTI INVECE DI 12 ARRAY A GIRO :(   */

            /******** SOMMA FEBBRAIO ********/
            for (var i = 0, sommaFebbraio = 0; i < febbraio.length; sommaFebbraio += febbraio[i++]);
            var sommaAmountFebbraio = sommaFebbraio;
            console.log("somma di febbraio:" + sommaFebbraio);


            /******** SOMMA MARZO ********/
            for (var i = 0, sommaMarzo = 0; i < marzo.length; sommaMarzo += marzo[i++]);
            var sommaAmountMarzo = sommaMarzo;
            console.log("somma di marzo:" + sommaMarzo);

            /******** SOMMA APRILE ********/
            for (var i = 0, sommaAprile = 0; i < aprile.length; sommaAprile += aprile[i++]);
            var sommaAmountAprile = sommaAprile;
            console.log("somma di aprile:" + sommaAprile);

            /******** SOMMA MAGGO ********/
            for (var i = 0, sommaMaggio = 0; i < maggio.length; sommaMaggio += maggio[i++]);
            var sommaAmountMaggio = sommaMaggio;
            console.log("somma di maggio:" + sommaMaggio);

            /******** SOMMA GIUGNO ********/
            for (var i = 0, sommaGiugno = 0; i < giugno.length; sommaGiugno += giugno[i++]);
            var sommaAmountGiugno = sommaGiugno;
            console.log("somma di giugno:" + sommaGiugno);

            /******** SOMMA LUGLIO ********/
            for (var i = 0, sommaLuglio = 0; i < luglio.length; sommaLuglio += luglio[i++]);
            var sommaAmountLuglio = sommaLuglio;
            console.log("somma di luglio:" + sommaLuglio);

            /******** SOMMA AGOSTO ********/
            for (var i = 0, sommaAgosto = 0; i < agosto.length; sommaAgosto += agosto[i++]);
            var sommaAmountAgosto = sommaAgosto;
            console.log("somma di agosto:" + sommaAgosto);

            /******** SOMMA SETTEMBRE ********/
            for (var i = 0, sommaSettembre = 0; i < settembre.length; sommaSettembre += settembre[i++]);
            var sommaAmountSettembre = sommaSettembre;
            console.log("somma di settembre:" + sommaSettembre);

            /******** SOMMA OTTOBRE ********/
            for (var i = 0, sommaOttobre = 0; i < ottobre.length; sommaOttobre += ottobre[i++]);
            var sommaAmountOttobre = sommaOttobre;
            console.log("somma di ottobre:" + sommaOttobre);

            /******** SOMMA NOVEMBRE ********/
            for (var i = 0, sommaNovembre = 0; i < novembre.length; sommaNovembre += novembre[i++]);
            var sommaAmountNovembre = sommaNovembre;
            console.log("somma di novembre:" + sommaNovembre);

            /******** SOMMA DICEMBRE ********/
            for (var i = 0, sommaDicembre = 0; i < dicembre.length; sommaDicembre += dicembre[i++]);
            var sommaAmountDicembre = sommaDicembre;
            console.log("somma di dicembre:" + sommaDicembre);


            /********************************* GRAFICO ***************************/

            var mesiConValori = [ //creo il json... 
                { mese: "gennaio", quantita: sommaAmountGennaio },
                { mese: "febbraio", quantita: sommaAmountFebbraio },
                { mese: "marzo", quantita: sommaAmountMarzo },
                { mese: "aprile", quantita: sommaAmountAprile },
                { mese: "maggio", quantita: sommaAmountMaggio },
                { mese: "giugno", quantita: sommaAmountGiugno },
                { mese: "luglio", quantita: sommaAmountLuglio },
                { mese: "agosto", quantita: sommaAmountAgosto },
                { mese: "settembre", quantita: sommaAmountSettembre },
                { mese: "ottobre", quantita: sommaAmountOttobre },
                { mese: "novembre", quantita: sommaAmountNovembre },
                { mese: "dicembre", quantita: sommaAmountDicembre },
            ]


            var oggettoIntermedio = {}; //oggetto che avrà i nomi dei mesi per chiavi, e le loro corrispettive somme per valori... 

            for (var i = 0; i < mesiConValori.length; i++) {
                var meseSingolo = mesiConValori[i];
                var mese = meseSingolo.mese;
                if (oggettoIntermedio[mese] === undefined) {
                    oggettoIntermedio[mese] = 0;
                }

                oggettoIntermedio[mese] += meseSingolo.quantita;

            }


            var arrayMesi = [];
            var arrayQuantita = [];

            for (var key in oggettoIntermedio) {
                arrayMesi.push(key); //pusha il nome del mese nell'array mesi
                arrayQuantita.push(oggettoIntermedio[key]); //pusha la sua corrispettiva quantità (somma dei valori di prima) nell'arrayQuantita
            }



            var ctx = $('#grafico');
            var chart = new Chart(ctx, {

                type: "line",
                //type: "pie",
                data: {
                    datasets: [{
                        data: arrayQuantita, //asse delle ordinate (Y)
                        backgroundColor: ["rgba(0, 188, 212, 0.5)"],
                        //(((per type: pie))) backgroundColor: ['rgba(242, 38, 59, 0.75)', 'rgba(233, 30, 99, 0.75)', 'rgba(156, 39, 176, 0.75)', 'rgba(63, 81, 181, 0.75)', 'rgba(29, 132, 215, 0.75)', 'rgba(0, 188, 212, 0.75)', 'rgba(0, 150, 136, 0.75)', 'rgba(76, 175, 80, 0.75)', 'rgba(205, 220, 57, 0.75)', 'rgba(255, 235, 59, 0.75)', 'rgba(255, 152, 0, 0.75)', 'rgba(244, 67, 54, 0.75)'],
                    }],


                    labels: arrayMesi, //asse delle ascisse (X)
                    options: {

                    }
                }

            });

        },
        error: function () {
            alert("c'è un errore nel caricamento della pagina");
        },

    });


});
