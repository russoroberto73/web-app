<template>
  <div>
    <div class="TitoloPagina">
      <h1 style="font-size: 30px; color: #fff">{{ Titolo }}</h1>
    </div>
  </div>
  <div class="hidden xl:block">
    <div style="width: 1100px; background-color: #fff; color: #fff; height: 1050px" id="box">
      {{ top }}
      <div
        id="primo"
        style="
          width: 100px;
          height: 100px;
          background-color: #fff;
          border: 1px red solid;
          position: relative;
          color: #fff;
        "
        :style="[{ left: sx + 'px' }, { top: top + 'px' }]"
      ></div>
    </div>
    <div
      style="position: fixed; background-color: #fff; border: 5px blue solid"
      :style="[
        larghezza < 2000
          ? {
              left: '0px',
              fontSize: '14px',
              height: '50px',
              bottom: '0px',
              width: '1100px',
              display: 'flex',
              alignItems: 'center',
            }
          : { left: '1200px', top: '100px', fontSize: '30px', padding: '50px' },
      ]"
    >
      <span v-if="speedstart != speed" style="padding: 10px"
        >Mancano solo <b>{{ speedstart - timer }}</b> secondi per aprire il rubinetto</span
      >
      <span v-if="caselle != 0">{{ caselle }}</span>
      <span v-if="debug"><table :items="punteggio"></table></span>
      <button @click="Rigioca" style="background-color: var(--Bottoni); margin: 2px; float: right">
        rigioca
      </button>
    </div>
  </div>
