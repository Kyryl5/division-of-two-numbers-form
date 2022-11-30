export default function getResult(inpData) {
  const { dividend, divider } = inpData
  const result = Number(dividend) / Number(divider)

  localStorage.setItem(
    'LoggerService inputs value:',
    JSON.stringify({ ...inpData, resultValue: result })
  )

  return Number.isInteger(result) ? result : result.toFixed(2)
}
