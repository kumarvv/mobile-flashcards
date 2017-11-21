export function deleteKey(obj, key) {
  if (obj) {
    delete obj[key]
  }
  return obj
}

export function addCardToDeckCards(decks, title, card) {
  if (!decks) {
    return {}
  }

  let r = {
    ...decks,
    [title]: {
      ...decks[title],
      questions: decks[title].questions && Array.isArray(decks[title].questions)
        ? decks[title].questions.concat(card)
        : [card]
    }
  }

  console.log(JSON.stringify(r))
  return r
}
