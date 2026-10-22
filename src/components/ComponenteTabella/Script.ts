import { Use } from './stores/CostruisciTabella.module'
import { ref, computed } from 'vue'
const TestModificaElimina = ref('')
const ArrayIdEliminazione = ref<string[]>([])
export function mymixin(props: any) {
  const IdAggiungiModificaElimina = ref('')
  const Obj = ref()
  const ConvertiDataInglese = (Data: string) => {
    let tmp = ''
    if (Data) {
      const gg = Data.substring(8, 10)
      const mm = Data.substring(5, 7)
      const aaaa = Data.substring(0, 4)
      tmp = gg + '-' + mm + '-' + aaaa
    }
    return tmp
  }
  const Intestazione = computed(() => {
    let tmp: object[] = []

    Object.keys(props.items).forEach((item) => {
      if (parseInt(item) === 0) {
        Object.keys(props.items[item]).forEach((iteminterno, index) => {
          if (TestModificaElimina.value === 'E' && index === 1) {
            tmp.push({ Campo: 'Eliminazione', Etichetta: 'Eliminazione' })
          }
          const Etichetta = props.items[item][iteminterno].Etichetta
          tmp.push({ Campo: iteminterno, Etichetta: Etichetta ? Etichetta : iteminterno })
        })
      }
    })
    return tmp
  })

  const CheckGruppoDaEliminare = computed(() => {
    let tmp = false
    ArrayIdEliminazione.value.forEach((item) => {
      if (item) {
        tmp = true
      }
    })
    return tmp
  })

  const EliminaGruppo = () => {
    //console.log('eliminagruppo', ArrayIdEliminazione.value)
    TestModificaElimina.value = 'M'
    IdAggiungiModificaElimina.value = ''
    ArrayIdEliminazione.value.forEach((item) => {
      if (item) {
        //console.log('eliminagruppo', item)
        props.pinia.Elimina(item)
      }
    })
    ArrayIdEliminazione.value = []
  }

  const BTNAzione = (param: { Tipo: string; Id: string | undefined }) => {
    let ObjTrovato: any
    let NuovoObj: { [key: string]: any } = {}
    if (param.Id && param.Id.length > 1) {
      ObjTrovato = props.items.find((item: { Id: { Value: string } }) => item.Id.Value === param.Id)
      //console.log('objtrovato', ObjTrovato)
      Object.keys(ObjTrovato).forEach((item) => {
        if (ObjTrovato[item].Visibile === 'hidden' && ObjTrovato[item].Value === '') {
          NuovoObj[item] = '#'
        } else {
          NuovoObj[item] = ObjTrovato[item].Value
        }
      })
      if (param.Tipo != 'Salva') {
        Obj.value = NuovoObj
        Use().Assegna(NuovoObj)
      }
    }
    if (param.Tipo === 'AbilitaAggiungi') {
      //console.log('abilitaaggiungi')
      const OggettoKeyValue: { [key: string]: any } = {}
      Object.keys(props.ProssimoElemento)
        .map((item) => {
          return { [item]: props.ProssimoElemento[item].Prossimo }
        })
        .forEach((item) => {
          Object.assign(OggettoKeyValue, item)
        })
      Obj.value = JSON.parse(JSON.stringify(OggettoKeyValue))
      Use().Assegna(JSON.parse(JSON.stringify(OggettoKeyValue)))
    }
    //console.log('BTNAzione', param)
    switch (param.Tipo) {
      case 'AbilitaAggiungi':
        TestModificaElimina.value = 'I'
        IdAggiungiModificaElimina.value = '0'
        ArrayIdEliminazione.value = []
        break
      case 'AbilitaModifica':
        TestModificaElimina.value = 'M'
        IdAggiungiModificaElimina.value = param.Id!
        ArrayIdEliminazione.value = []
        break
      case 'AbilitaElimina':
        TestModificaElimina.value = 'E'
        IdAggiungiModificaElimina.value = param.Id!
        ArrayIdEliminazione.value[0] = param.Id!
        setTimeout(() => {
          const element = document.getElementById(param.Id!) as HTMLInputElement
          if (element) {
            element.checked = true
            element.disabled = true
          }
        }, 0)
        break
      case 'EliminaDefinitivamente':
        props.pinia.Elimina(param.Id).then(() => AzzeraAzione())
        break
      case 'Salva':
        if (Use().ObjStore['Nessuno']) {
          props.pinia.Aggiungi(Use().ObjStore).then(() => AzzeraAzione())
        } else {
          Object.keys(Use().ObjStore).forEach((item) => {
            if (Use().ObjStore[item] === '#') {
              Use().ObjStore[item] = ''
            }
          })
          //console.log('salva', Use().ObjStore)
          if (Obj.value.Id != '0') {
            props.pinia.Aggiorna(Use().ObjStore).then(() => {
              //console.log(ObjTrovato.Id.Value, props.items[0])
              AzzeraAzione()
              Use().ObjStore = {}
            })
          } else {
            props.pinia.Aggiungi(Use().ObjStore).then(() => {
              AzzeraAzione()
              Use().ObjStore = {}
            })
          }
        }
      case 'Annulla':
        AzzeraAzione()
        break
      default:
        break
    }
    //console.log('BTNAzione', param, TestModificaElimina.value, IdAggiungiModificaElimina.value)
  }

  const AggiungiRecord = (obj: any, index: number) => {
    let abc: { [x: string]: any } = {}
    console.log('aggiungi record', obj, index)
    Object.keys(obj).forEach((item) => {
      abc[item] = obj[item].Value
    })

    if (Use().IdCategoriaNuovoMovimento[index]) {
      abc['IdCategoria'] = Use().IdCategoriaNuovoMovimento[index]
    }
    console.log('aggiungi', abc)
    props.pinia.Aggiungi(abc).then(() => AzzeraAzione())
  }
  const VerificaEsiste = (objdainserire: any) => {
    let Esiste = false
    let CampoDaEscludere = ''
    Object.keys(objdainserire).forEach((item) => {
      if (objdainserire[item].Array) {
        CampoDaEscludere = item
      }
    })
    let etichetta = ''
    let DataIniziale: any = 0
    let DataFinale: any = 0
    let Range: any = []
    Object.keys(objdainserire).forEach((item) => {
      if (objdainserire[item].ControllaIntervallo) {
        if (objdainserire[item].Type === 'date') {
          etichetta = item
          const DataMovimentoDaVerificare = new Date(objdainserire[item].Value)
          DataIniziale = new Date(DataMovimentoDaVerificare)
          DataIniziale.setDate(DataIniziale.getDate() - objdainserire[item].ControllaIntervallo)
          DataFinale = new Date(DataMovimentoDaVerificare)
          DataFinale.setDate(DataFinale.getDate() + objdainserire[item].ControllaIntervallo)
        }
        Range = props.pinia.getElenco.filter((itemp: any) => {
          const Data = new Date(Data_ggmmaaaa_aaaammgg(itemp[etichetta])).getTime()
          if (Data > DataIniziale && Data < DataFinale) {
            return true
          }
        })
      }
    })
    Range.forEach((element: any) => {
      let trovato: boolean[] = []
      let n = 0
      Object.keys(objdainserire).forEach((item) => {
        if (item != 'Id' && item != etichetta && item != CampoDaEscludere) {
          n++
          if (element[item] === objdainserire[item].Value) {
            trovato.push(true)
          } else {
            trovato.push(false)
          }
        }
      })
      let conta = 0
      trovato.forEach((it) => {
        if (it) {
          conta++
        }
      })
      if (n === conta) {
        Esiste = true
      }
    })
    return Esiste ? 'BTNDisabilitato' : 'BTNSalva'
  }

  const AzzeraAzione = () => {
    IdAggiungiModificaElimina.value = ''
    TestModificaElimina.value = 'M'
  }
  const ClassRiga = computed(() => {
    return (item: any) => {
      return IdAggiungiModificaElimina.value === item
        ? TestModificaElimina.value === 'E'
          ? 'FaseDiElimina'
          : 'FaseDiModifica'
        : ArrayIdEliminazione.value.includes(item)
          ? 'FaseDiElimina'
          : ''
    }
  })

  const ValidareCampi = computed(() => {
    let tmp = false
    let buffer: string[] = []
    Object.keys(props['items'][0]).forEach((item) => {
      if (props['items'][0][item].Valido) {
        if (!Use().ObjStore[item] || Use().ObjStore[item] === '') {
          tmp = true
        }
        if (props['items'][0][item].Type === 'select') {
          if (Use().ObjStore[item] === 'Tabella vuota') {
            tmp = true
          }
        }
      }
      if (props['items'][0][item].Controlla2Campi) {
        buffer.push(Use().ObjStore[item] ? Use().ObjStore[item] : '0')
      }
    })
    if (buffer.length > 0) {
      if (!tmp) {
        if (
          (parseInt(buffer[0]) === 0 && parseInt(buffer[1]) != 0) ||
          (parseInt(buffer[0]) != 0 && parseInt(buffer[1]) === 0)
        ) {
        } else {
          tmp = true
        }
      }
    }
    return tmp
  })

  const AbilitaCampo = (item: any, n: number) => {
    if (Use().ObjStore[Object.keys(Use().ItemsStore[0])[n]] === '#') {
      Use().ObjStore[Object.keys(Use().ItemsStore[0])[n]] = ''
    } /*else {
      Use().ObjStore[Object.keys(Use().ItemsStore[0])[n]] = ''
    } */
  }
  const VerificaEliminazione = computed(() => {
    return (Id: any) => {
      let tmp = false
      if (props.piniaverifica) {
        tmp = props.piniaverifica.getVerifica(Id)
      }
      return tmp
    }
  })

  const AssegnaValoreCombo = (event: any, nonso: any, index: any = '') => {
    console.log(index)
    Use().IdCategoriaNuovoMovimento[index] = event.target.value
  }

  const IdComboNome = (obj: any) => {
    let elemento
    if (obj.Array) {
      elemento = obj.Array.find((item: any) => {
        if (item.value === obj.Value) {
          return item
        }
      })
    }
    return elemento ? elemento.text : ''
  }

  const ControllaCampoSoloInserimento = (item: any) => {
    return !item[Object.keys(item)[6]].Value
  }

  const CheckFiltro = (Intestazione: any) => {
    let tmp: any[] = []
    if (Intestazione) {
      Object.keys(Intestazione).forEach((item) => {
        if (Intestazione[item].Filtro) {
          if (Intestazione[item].Etichetta) {
            tmp.push(Intestazione[item].Etichetta)
          } else {
            tmp.push(item)
          }
        }
      })
    }
    return tmp
  }
  const Filtro = ref<any[]>([])
  const BoolFiltro = (item: any, boolf: any[], pross: any) => {
    let tmp = true
    if (boolf)
      boolf.forEach((itemfiltro) => {
        if (itemfiltro !== '' && itemfiltro.Valore !== '') {
          if (pross && pross[itemfiltro.Nome] && pross[itemfiltro.Nome]['Record']) {
            const tr = pross[itemfiltro.Nome]['Record']['Dati'].filter((item: any) => {
              return item['Campo3'].substr(0, itemfiltro.Valore.length) === itemfiltro.Valore
            })
            tmp = tmp && tr.some((trItem: any) => trItem['Id'] === item[itemfiltro.Nome])
          } else {
            tmp =
              tmp && item[itemfiltro.Nome].substr(0, itemfiltro.Valore.length) === itemfiltro.Valore
          }
        }
      })
    return tmp
  }

  /////////////////
  const formatEuro = (amount: any) => {
    let numreturn: any = new Intl.NumberFormat('it-IT', {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }).format(amount)
    numreturn = numreturn === 'NaN' ? '' : numreturn
    return numreturn
  }
  const DatiCombo = (dati: any[], elemento: any, label: string) => {
    let tmp: any = []
    let ArrayTmp: any = []
    let Stringa: any = ''
    if (elemento) {
      dati.forEach((item, index) => {
        elemento.forEach((item: any) => {
          const Campo = Object.keys(dati[0] ?? {})[item]
          Stringa += (dati[index] ?? {})[Campo] + ' '
        })
        ArrayTmp.push({
          text: Stringa,
          value: (dati[index] ?? {})['Id'],
        })
        Stringa = ''
      })
    }
    ArrayTmp = ArrayTmp.sort((a: any, b: any) => {
      if (a.text < b.text) {
        return -1
      } else if (a.text > b.text) {
        return 1
      }
      return 0
    })
    tmp = [{ text: label, value: 'Tabella vuota' }, ...ArrayTmp]
    return tmp
  }

  const OrdinamentoColonna = (elemento: number, array: any[]) => {
    if (elemento === 0) return array

    return [...array].sort((a, b) => {
      const chiave = Object.keys(a)[elemento]

      const aValue = a[chiave].Value
      const bValue = b[chiave].Value

      if (aValue < bValue) return -1
      if (aValue > bValue) return 1
      return 0
    })
  }
  return {
    Intestazione,
    IdAggiungiModificaElimina,
    TestModificaElimina,
    Obj,
    ConvertiDataInglese,
    BTNAzione,
    ClassRiga,
    ValidareCampi,
    AbilitaCampo,
    VerificaEliminazione,
    VerificaEsiste,
    AssegnaValoreCombo,
    IdComboNome,
    AggiungiRecord,
    ControllaCampoSoloInserimento,
    ///////////////////
    formatEuro,
    DatiCombo,
    OrdinamentoColonna,
    CheckFiltro,
    Filtro,
    BoolFiltro,
    ArrayIdEliminazione,
    CheckGruppoDaEliminare,
    EliminaGruppo,
  }
}
