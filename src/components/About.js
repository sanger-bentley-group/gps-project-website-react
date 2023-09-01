import Outline from "./Outline"
import Team from "./Team"
import Partners from "./Partners"

const About = () => (
  <div className="h-full">
    <section id="outline"><Outline /></section>
    <section id="team"><Team /></section>
    <section id='partners'><Partners /></section>
  </div>
)

export default About