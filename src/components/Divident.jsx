import { getValue } from '../helpers/getValues'

export default function Dividend({ inpData, setInpData }) {
  return (
    <div>
      <label htmlFor="dividend">Please write dividend:</label>
      <input
        type="number"
        min="1"
        id="dividend"
        placeholder="Min value 1"
        onChange={(e) => getValue(e, inpData, setInpData)}
        value={inpData.dividend}
      />
    </div>
  )
}
