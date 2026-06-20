import { addresses } from '../siteData'

function Addresses() {
  return (
    <div className="addresses">
      <div className="address-block">
        <h3>{addresses.office.label}</h3>
        {addresses.office.lines.map((line) => (
          <p key={line}>{line}</p>
        ))}
      </div>
      <div className="address-block">
        <h3>{addresses.registered.label}</h3>
        {addresses.registered.lines.map((line) => (
          <p key={line}>{line}</p>
        ))}
      </div>
    </div>
  )
}

export default Addresses
