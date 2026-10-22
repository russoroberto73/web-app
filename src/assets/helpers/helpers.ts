import { computed } from "vue"
const MeseDaNumeroANome = computed(() => {
  return function (Numero: number | string) {
    let nome = ""
    switch (Numero) {
      case "01":
      case 1:
        nome = "gennaio"
        break
      case "02":
      case 2:
        nome = "febbraio"
        break
      case "03":
      case 3:
        nome = "marzo"
        break
      case "04":
      case 4:
        nome = "aprile"
        break
      case "05":
      case 5:
        nome = "maggio"
        break
      case "06":
      case 6:
        nome = "giugno"
        break
      case "07":
      case 7:
        nome = "luglio"
        break
      case "08":
      case 8:
        nome = "agosto"
        break
      case "09":
      case 9:
        nome = "settembre"
        break
      case "10":
      case 10:
        nome = "ottobre"
        break
      case "11":
      case 11:
        nome = "novembre"
        break
      case "12":
      case 12:
        nome = "dicembre"
        break
      default:
        nome = ""
    }
    return nome
  }
})

export { MeseDaNumeroANome }
