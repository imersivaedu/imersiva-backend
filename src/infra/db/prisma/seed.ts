import { connection } from "./connection";

const templateDisplayData = [
  {
    name: "Feirinha",
    description:
      "Experiência multiplayer de interação onde alunos precisam preparar corretamente as ordens de personagens com diferentes sotaques enquanto trabalham em equipe.",
    ImageUrl:
      "https://drive.google.com/uc?export=view&id=1SVYgBIWfve1KqKVITHKvJGstcvILlm86",
  },
  {
    name: "Restaurante",
    description:
      "Simulação de atendimento em restaurante, praticando comunicação e entendimento com agentes controlados por IA.",
    ImageUrl:
      "https://drive.google.com/uc?export=view&id=1oWxM4ZZpUeKJmYWTB4jkzOgk-N7bxjX8",
  },
];

const subjects = [
  { name: "English", templates: ["Restaurante", "Feirinha"] },
  { name: "History" },
  { name: "Geography" },
  { name: "Mathematics" },
  { name: "Science" },
  { name: "Art" },
  { name: "Physical Education" },
  { name: "Music" },
];

async function main() {
  for (const { name, templates = [] } of subjects) {
    const existing = await connection.subject.findFirst({
      where: { name },
      include: { templates: true },
    });

    if (!existing) {
      await connection.subject.create({
        data: {
          name,
          templates: {
            create: templates.map((templateName) => {
              const info = templateDisplayData.find(
                (t) => t.name === templateName
              );
              return info
                ? {
                    name: info.name,
                    description: info.description,
                    ImageUrl: info.ImageUrl,
                  }
                : { name: templateName, description: "", ImageUrl: "" };
            }),
          },
        },
      });
    } else if (templates.length > 0) {
      const existingTemplateNames = existing.templates.map((t) => t.name);
      const newTemplates = templates
        .filter((templateName) => !existingTemplateNames.includes(templateName))
        .map((templateName) => {
          const info = templateDisplayData.find(
            (t) => t.name === templateName
          );
          return info
            ? {
                name: info.name,
                description: info.description,
                ImageUrl: info.ImageUrl,
              }
            : { name: templateName, description: "", ImageUrl: "" };
        });

      if (newTemplates.length > 0) {
        await connection.subject.update({
          where: { id: existing.id },
          data: { templates: { create: newTemplates } },
        });
      }
    }
  }

  console.log("✅ Seed finished");
}

main()
  .then(() => connection.$disconnect())
  .catch(async (e) => {
    console.error(e);
    await connection.$disconnect();
    process.exit(1);
  });
