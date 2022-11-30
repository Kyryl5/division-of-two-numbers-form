import { getValue } from '../helpers/getValues'

export default function Divider({ inpData, setInpData }) {
  return (
    <div>
      <label htmlFor="divider">Please write divider:</label>
      <input
        type="number"
        min="1"
        id="divider"
        placeholder="Min value 1"
        onChange={(e) => getValue(e, inpData, setInpData)}
        value={inpData.divider}
      />
    </div>
  )
}
