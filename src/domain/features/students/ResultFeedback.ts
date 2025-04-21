export interface ResultsFeedback {
  execute: (params: {resultId: string, agree: boolean, newLevelResult?: string}) => Promise<void>
}
