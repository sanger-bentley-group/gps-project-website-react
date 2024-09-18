import Serotypes from "./Serotypes"
import VaccineHistory from "./VaccineHistory"

const SeroBAnk = () => (
  <div className="h-full">
    <section id="serotypes"><Serotypes /></section>
    <section id="vaccine-history"><VaccineHistory /></section>
  </div>
)

export default SeroBAnk