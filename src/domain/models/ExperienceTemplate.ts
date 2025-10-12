import { randomUUID } from "crypto";

export interface ExperienceTemplateParams {
  id?: string;
  name: string;
  subjectId: string;
  description: string;
  imageUrl: string;
}

export class ExperienceTemplate {
  private readonly id: string;
  private readonly name: string;
  private readonly subjectId: string;
  private readonly description: string;
  private readonly imageUrl: string;

  constructor(props: ExperienceTemplateParams) {
    let id = props.id;
    if (!id) id = randomUUID();

    this.id = id;
    this.name = props.name;
    this.subjectId = props.subjectId;
    this.description = props.description;
    this.imageUrl = props.imageUrl;
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

  getDescription(): string {
    return this.description;
  }

  getImageUrl(): string {
    return this.imageUrl;
  }
}
