import { randomUUID } from "crypto";

export interface ExperienceStudentTemplateParams {
    id?: string;
    experienceId: string;
    studentId: string;
    result: number | null;
}

export class ExperienceStudent {
    private readonly id: string;
    private readonly experienceId: string;
    private readonly studentId: string;
    private readonly result: number | null

    constructor(props: ExperienceStudentTemplateParams) {
        let id = props.id;
        if (!id) id = randomUUID();

        this.id = id;
        this.experienceId = props.experienceId;
        this.studentId = props.studentId;
        this.result = props.result;
    }

    getId(): string {
        return this.id;
    }

    getExperienceId(): string {
        return this.experienceId;
    }
    getStudentId(): string {
        return this.studentId;
    }

    getResult(): number | null {
        return this.result;
    }
}