import clsx from 'clsx'
import {
  ContactInfo,
  ProfessionalExperienceInfo,
  ProfileInfo,
  ResumeInfo,
  SkillsInfo,
} from '../types'

export interface ResumeProps {
  resume: ResumeInfo
}

export function Resume({ resume }: ResumeProps) {
  return (
    <div className="flex w-[210mm] flex-row bg-white">
      <aside className="shrink-0 grow-0">
        <Contact className="" contact={resume.contact} />
        <Skills className="" skills={resume.skills} />
      </aside>
      <main className="grow">
        <Profile className="" profile={resume.profile} />
        <section className="">
          <h1>Experiência profissional</h1>
          {resume.professional_experience.map(
            (professionalExperience, index) => (
              <ProfessionalExperience
                className=""
                key={index}
                professionalExperience={professionalExperience}
              />
            ),
          )}
        </section>
      </main>
    </div>
  )
}

interface ProfileProps {
  profile: ProfileInfo
  className: string
}
function Profile({ profile, className }: ProfileProps) {
  return (
    <section className={clsx(className)}>
      <h1>Perfil</h1>
      <p>{profile.description}</p>
    </section>
  )
}

interface ContactProps {
  contact: ContactInfo
  className: string
}
function Contact({ contact, className }: ContactProps) {
  const contactItems = Object.values(contact)
  return (
    <section className={clsx(className)}>
      <h1>Contato</h1>
      <ul>
        {contactItems.map((contactItem, index) => (
          <li key={index}>{contactItem}</li>
        ))}
      </ul>
    </section>
  )
}

interface SkillsProps {
  skills: SkillsInfo
  className: string
}
function Skills({ skills, className }: SkillsProps) {
  const skillsList = [
    { title: 'Línguas extrangeira', items: skills.spoken_languages },
    { title: 'Linguagens de programação', items: skills.programming_languages },
    { title: 'Bancos de dados e armazenamento', items: skills.storage },
    { title: 'Frameworks', items: skills.frameworks },
    { title: 'Mensageria', items: skills.messaging },
    { title: 'CI/CD', items: skills.cicd },
    { title: 'Frameworks de teste', items: skills.tests },
    { title: 'Outros', items: skills.others },
  ]
  return (
    <section className={clsx(className)}>
      <h1>Habilidades</h1>
      {skillsList.map((item, index) => (
        <SkillSection className="" key={index} {...item} />
      ))}
    </section>
  )
}

interface SkillSectionProps {
  title: string
  items: string[]
  className: string
}
function SkillSection({ title, items, className }: SkillSectionProps) {
  return (
    <section className={clsx(className)}>
      <h2>{title}</h2>
      <ul>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </section>
  )
}

interface ProfessionalExperienceProps {
  professionalExperience: ProfessionalExperienceInfo
  className: string
}
function ProfessionalExperience({
  professionalExperience: { job, company, main_projects_and_achievements },
  className,
}: ProfessionalExperienceProps) {
  return (
    <section className={clsx(className)}>
      <h2>
        {job.title} - {company.name}
      </h2>
      <span>
        {job.from} - {job.to}
      </span>
      <p>{job.description}</p>

      <section>
        <h3>Principais projetos</h3>
        <ul>
          {main_projects_and_achievements.map((project, index) => (
            <li key={index}>{project}</li>
          ))}
        </ul>
      </section>
    </section>
  )
}
