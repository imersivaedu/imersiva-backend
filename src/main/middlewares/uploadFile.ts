import multer from 'multer'
import { resolve } from 'path'

const uploader = multer({
  dest: resolve(__dirname, '..', '..', '..', 'tmp')
})

export {
  uploader
}
