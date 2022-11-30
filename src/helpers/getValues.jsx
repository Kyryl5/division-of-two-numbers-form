export function getValue(event, inpData, setInpData) {
  if (event.target.id === 'divider') {
    setInpData({
      ...inpData,
      divider: event.target.value,
    })
  } else if (event.target.id === 'dividend') {
    setInpData({
      ...inpData,
      dividend: event.target.value,
    })
  }
}
