import getResult from '../helpers/getResult'

export default function Result({ inpData }) {
  let res = getResult(inpData)
  return (
    <div className="result">
      <label htmlFor="result">Result:</label>
      <output id="result">{res > 0 && res !== 'Infinity' ? res : ''}</output>
    </div>
  )
}
