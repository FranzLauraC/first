import getRandomFromArr from "../services/getRandomFromArr"
import phrases from '../utils/phrases.json'
import BgArr from '../utils/bgArr.json'
const ButtonPhrase = ({setPhraseRandom , setBgApp}) => {
 
const handleChangePhrase = () => {
  const quote = getRandomFromArr(phrases)
  setPhraseRandom(quote)
  setBgApp(getRandomFromArr(BgArr))
}
  return (
    <button className="app__btn" onClick={handleChangePhrase}>Ver otro</button>
  )
}

export default ButtonPhrase