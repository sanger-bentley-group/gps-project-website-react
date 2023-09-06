import BioinformaticsTraining from "./BioinformaticsTraining"
import CommandLine from "./CommandLine"
import GPSTools from "./GPSTools"

const Training = () => (
  <div className="h-full">
    <section id="gps-tools"><GPSTools /></section>
    <section id="bioinformatics-training"><BioinformaticsTraining /></section>
    <section id="command-line"><CommandLine /></section>
  </div>
)

export default Training