</template>
<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'TestTest',
  data() {
    return {
      Titolo: 'Rivisitazione del vecchio gioco Pipe che giocavo quando avevo un pc 286',
      Lorem:
        'Lorem Ipsum è un testo segnaposto utilizzato nel settore della tipografia e della stampa. Lorem Ipsum è considerato il testo segnaposto standard sin dal sedicesimo secolo, quando un anonimo tipografo prese una cassetta di caratteri e li assemblò per preparare un testo campione. È sopravvissuto non solo a più di cinque secoli, ma anche al passaggio alla videoimpaginazione, pervenendoci sostanzialmente inalterato. Fu reso popolare, negli anni ’60, con la diffusione dei fogli di caratteri trasferibili “Letraset”, che contenevano passaggi del Lorem Ipsum, e più recentemente da software di impaginazione come Aldus PageMaker, che includeva versioni del Lorem Ipsum.',
      TuboVerticale: 'M35,0V10H45V90H35V100H65V90H55V10H65V0H35',
      TuboOrizzontale: 'M10,45V34H0V65H10V55H90V65H100V35H90V45H10',
      larghezza: 0,
      sx: 1100,
      top: 2000,
      topmax: 2000,
      gap: 170,
      tessera: '',
      numero: 1,
      timer: 1,
      tesseraattiva: 1,
      tesserapassata: 0,
      prossimatessera: 0,
      verticale: 1,
      orizzontale: 2,
      upsx: 3,
      updx: 4,
      dnsx: 5,
      dndx: 6,
      incrocio: 7,
      incrocioorizzontale: 8,
      incrocioverticale: 9,
      array_tessere: [],
      speed: 10,
      speedstart: 11,
      caselle: 0,
      penultima: 0,
      tesserepassate: [],
      punteggio: [],
      totale: 0,
      debug: false,
    }
  },
  created() {
    this.array_tessere = [
      this.verticale,
      this.orizzontale,
      this.incrocio,
      this.incrocio,
      this.orizzontale,
      this.dnsx,
      this.updx,
      this.orizzontale,
      this.incrocio,
      this.dndx,
      this.upsx,
      this.updx,
      this.dnsx,
      this.orizzontale,
      this.incrocio,
      this.updx,
      this.dndx,
      this.upsx,
      this.dnsx,
      this.orizzontale,
      this.dndx,
      this.verticale,
      this.verticale,
      this.incrocio,
      this.updx,
      this.upsx,
      this.dnsx,
      this.dndx,
      this.updx,
      this.orizzontale,
      this.orizzontale,
      this.orizzontale,
      this.incrocio,
      this.upsx,
      this.dnsx,
      this.updx,
      this.dnsx,
      this.orizzontale,
      this.dndx,
      this.incrocio,
      this.upsx,
      this.dnsx,
      this.dndx,
      this.dndx,
      this.verticale,
    ]
    this.larghezza = window.innerWidth
    this.tessera = this.array_tessere[this.prossimatessera++]
    document.body.addEventListener('keydown', (e) => {
      const elements = document.getElementsByClassName('tessera')
      if (e.key === 'ArrowRight' && this.sx < 1000) {
        this.sx = this.Check_orizzontale_da_sx_a_dx(elements, this.sx, this.top, 1)
      }
      if (e.key === 'ArrowLeft' && this.sx > 0) {
        this.sx = this.Check_orizzontale_da_dx_a_sx(elements, this.sx, this.top, 1)
      }
      if (e.key === 'ArrowDown' && this.top < this.topmax) {
        this.top = this.Check_verticale_da_top_a_down(elements, this.sx, this.top, 1)
      }
      if (e.key === 'ArrowUp' && this.top > 0) {
        this.top = this.Check_verticale_da_down_a_top(elements, this.sx, this.top, 1)
      }
      if (e.key === 'Enter' && this.sx < 1001) {
        if (!document.getElementById('tessera' + this.numero)) {
          const elemDiv = document.createElement('div')
          const tipotessera = this.SceltaImg(this.tessera)
          elemDiv.style =
            'position:absolute;width:100px;height:100px;background:#ffffff;border:1px blue solid;color:#fff;top:' +
            (this.top + this.gap) +
            'px;left:' +
            this.sx +
            'px'
          elemDiv.setAttribute('class', 'tessera ' + tipotessera)
          elemDiv.setAttribute('id', 'tessera' + this.numero)
          elemDiv.innerHTML = this.Carica(
            this.numero,
            this.SceltaImg(this.tessera),
            this.top,
            this.sx,
          )
          this.top = 925
          this.topmax = 924

          this.sx = 1100
          document.body.appendChild(elemDiv)
          this.tessera = this.array_tessere[this.prossimatessera++]
          this.tessera = Math.floor(Math.random() * 7 + 1)
          const primo = document.getElementById('primo')
          primo.setAttribute('class', this.SceltaImg(this.tessera))
          primo.innerHTML = this.Carica(0, this.SceltaImg(this.tessera))
          this.numero++
        }
      }
      if (e.key === ' ') {
        this.speed = 1
        this.speedstart = 1
      }
    })
  },
  mounted() {
    const primo = document.getElementById('primo')
    const n = 0
    primo.innerHTML = this.Carica(n, 'verticale')

    this.top = 925
    this.topmax = 925

    setTimeout(() => {
      this.StartGame()
    }, 1000)
  },
  methods: {
    StartGame() {
      let n = 0
      let ComparaTipo = ''
      let direzione = ''
      setTimeout(() => {
        let gameover = false
        let tipoimg
        this.timer++
        if (this.timer >= this.speedstart) {
          this.timer = 1
          this.speedstart = 10
          if (this.tesseraattiva > 0) {
            if (document.getElementById('tessera' + this.tesseraattiva)) {
              const img = document.getElementById('tessera' + this.tesseraattiva)
              const top = img.style.top
              const left = img.style.left
              let tipo = ''
              if (img) {
                tipo = img.getAttribute('class').substring(8, img.getAttribute('class').length)
              }
              const elements = document.getElementsByClassName('tessera')
              ComparaTipo = 'verticale'
              if (tipo === ComparaTipo) {
                direzione = 'up'
                Array.from(elements).forEach((el, index) => {
                  if (this.CheckNextBox(el, top, left, direzione)) {
                    tipoimg = this.Log(ComparaTipo, el, left, top, direzione, index)
                    n = this.TrovaProssimaTessera(ComparaTipo, el, tipoimg, img, direzione)
                  }
                })
                if (n === 0) {
                  direzione = 'dn'
                  Array.from(elements).forEach((el, index) => {
                    if (this.CheckNextBox(el, top, left, direzione)) {
                      tipoimg = this.Log(ComparaTipo, el, left, top, direzione, index)
                      n = this.TrovaProssimaTessera(ComparaTipo, el, tipoimg, img, direzione)
                    }
                  })
                }
              }
              ComparaTipo = 'orizzontale'
              if (tipo === ComparaTipo) {
                direzione = 'right'
                Array.from(elements).forEach((el, index) => {
                  if (this.CheckNextBox(el, top, left, direzione)) {
                    tipoimg = this.Log(ComparaTipo, el, left, top, direzione, index)
                    n = this.TrovaProssimaTessera(ComparaTipo, el, tipoimg, img, direzione)
                  }
                })
                if (n === 0) {
                  direzione = 'left'
                  Array.from(elements).forEach((el, index) => {
                    if (this.CheckNextBox(el, top, left, direzione)) {
                      tipoimg = this.Log(ComparaTipo, el, left, top, direzione, index)
                      n = this.TrovaProssimaTessera(ComparaTipo, el, tipoimg, img, direzione)
                    }
                  })
                }
              }
              ComparaTipo = 'angoloupsx'
              if (tipo === ComparaTipo) {
                direzione = 'dn'
                Array.from(elements).forEach((el, index) => {
                  if (this.CheckNextBox(el, top, left, direzione)) {
                    // console.log("Q")
                    tipoimg = this.Log(ComparaTipo, el, left, top, direzione, index)
                    n = this.TrovaProssimaTessera(ComparaTipo, el, tipoimg, img, direzione)
                  }
                })
                if (n === 0) {
                  direzione = 'right'
                  Array.from(elements).forEach((el, index) => {
                    if (this.CheckNextBox(el, top, left, direzione)) {
                      tipoimg = this.Log(ComparaTipo, el, left, top, direzione, index)
                      n = this.TrovaProssimaTessera(ComparaTipo, el, tipoimg, img, direzione)
                    }
                  })
                }
              }
              ComparaTipo = 'angoloupdx'
              if (tipo === ComparaTipo) {
                direzione = 'dn'
                Array.from(elements).forEach((el, index) => {
                  if (this.CheckNextBox(el, top, left, direzione)) {
                    tipoimg = this.Log(ComparaTipo, el, left, top, direzione, index)
                    n = this.TrovaProssimaTessera(ComparaTipo, el, tipoimg, img, direzione)
                  }
                })
                if (n === 0) {
                  // console.log("s2")
                  direzione = 'left'
                  Array.from(elements).forEach((el, index) => {
                    if (this.CheckNextBox(el, top, left, direzione)) {
                      tipoimg = this.Log(ComparaTipo, el, left, top, direzione, index)
                      n = this.TrovaProssimaTessera(ComparaTipo, el, tipoimg, img, direzione)
                    }
                  })
                }
              }
              ComparaTipo = 'angolodnsx'
              if (tipo === ComparaTipo) {
                // console.log("q", ComparaTipo);
                direzione = 'right'
                Array.from(elements).forEach((el, index) => {
                  if (this.CheckNextBox(el, top, left, direzione)) {
                    tipoimg = this.Log(ComparaTipo, el, left, top, direzione, index)
                    n = this.TrovaProssimaTessera(ComparaTipo, el, tipoimg, img, direzione)
                  }
                })
                if (n === 0) {
                  // console.log("s2")
                  direzione = 'up'
                  Array.from(elements).forEach((el, index) => {
                    if (this.CheckNextBox(el, top, left, direzione)) {
                      tipoimg = this.Log(ComparaTipo, el, left, top, direzione, index)
                      n = this.TrovaProssimaTessera(ComparaTipo, el, tipoimg, img, direzione)
                    }
                  })
                }
              }
              ComparaTipo = 'angolodndx'
              if (tipo === ComparaTipo) {
                // console.log("q", ComparaTipo);
                direzione = 'left'
                Array.from(elements).forEach((el, index) => {
                  if (this.CheckNextBox(el, top, left, direzione)) {
                    tipoimg = this.Log(ComparaTipo, el, left, top, direzione, index)
                    n = this.TrovaProssimaTessera(ComparaTipo, el, tipoimg, img, direzione)
                  }
                })
                if (n === 0) {
                  // console.log("s2")
                  direzione = 'up'
                  Array.from(elements).forEach((el, index) => {
                    if (this.CheckNextBox(el, top, left, direzione)) {
                      tipoimg = this.Log(ComparaTipo, el, left, top, direzione, index)
                      n = this.TrovaProssimaTessera(ComparaTipo, el, tipoimg, img, direzione)
                    }
                  })
                }
              }
              ComparaTipo = 'incrocio'
              //console.log("435 tipo, ComparaTipo", tipo, ComparaTipo)
              const ClassDiv = document.getElementById(this.tesserepassate[this.caselle - 1])
              const ClassSvg = document.getElementById(
                'svg' + this.tesserepassate[this.caselle - 1],
              )
              //console.log("536", tipo, ComparaTipo, ClassDiv, ClassSvg)
              if (tipo === ComparaTipo) {
                //console.log("incrocio")
                /*console.log(
                  "446",
                  img,
                  "div",
                  ClassDiv.id,
                  ClassDiv.getAttribute("class"),
                  "svg",
                  ClassSvg.getAttribute("class"),
                  direzione
                )*/
                if (ClassSvg) {
                  if (
                    ClassSvg.getAttribute('class') === 'orizzontale' ||
                    ClassSvg.getAttribute('class') === 'angoloupsxleft' ||
                    ClassSvg.getAttribute('class') === 'angolodnsxleft' ||
                    ClassSvg.getAttribute('class') === 'incrocio' ||
                    ClassSvg.getAttribute('class') === 'incrocio ruota90' ||
                    ClassSvg.getAttribute('class') === 'incrocioverticale rispecchiaorizzontalmente'
                  ) {
                    //console.log("463 da sx a dx")
                    direzione = 'right'
                  } else if (
                    (ClassDiv.getAttribute('class').includes('ruota180') &&
                      ClassSvg.getAttribute('class') === 'orizzontale ruota90') ||
                    ClassSvg.getAttribute('class') === 'angoloupsxdn' ||
                    ClassSvg.getAttribute('class') === 'angoloupdxdn' ||
                    ClassSvg.getAttribute('class') === 'incrocio' ||
                    ClassSvg.getAttribute('class') === 'incrocio ruota270' ||
                    ClassSvg.getAttribute('class') === 'incrocioverticale ruota270'
                  ) {
                    //console.log("476 da up a dn", ClassSvg.getAttribute("class"))
                    direzione = 'dn'
                  } else if (
                    ClassSvg.getAttribute('class') === 'orizzontale ruota90' ||
                    ClassSvg.getAttribute('class') === 'angolodnsxup' ||
                    ClassSvg.getAttribute('class') === 'angolodndxup' ||
                    ClassSvg.getAttribute('class') === 'incrocio' ||
                    ClassSvg.getAttribute('class') === 'ruota90' ||
                    ClassSvg.getAttribute('class') === 'incrocioverticaleleft ruota90'
                  ) {
                    //console.log("486 da dn a up")
                    direzione = 'up'
                  } else if (
                    ClassSvg.getAttribute('class') === 'orizzontale ruota180' ||
                    ClassSvg.getAttribute('class') === 'angoloupdxright' ||
                    ClassSvg.getAttribute('class') === 'angolodndxright' ||
                    ClassSvg.getAttribute('class') === 'incrocio' ||
                    ClassSvg.getAttribute('class') === 'incrocioverticale ruota180'
                  ) {
                    /*  console.log(
                      "499 da dx a sx",
                      ClassSvg.getAttribute("class")
                    )*/
                    direzione = 'left'
                  }
                  //console.log("502", ClassSvg.getAttribute("class"), direzione)
                  Array.from(elements).forEach((el, index) => {
                    if (this.CheckNextBox(el, top, left, direzione)) {
                      //console.log("if checknextbox")
                      tipoimg = this.Log(ComparaTipo, el, left, top, direzione, index)
                      // console.log("tipoimg", tipoimg)
                      n = this.TrovaProssimaTessera(ComparaTipo, el, tipoimg, img, direzione)
                    }
                  })
                }
              }
              ComparaTipo = 'orizzontale incrocioorizzontale'
              if (tipo === ComparaTipo) {
                // console.log("tessera nuova", ClassSvg.getAttribute("class"))
                if (
                  ClassSvg.getAttribute('class') === 'orizzontale ruota180' ||
                  ClassSvg.getAttribute('class') === 'angolodndxright' ||
                  ClassSvg.getAttribute('class') === 'angoloupdxright' ||
                  ClassSvg.getAttribute('class') === 'incrocio'
                ) {
                  direzione = 'left'
                  // console.log("via libera", direzione)
                }
                if (
                  ClassSvg.getAttribute('class') === 'orizzontale' ||
                  ClassSvg.getAttribute('class') === 'angolodnsxleft' ||
                  ClassSvg.getAttribute('class') === 'angoloupsxleft' ||
                  ClassSvg.getAttribute('class') === 'incrocio'
                ) {
                  direzione = 'right'
                  // console.log("via libera ", direzione)
                }
                Array.from(elements).forEach((el, index) => {
                  // console.log(ClassSvg, direzione);
                  if (this.CheckNextBox(el, top, left, direzione)) {
                    // console.log("if checknextbox")
                    tipoimg = this.Log(ComparaTipo, el, left, top, direzione, index)
                    n = this.TrovaProssimaTessera(ComparaTipo, el, tipoimg, img, direzione)
                  }
                })
              }
              // console.log("tipo", tipo)
              ComparaTipo = 'incrocioorizzontale'
              if (tipo === ComparaTipo) {
                // console.log("nuovo inizio " + tipo)
                const ClassDivLeft = ClassDiv.style.left.substring(
                  0,
                  ClassDiv.style.left.length - 2,
                )
                if (parseInt(ClassDivLeft) < parseInt(left.substring(0, left.length - 2))) {
                  direzione = 'right'
                }
                if (parseInt(ClassDivLeft) > parseInt(left.substring(0, left.length - 2))) {
                  direzione = 'left'
                }
                // console.log("prima array.from", direzione);
                Array.from(elements).forEach((el, index) => {
                  if (this.CheckNextBox(el, top, left, direzione)) {
                    // console.log("if checknextbox", direzione)
                    tipoimg = this.Log(ComparaTipo, el, left, top, direzione, index)
                    // console.log(tipoimg)
                    n = this.TrovaProssimaTessera(ComparaTipo, el, tipoimg, img, direzione)
                  }
                })
              }
              ComparaTipo = 'incrocioverticale'
              if (tipo === ComparaTipo) {
                // console.log("nuovo inizio " + tipo)
                const ClassDivLeft = ClassDiv.style.left.substring(
                  0,
                  ClassDiv.style.left.length - 2,
                )
                if (parseInt(ClassDivLeft) < parseInt(left.substring(0, left.length - 2))) {
                  direzione = 'right'
                }
                if (parseInt(ClassDivLeft) > parseInt(left.substring(0, left.length - 2))) {
                  direzione = 'left'
                }
                // console.log(direzione, top, left)
                Array.from(elements).forEach((el, index) => {
                  if (this.CheckNextBox(el, top, left, direzione)) {
                    //console.log("if checknextbox", direzione)
                    tipoimg = this.Log(ComparaTipo, el, left, top, direzione, index)
                    // console.log(tipoimg)
                    n = this.TrovaProssimaTessera(ComparaTipo, el, tipoimg, img, direzione)
                  }
                })
              }
            }
          }
          if (this.tesseraattiva === 0) {
            console.log('tessere', this.punteggio)
            gameover = true
          }
          this.tesseraattiva = n
        }
        if (!gameover) {
          this.StartGame()
        }
      }, 1000)
    },
    Rigioca() {
      console.log('rigioca')
      location.reload()
      setTimeout(() => {
        this.StartGame()
      }, 1000)
    },
  },
  computed: {
    SceltaImg: function () {
      return (tessera) => {
        // console.log(tessera)
        let tipotessera
        switch (tessera) {
          case 1:
            tipotessera = 'verticale'
            break
          case 2:
            tipotessera = 'orizzontale'
            break
          case 3:
            tipotessera = 'angoloupsx'
            break
          case 4:
            tipotessera = 'angoloupdx'
            break
          case 5:
            tipotessera = 'angolodnsx'
            break
          case 6:
            tipotessera = 'angolodndx'
            break
          case 7:
            tipotessera = 'incrocio'
            break
          case 8:
            tipotessera = 'incrocioorizzontale'
            break
          case 9:
            tipotessera = 'incrocioverticale'
            break
        }
        return tipotessera
      }
    },
    Check_orizzontale_da_sx_a_dx: function () {
      return (elements, sx, top, n) => {
        let esiste = false
        Array.from(elements).forEach((el) => {
          if (el.style.left === sx + n * 100 + 'px' && el.style.top === top + this.gap + 'px') {
            esiste = true
          }
        })
        if (sx + 100 * n > 1000) {
          n = 0
        } else if (esiste) {
          return this.Check_orizzontale_da_sx_a_dx(elements, sx, top, ++n)
        }
        return sx + 100 * n
      }
    },
    Check_orizzontale_da_dx_a_sx: function () {
      return (elements, sx, top, n) => {
        let esiste = false
        Array.from(elements).forEach((el) => {
          if (el.style.left === sx - n * 100 + 'px' && el.style.top === top + this.gap + 'px') {
            esiste = true
          }
        })
        if (sx - 100 * n < 0) {
          n = 0
        } else if (esiste) {
          return this.Check_orizzontale_da_dx_a_sx(elements, sx, top, ++n)
        }
        return sx - 100 * n
      }
    },
    Check_verticale_da_top_a_down: function () {
      return (elements, sx, top, n) => {
        let esiste = false
        Array.from(elements).forEach((el) => {
          if (el.style.left === sx + 'px' && el.style.top === top + this.gap + 100 * n + 'px') {
            esiste = true
          }
        })
        if (top + 348 + 100 * n > 1100 + 347) {
          n = 0
        } else if (esiste) {
          return this.Check_verticale_da_top_a_down(elements, sx, top, ++n)
        }
        console.log(top, n, top+(n-2)*100, top+(n-2)*100)
        /**
         * 825 2  625+2*100
         * 725 3
         * 625 4
         */
        if (top+(n-2)*100 === (top+(n-2)*100) && n > 1) {
          n = 0
        }
        return top + 100 * n
      }
    },
    Check_verticale_da_down_a_top: function () {
      return (elements, sx, top, n) => {
        let esiste = false
        Array.from(elements).forEach((el) => {
          if (el.style.left === sx + 'px' && el.style.top === top + this.gap - 100 * n + 'px') {
            esiste = true
          }
        })
        if (top + 348 - 100 * n < 348) {
          n = 0
        } else if (esiste) {
          return this.Check_verticale_da_down_a_top(elements, sx, top, ++n)
        }
        return top - 100 * n
      }
    },
    CheckNextBox: function () {
      return (el, top, left, direzione) => {
        //console.log("896 checknextbox", direzione, el, top, left)
        let Condizione = false
        if (
          !(el.style.left === left && el.style.top === top) &&
          !el.getAttribute('class').includes('passata')
        ) {
          // console.log("Checknextbox #passata", direzione)
          switch (direzione) {
            case 'up':
              // console.log("up");
              Condizione =
                el.style.top === parseInt(top.substring(0, top.length - 2)) - 100 + 'px' &&
                el.style.left === left
              break
            case 'dn':
              // console.log("checknextbox dn", el, top, left)
              Condizione =
                el.style.top === parseInt(top.substring(0, top.length - 2)) + 100 + 'px' &&
                el.style.left === left
              // console.log(Condizione)
              break
            case 'right':
              Condizione =
                el.style.top === top &&
                el.style.left === parseInt(left.substr(0, left.length - 2)) + 100 + 'px'
              /*console.log(
                "checknextbox da sx a dx",
                direzione,
                el,
                top,
                left,
                Condizione
              )*/
              break
            case 'left':
              // console.log("left")
              Condizione =
                el.style.top === top &&
                el.style.left === parseInt(left.substr(0, left.length - 2)) - 100 + 'px'
              /*console.log(
                "checknextbox da dx a sx",
                direzione,
                el,
                top,
                left,
                Condizione
              )*/
              break
          }
        }
        //console.log("806 Checknextbox", Condizione)
        return Condizione
      }
    },
    Log: function () {
      return (tesseraattiva, el, left, top, direzione, index) => {
        console.log('log', el, left, top, direzione, index)
        const prossimatessera = el
          .getAttribute('class')
          .substring(8, el.getAttribute('class').length)
        return prossimatessera
      }
    },
    TrovaProssimaTessera: function () {
      return (tipo, el, tipoimg, img, direzione) => {
        console.log('821 TrovaProssimaTessera', tipo, tipoimg, el, direzione)
        let Condizione = false
        let n = 0
        switch (direzione) {
          case 'up':
            // console.log("TrovaProssimaTessera up", tipoimg)
            Condizione =
              tipoimg === 'verticale' ||
              tipoimg === 'angoloupsx' ||
              tipoimg === 'angoloupdx' ||
              tipoimg === 'incrocio' ||
              tipoimg === 'incrocioorizzontale'
            break
          case 'left':
            // console.log("TrovaProssimaTessera left", tipoimg)
            Condizione =
              tipoimg === 'orizzontale' ||
              tipoimg === 'angoloupsx' ||
              tipoimg === 'angolodnsx' ||
              tipoimg === 'incrocio' ||
              tipoimg === 'incrocio ruota90' ||
              tipoimg === 'incrocioverticaleleft'
            break
          case 'dn':
            Condizione =
              tipoimg === 'verticale' ||
              tipoimg === 'angolodnsx' ||
              tipoimg === 'angolodndx' ||
              tipoimg === 'incrocio' ||
              tipoimg === 'incrocioorizzontale'
            break
          case 'right':
            // console.log("right", tipoimg)
            Condizione =
              tipoimg === 'orizzontale' ||
              tipoimg === 'angoloupdx' ||
              tipoimg === 'angolodndx' ||
              tipoimg === 'incrocio' ||
              tipoimg === 'incrocioverticaleright'
            break
        }
        //console.log("861 TrovaProssimaTessera condizione", Condizione)
        if (Condizione) {
          // console.log("dentro if condizione della funzione TrovaProssimaTessera")
          this.tesserepassate.push(img.id)
          const tipotesserapassata = img
            .getAttribute('class')
            .substring(8, img.getAttribute('class').length)
          const svg = document.getElementById('svg' + img.id)
          // console.log("img={id=" + img.id + ", class=" + img.getAttribute("class") + ", left=" + img.style.left + ", top=" + img.style.top + "}", "tipoimg=" + tipoimg, "direzione=" + direzione, "tipotesserapassata=" + tipotesserapassata)
          // console.log(svg.getAttribute("class"))
          let punti
          switch (svg.getAttribute('class')) {
            case 'orizzontale ruota90':
            case 'orizzontale':
              punti = 10
              break
            case 'angoloupdnright':
            case 'angoloupsxleft':
            case 'angoloupdxright':
            case 'angolodnsxup':
            case 'angolodndxright':
              punti = 50
              break
            case 'incrocio':
              punti = 100
              break
            case 'incrocioverticale180':
            case 'svgincrocioorizzontale':
            case 'incrocioverticale ruota180':
              punti = 150
              break
            default:
              punti = 0
              break
          }
          this.punteggio.push({ casella: svg.getAttribute('class'), punti })
          this.totale += punti
          /*console.log(
            "1027 trovata " + tipoimg + " direzione " + direzione,
            el.style.left,
            el.style.top
          )*/
          // console.log(tipotesserapassata)
          const ntessera = img.id.substring(7, img.id.length)
          if (tipotesserapassata !== 'incrocio') {
            img.classList.add('passata')
          } else {
            if (direzione === 'left' || direzione === 'right') {
              img.setAttribute('class', 'tessera verticale')
              setTimeout(() => {
                img.innerHTML = this.Carica(ntessera, 'incrocioverticale' + direzione)
              }, 1000 * this.speed)
            } else {
              img.setAttribute('class', 'tessera orizzontale')
              setTimeout(() => {
                img.innerHTML = this.Carica(ntessera, 'incrocioorizzontale')
              }, 1000 * this.speed)
            }
          }
          if (tipotesserapassata === 'verticale' && direzione === 'dn') {
            if (img.getAttribute('class') === 'tessera incrocio') {
              img.innerHTML = this.Carica(ntessera, 'incrocioorizzontale')
            } else {
              svg.setAttribute('class', 'incrocioverticale ruota270')
            }
          }
          if (tipotesserapassata === 'orizzontale') {
            svg.setAttribute('class', 'orizzontale')
            if (direzione === 'left') {
              svg.classList.add('ruota180')
            }
          }
          if (tipotesserapassata === 'angoloupsx' && direzione === 'dn') {
            // console.log("upsx dn")
            svg.setAttribute('class', 'angoloupsxdn')
          }
          if (tipotesserapassata === 'angoloupdx' && direzione === 'dn') {
            // console.log("updx dn")
            svg.setAttribute('class', 'angoloupdxdn')
          }
          if (tipotesserapassata === 'angolodnsx' && direzione === 'right') {
            // console.log("dnsx right")
            svg.setAttribute('class', 'angolodnsxleft')
          }
          if (tipotesserapassata === 'angolodndx' && direzione === 'up') {
            // console.log("dndx up")
            svg.setAttribute('class', 'angolodndxup')
          }
          //console.log(tipotesserapassata, svg, direzione)
          if (tipotesserapassata === 'incrocio') {
            switch (direzione) {
              case 'up':
                //console.log("incrocio up")
                svg.setAttribute('class', 'ruota90')
                break
              case 'dn':
                svg.setAttribute('class', 'incrocio ruota270')
                break
              case 'left':
                //console.log("incrocio left")
                svg.setAttribute('class', 'incrocioverticale ruota180')
                break
              case 'right':
                //console.log("incrocio right")
                svg.setAttribute('class', 'incrocioverticale rispecchiaorizzontalmente')
                break
            }
          }
          // console.log("tipotesserapassata", tipotesserapassata)
          if (tipotesserapassata === 'incrocioorizzontale' && direzione === 'right') {
            // console.log('if ori incrocioori')
            const svg = document.getElementById('svg' + img.id)
            // console.log("ori right", svg.getAttribute("class"));
            svg.setAttribute('class', 'incrocioorizzontale ruota270')
          }
          const tessera = document.getElementById('tubo' + img.id)
          //console.log(tessera, img.id)
          tessera.beginElement()
          this.tesserapassata = img.id.substring(7, img.id.length)
          n = parseInt(el.id.substring(7, el.id.length))
          this.caselle++
          // console.log('TrovaProssimaTessera n', n)
        }
        return n
      }
    },
    Carica: function () {
      return (n, tipo, top = 0, left = 0) => {
        let svg
        let classe = ''
        //console.log(tipo)
        switch (tipo) {
          case 'orizzontale':
          case 'verticale':
            if (tipo === 'verticale') {
              classe = ' ruota90'
            }
            svg = `<svg id="svgtessera${n}" class="orizzontale${classe}" viewBox="0 0 100 100" style="background-color: #fff; width: 100px; height: 100px; border: 1px black solid;">
                    ${this.Animazione(n)}
                    <path
                      class="tubovuoto"
                      d="${this.TuboOrizzontale}"
                      fill="#fff"
                      stroke="grey" stroke-width="5"
                    />
                    <path
                      class="tubopieno"
                      d="${this.TuboOrizzontale}"
                      fill="#0000ff"
                      clip-path="url(#left-to-right${n})"
                      stroke="grey" stroke-width="5"
                    />
                  </svg>`
            break
          case 'angoloupsx':
          case 'angoloupdx':
          case 'angolodnsx':
          case 'angolodndx':
            // console.log(tipo)
            if (tipo === 'angolodnsx') {
              classe = 'angolodnsxup'
            }
            if (tipo === 'angolodndx') {
              classe = 'angolodndxright'
            }
            if (tipo === 'angoloupsx') {
              classe = 'angoloupsxleft'
            }
            if (tipo === 'angoloupdx') {
              classe = 'angoloupdxright'
            }
            svg = `<svg id="svgtessera${n}" class="${classe}" viewBox="0 0 100 100" style="background-color: #fff; width: 100px; height: 100px; border: 1px black solid;">
                    ${this.Animazione(n)}
                    <path
                      class="tubovuoto"
                      d="M55,10h10V0H35v10h10c-0.3,24.6,0.5,39.5-35,35V35H0v30h10v-9.3C47.9,54.9,55,49,55.6,10"
                      fill="#fff"
                      stroke="grey" stroke-width="5"
                    />
                    <path
                      class="tubopieno"
                      d="M55,10h10V0H35v10h10c-0.3,24.6,0.5,39.5-35,35V35H0v30h10v-9.3C47.9,54.9,55,49,55.6,10"
                      fill="#0000ff"
                      clip-path="url(#left-to-right${n})"
                      stroke="grey" stroke-width="5"
                    />
                </svg>`
            break
          case 'incrocio':
            svg = `<svg id="svgtessera${n}" class="incrocio ruota90" viewBox="0 0 100 100" style="background-color: #fff; width: 100px; height: 100px; border: 1px black solid;">
                    ${this.Animazione(n)}
                    <path
                      id="tubotesserav${n}"
                      class="tubovuoto"
                      d="${this.TuboOrizzontale}"
                      fill="#fff"
                      stroke="grey" stroke-width="5"
                    />
                    <path
                      id="tubotesserao${n}"
                      class="tubovuoto"
                      d="${this.TuboVerticale}"
                      fill="#fff"
                      stroke="grey" stroke-width="5"
                    />
                    <path
                      class="tubopieno"
                      d="${this.TuboOrizzontale}"
                      fill="#0000ff"
                      stroke="grey" stroke-width="5"
                      clip-path="url(#left-to-right${n})"
                    />
                </svg>`
            break
          case 'incrocioorizzontale':
            svg = `<svg id="svgtessera${n}" class="svg${tipo}" viewBox="0 0 100 100" style="background-color: #fff; width: 100px; height: 100px; border: 1px black solid;">
                    ${this.Animazione(n)}
                    <path
                      id="tubotesserav${n}"
                      class="tubovuoto"
                      d="${this.TuboOrizzontale}"
                      fill="#fff"
                      stroke="grey" stroke-width="5"
                    />
                    <path
                      id="tubotesserao${n}"
                      class="tubopieno"
                      d="${this.TuboVerticale}"
                      fill="#0000ff"
                      stroke="grey" stroke-width="5"
                    />
                    <path
                      id="tubotesserav${n}"
                      class="tubopieno"
                      d="${this.TuboOrizzontale}"
                      fill="#0000ff"
                      stroke="grey" stroke-width="5"
                      clip-path="url(#left-to-right${n})"
                    />
                </svg>`
            break
          case 'incrocioverticaleleft':
          case 'incrocioverticaleright':
            svg = `<svg id="svgtessera${n}" class="${tipo} ruota90" viewBox="0 0 100 100" style="background-color: #fff; width: 100px; height: 100px; border: 1px black solid;">
                    ${this.Animazione(n)}
                    <path
                      id="tubotesserav${n}"
                      class="tubovuoto"
                      d="${this.TuboOrizzontale}"
                      fill="#fff"
                      stroke="grey" stroke-width="5"
                    />
                    <path
                      id="tubotesserao${n}"
                      class="tubovuoto"
                      d="${this.TuboVerticale}"
                      fill="#0000ff"
                      stroke="grey" stroke-width="5"
                    />
                    <path
                      class="tubopieno"
                      d="${this.TuboOrizzontale}"
                      fill="#0000ff"
                      stroke="grey" stroke-width="5"
                      clip-path="url(#left-to-right${n})"
                    />
                </svg>`
            break
        }
        return svg
      }
    },
    Animazione() {
      return function (n) {
        return `<defs>
                      <clipPath id="left-to-right${n}">
                        <rect x="0" y="0" width="0" height="100">
                          <animate
                            id="tubotessera${n}"
                            attributeName="width"
                            values="0;100"
                            dur="${this.speed}s"
                            fill="freeze"
                            begin="click"
                          />
                        </rect>
                      </clipPath>
                    </defs>`
      }
    },
  },
  watch: {
    tesseraattiva() {
      // console.log("watch tesseraattiva");
      if (this.tesseraattiva === 0) {
        this.caselle =
          'Game over hai fatto il tubo di ' +
          this.caselle +
          ' caselle, hai totalizzato ' +
          this.totale +
          ' punti'
        const ultima = document.getElementById('tubotessera' + this.penultima)
        // console.log(this.penultima, ultima)
        if (ultima) {
          ultima.setAttribute('fill', '#0000ff')
        }
      } else {
        this.penultima = this.tesseraattiva
      }
    },
  },
})
</script>
<style>
.passata {
  background-color: gray !important;
}
.rispecchiaorizzontalmente {
  transform: rotate(0deg) !important;
}

.ruota90 {
  transform: rotate(-90deg) !important;
}

.incrocioverticale {
  transform: rotate(90deg);
}

.svgincrocioorizzontale {
  transform: rotate(180deg) !important;
}

.ruota180 {
  transform: rotate(180deg) !important;
}

.ruota270 {
  transform: rotate(-270deg) !important;
}

.angoloupsx {
  transform: rotate(-90deg) scaleY(-1) !important;
}

.angoloupsxdn {
  transform: rotate(90deg) scaleY(-1) !important;
}

.angoloupdx {
  transform: rotate(-90deg) !important;
}

.angoloupdxdn {
  transform: rotate(-90deg) scaleX(-1) !important;
}

.angolodnsx {
  transform: rotate(-180deg) scaleY(-1) !important;
}

.angolodnsxleft {
  transform: rotate(90deg) scaleY(-1) !important;
}

.angolodndx {
  transform: rotate(90deg) scaleY(-1) !important;
}

.angolodndxup {
  transform: rotate(270deg) scaleX(-1) !important;
}
</style>
