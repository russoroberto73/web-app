
import '@/Vetrina/assets/styles/Handiphone.css';
import FotoRoby from "@/Vetrina/views/handiphone/immagini/HandiphoneFotoRoby.jpg";
import FotoSmartphone from "@/Vetrina/views/handiphone/immagini/Handiphonefotorobysmartphone.png";
const HandiphoneIdeareTesto = `
        Sono questi gli elementi grazie a cui sono riuscito<br />
        a progettare <b>Handiphone</b><br />
        per sopperire alle mie difficoltà di comunicazione.<br />
        Ho voluto un dispositivo affidabile e facile da usare<br />
        in modo da essere usato sia da me<br />
        che da altre persone con la mia stessa difficoltà.`;
export const HandiphoneIdeatore_ts = {
  HandiphoneIdeareTesto, FotoRoby, FotoSmartphone
 };

import FotoParlino from '@/Vetrina/views/handiphone/immagini/Parlino.png';
const DescrizioneTesto = `
        Handiphone è un comunicatore vocale<br />progettato per essere accessibile a
        tutti,<br />realizzato con <b>passione</b><br />garadendo inclusività<br />e semplicità d'uso<br />grazie al
        nuovo
        Parlino<br />da me ideato.</span>`;
export const HandiphoneDescrizione_ts = {
  FotoParlino,
  DescrizioneTesto
};

const AltaTecologia = {Titolo: "Alta Tecnologia", Descrizione:`Struttura personalizzata grazie alla stempante 3D<br />
          Scrittura più veloce grazie alle abbreviazioni delle parole più comuni.<br />
          Utile anche per presentazioni in pubblico, grazie all'assegnazione di un intero testo ad un codice.` };
const AltaCompatibilita = {Titolo: "Alta compatibiltà", Descrizione:`
            Utilizza Handiphone, un'app per Android utilizzabile su smartphone e tablet.<br />
            La struttura indica sia una tastiera che una cassa bluetooth per facilitare la
            scrittuira<br />
            e avere un volume che premetta di essere sentito anche a distanza` };
const AltaPersonalizzazione = {Titolo: "Alta personalizzazione", Descrizione:`
            Adatta Handiphone alle tue esigenze.<br />
            Regola la dimensione dei caratteri e il volume.<br />
            Personalizza la sintesi vocali scegliendo tra voci maschili<br />o femminili` };
export const HandiphoneSpecifiche_ts = {
  AltaTecologia,
  AltaCompatibilita,
  AltaPersonalizzazione
}
