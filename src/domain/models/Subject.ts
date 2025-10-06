import { randomUUID } from "crypto";

export interface SubjectParams {
  id?: string;
  name: string;
}

export class Subject {
  private readonly id: string;
  private readonly name: string;

  constructor(props: SubjectParams) {
    let id = props.id;
    if (!id) id = randomUUID();

    this.id = id;
    this.name = props.name;
  }

  getId(): string {
    return this.id;
  }

  getName(): string {
    return this.name;
  }
}
