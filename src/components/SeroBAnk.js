import Serotypes from "./Serotypes"
import VaccineInformation from "./VaccineInformation"
import VaccineHistory from "./VaccineHistory"

const SeroBAnk = () => (
  <div className="h-full">
    <section id="serotypes"><Serotypes /></section>
    <section id="vaccine-information"><VaccineInformation /></section>
    <section id="vaccine-history"><VaccineHistory /></section>
  </div>
)

export default SeroBAnk