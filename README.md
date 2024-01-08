# Meu currículo

This is the code for my HTML resume. It was built using Next.js and styled with Tailwind.

## Instructions

To run it locally, create a `.env.local` file with the following variables:

```bash
# The resume data is read from a S3 bucket, so just configure with your appropriate setup
AWS_ACCESS_KEY_ID=XXXXXXXXXXXXXXXXXXXX
AWS_SECRET_ACCESS_KEY=yyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyy
AWS_REGION=sa-east-1
BUCKET=my-resume-bucket
OBJECT_KEY=resume.yaml
```

The format for `resume.yaml` can be inferred from `src/app/types.ts` file.
