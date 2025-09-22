import { connection } from "./connection"

const subjects = [
  { name: 'English', templates: ['Restaurant', 'Fair'] },
  { name: 'History' },
  { name: 'Geography' },
  { name: 'Mathematics' },
  { name: 'Science' },
  { name: 'Art' },
  { name: 'Physical Education' },
  { name: 'Music' }
]

async function main() {
  for (const { name, templates = [] } of subjects) {
    const existing = await connection.subject.findFirst({
      where: { name },
      include: { templates: true }
    })

    if (!existing) {
      await connection.subject.create({
        data: {
          name,
          templates: { create: templates.map(name => ({ name })) }
        }
      })
    } else if (templates.length > 0) {
      const existingTemplateNames = existing.templates.map(t => t.name)
      const newTemplates = templates
        .filter(name => !existingTemplateNames.includes(name))
        .map(name => ({ name }))

      if (newTemplates.length > 0) {
        await connection.subject.update({
          where: { id: existing.id },
          data: { templates: { create: newTemplates } }
        })
      }
    }
  }

  console.log('Seed finished')
}

main()
  .then(() => connection.$disconnect())
  .catch(async e => {
    console.error(e)
    await connection.$disconnect()
    process.exit(1)
  })