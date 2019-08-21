import { random } from './utils'
import whisper from '../../whisper.json'

export const generateWhisper = () => {
  const rumour = random(whisper.subject) + " "
    + random(whisper.action) + " " 
    + random(whisper.target) + ". " 
    + random(whisper.believe) + " "
    + random(whisper.source)
  return rumour
}


