export interface CsvReader {
  readFromFile: (path: string) => Promise<any>
}
