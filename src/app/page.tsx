import { S3 } from '@aws-sdk/client-s3'
import * as yaml from 'yaml'
import { Resume } from './components/Resume'
import { ResumeInfo } from './types'

export default async function Home() {
  const s3 = new S3({})
  const { Body } = await s3.getObject({
    Bucket: process.env.BUCKET,
    Key: process.env.OBJECT_KEY,
  })

  if (Body == null) {
    return <div>Failed to read resume file from S3</div>
  }

  const resumeYaml = await Body.transformToString()

  const resume: ResumeInfo = yaml.parse(resumeYaml)

  return <Resume resume={resume} />
}
