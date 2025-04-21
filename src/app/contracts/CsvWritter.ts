export interface CsvWriter {
  writeToFile: (path: string) => Promise<any>
}
