export const parseAmount = amount => {
  const parsedAmount = Math.round(parseFloat(amount))
  return isNaN(parsedAmount) ? 0 : parsedAmount
}

export const firebaseDocData = doc => doc.data()

export const docToAmount = doc => parseAmount(doc.amount)

export const firstDoc = doc => !!doc

export const add = a => b => a + b
