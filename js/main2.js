$(document).ready(function () {
    $.ajax({
        url: "http://157.230.17.132:4021/sales",
        type: "GET",

        success: function (arrayDiOggetti) {

            var arrayDiAmount = [
                0, //amount di gennaio
                0, //amount di febbraio
                0, //amount di marzo
                0, //ecc...
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,

            ]

            for (let i = 0; i < arrayDiOggetti.length; i++) {
                var oggettoSingolo = arrayDiOggetti[i];
                //console.log(oggettoSingolo);

                var dataDelcalendario = {
                    data: oggettoSingolo.date,
                }

                var mese = moment(dataDelcalendario.data, "DD-MM-YYYY").month();
                //console.log(mese);

                var quantita = oggettoSingolo.amount;
                //console.log("quantità: " + quantita);





                /***************************  O QUESTA.......... ********************/
                //arrayDiAmount[mese] += quantita;
                /***************************  O QUESTA.......... ********************/

                switch (mese) {
                    case 0:
                        arrayDiAmount[0] += quantita;
                        break;
                    case 1:
                        arrayDiAmount[1] += quantita;
                        break;
                    case 2:
                        arrayDiAmount[2] += quantita;
                        break;
                    case 3:
                        arrayDiAmount[3] += quantita;
                        break;
                    case 4:
                        arrayDiAmount[4] += quantita;
                        break;
                    case 5:
                        arrayDiAmount[5] += quantita;
                        break;
                    case 6:
                        arrayDiAmount[6] += quantita;
                        break;
                    case 7:
                        arrayDiAmount[7] += quantita;
                        break;
                    case 8:
                        arrayDiAmount[8] += quantita;
                        break;
                    case 9:
                        arrayDiAmount[9] += quantita;
                        break;
                    case 10:
                        arrayDiAmount[10] += quantita;
                        break;
                    case 11:
                        arrayDiAmount[11] += quantita;
                        break;

                }
            }


            /********************************* GRAFICO ***************************/

            var mesiConValori = [
                { mese: "gennaio", quantita: arrayDiAmount[0] },
                { mese: "febbraio", quantita: arrayDiAmount[1] },
                { mese: "marzo", quantita: arrayDiAmount[2] },
                { mese: "aprile", quantita: arrayDiAmount[3] },
                { mese: "maggio", quantita: arrayDiAmount[4] },
                { mese: "giugno", quantita: arrayDiAmount[5] },
                { mese: "luglio", quantita: arrayDiAmount[6] },
                { mese: "agosto", quantita: arrayDiAmount[7] },
                { mese: "settembre", quantita: arrayDiAmount[8] },
                { mese: "ottobre", quantita: arrayDiAmount[9] },
                { mese: "novembre", quantita: arrayDiAmount[10] },
                { mese: "dicembre", quantita: arrayDiAmount[11] },
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
                        backgroundColor: ["rgba(0, 188, 212, 0)"],
                        //(((per type: pie))) backgroundColor: ['rgba(242, 38, 59, 0.75)', 'rgba(233, 30, 99, 0.75)', 'rgba(156, 39, 176, 0.75)', 'rgba(63, 81, 181, 0.75)', 'rgba(29, 132, 215, 0.75)', 'rgba(0, 188, 212, 0.75)', 'rgba(0, 150, 136, 0.75)', 'rgba(76, 175, 80, 0.75)', 'rgba(205, 220, 57, 0.75)', 'rgba(255, 235, 59, 0.75)', 'rgba(255, 152, 0, 0.75)', 'rgba(244, 67, 54, 0.75)'],
                        borderColor: "rgba(0, 188, 212, 1)",
                        lineTension: 0,
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
