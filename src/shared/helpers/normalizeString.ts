export function normalizeString (params: string): string {
  return params
    .replace(/ /g, '')
    .replace(/á|à|ã|â|ä/g, 'a')
    .replace(/é|è|ê|ë/g, 'e')
    .replace(/í|ì|î|ï/g, 'i')
    .replace(/ó|ò|õ|ô|ö/g, 'o')
    .replace(/ú|ù|û|ü/g, 'u')
    .replace(/ç/g, 'c')
    .replace(/Á|À|Ã|Â|Ä/g, 'A')
    .replace(/É|È|Ê|Ë/g, 'E')
    .replace(/Í|Ì|Î|Ï/g, 'I')
    .replace(/Ó|Ò|Õ|Ô|Ö/g, 'O')
    .replace(/Ú|Ù|Û|Ü/g, 'U')
    .replace(/Ç/g, 'C')
}
