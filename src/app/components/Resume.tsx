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
    <main className="grid w-[210mm] bg-white">
      <Profile className="" personalInfo={resume.profile} />
      <Contact className="" contact={resume.contact} />
      <Skills className="" skills={resume.skills} />
      <div className="">
        {resume.professional_experience.map((professionalExperience, index) => (
          <ProfessionalExperience
            className=""
            key={index}
            professionalExperience={professionalExperience}
          />
        ))}
      </div>
    </main>
  )
}

interface PersonalProps {
  personalInfo: ProfileInfo
  className: string
}
function Profile({ personalInfo, className }: PersonalProps) {
  return <h1 className={clsx(className)}>{personalInfo.name}</h1>
}

interface ContactProps {
  contact: ContactInfo
  className: string
}
function Contact({ contact, className }: ContactProps) {
  const contactItems = Object.values(contact)
  return (
    <div className={clsx(className)}>
      <h2>Contato</h2>
      <ul>
        {contactItems.map((contactItem, index) => (
          <li key={index}>{contactItem}</li>
        ))}
      </ul>
    </div>
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
    <div className={clsx(className)}>
      <h2>Habilidades</h2>
      {skillsList.map((item, index) => (
        <SkillSection className="" key={index} {...item} />
      ))}
    </div>
  )
}

interface SkillSectionProps {
  title: string
  items: string[]
  className: string
}
function SkillSection({ title, items, className }: SkillSectionProps) {
  return (
    <div className={clsx(className)}>
      <h3>{title}</h3>
      <ul>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
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
    <div className={clsx(className)}>
      <h3>
        {job.title} - {company.name}
      </h3>
      <span>
        {job.from} - {job.to}
      </span>
      <p>{job.description}</p>

      <div>
        <h4>Principais projetos</h4>
        <ul>
          {main_projects_and_achievements.map((project, index) => (
            <li key={index}>{project}</li>
          ))}
        </ul>
      </div>
    </div>
  )
}
