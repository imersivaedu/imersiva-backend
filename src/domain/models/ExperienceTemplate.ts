import { randomUUID } from "crypto";

export interface ExperienceTemplateParams {
  id?: string;
  name: string;
  subjectId: string;
}

export class ExperienceTemplate {
  private readonly id: string;
  private readonly name: string;
  private readonly subjectId: string;

  constructor(props: ExperienceTemplateParams) {
    let id = props.id;
    if (!id) id = randomUUID();

    this.id = id;
    this.name = props.name;
    this.subjectId = props.subjectId;
  }

  getId(): string {
    return this.id;
  }

  getName(): string {
    return this.name;
  }

  getSubjectId(): string {
    return this.subjectId;
  }
}
