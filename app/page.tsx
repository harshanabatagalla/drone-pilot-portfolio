import Hero from './components/Hero'
import Section from './components/Section'
import { aboutMe } from './data/data'
import ExperienceCard from './components/ExperienceCard'
import EquipmentsCarousel from './components/EquipmentsCarousel'

export default function Home() {
  return (
    <main className="">
      <Hero />
      <Section
        title='Why choose me ?'
        description={aboutMe.background}
        className="bg-base-200"
      >
        <div className="lg:flex gap-2 items-stretch">
          {aboutMe.card.map((card) => (
            <ExperienceCard
              key={card.sort}
              title={card.title}
              description={card.description}
              svg={card.svg}
              sort={card.sort}
            />
          ))}
        </div>
      </Section>
      <Section
        title="Equipments"
        description="I use the latest drone technology, including the Dji Air 3, to ensure high-quality footage, precision, and safety in every flight."
      >
        <EquipmentsCarousel />
      </Section>
    </main>
  )
}

// #B2CCD6