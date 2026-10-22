import { ref as firebaseRef, get, push, update, remove, child } from 'firebase/database'
import type { DataSnapshot } from 'firebase/database'
import { DbVetrina } from '../storesVetrina/Conn'
type Elemento = {
  Id?: string
  [key: string]: unknown
}
export function useCrud(tabella: string) {
  const TabellaRef = firebaseRef(DbVetrina, tabella)
  async function Elenco(): Promise<Elemento[]> {
    const collezione: Elemento[] = []
    try {
      const snapshot: DataSnapshot = await get(TabellaRef)
      snapshot.forEach((doc: DataSnapshot) => {
        const Id = doc.key ?? '0'
        collezione.push({
          Id,
          ...doc.val(),
        })
      })
    } catch (e) {
      console.log(e)
    }
    return collezione
  }
  async function Aggiungi(Elemento: Elemento): Promise<Elemento | null> {
    try {
      const nuovoElemento = { ...Elemento }
      delete nuovoElemento.Id
      const response = await push(TabellaRef, nuovoElemento)
      if (!response.key) {
        return null
      }
      return {
        Id: response.key,
        ...nuovoElemento,
      }
    } catch (e) {
      console.log(e)
      return null
    }
  }
  async function Aggiorna(Elemento: Elemento): Promise<Elemento | null> {
    const Id = Elemento.Id
    if (!Id) {
      return null
    }
    try {
      const elemento = { ...Elemento }
      delete elemento.Id
      await update(child(TabellaRef, Id), elemento)
      return {
        Id,
        ...elemento,
      }
    } catch (e) {
      console.log(e)
      return null
    }
  }
  async function Elimina(Id: string): Promise<boolean> {
    try {
      await remove(child(TabellaRef, Id))
      return true
    } catch (e) {
      console.log(e)
      return false
    }
  }
  return {
    Elenco,
    Aggiungi,
    Aggiorna,
    Elimina,
  }
}
