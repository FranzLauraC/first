import React from 'react'

const Phrase = ({phraseRandom}) => {
  return (
    <article>
      <p>{phraseRandom.phrase}</p>
    </article>
  )
}

export default Phrase