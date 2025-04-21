import csvParser from 'csv-parser'
import { createReadStream, promises } from 'fs'
import { CsvReader } from '../../app/contracts/CsvReader'

export class CsvParserAdapter implements CsvReader {
  async readFromFile (path: string): Promise<any> {
    const content: any[] = await new Promise((resolve, reject) => {
      const csvData: any = []
      const stream = createReadStream(path)
      const parseFile = csvParser()
      stream.pipe(parseFile)

      parseFile
        .on('data', (row: string[]) => {
          csvData.push(row)
        })
        .on('end', () => {
          promises.unlink(path).then(() => {
            resolve(csvData)
          }).catch(err => {
            reject(err)
          })
        })
    })
    return content
  }
}
