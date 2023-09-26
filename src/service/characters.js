import { baseRequest } from "./baseRequest.js";

export const getCharacters = async () => {
  const response = await fetch("https://rickandmortyapi.com/api/character")
  .then(response => response.json())
  .then(response => response.results)
  return response
}

export const getCharacters2 = async (page) => {
  const response = await baseRequest(`/character/?page=${page}`)
  .then(response => response.data.results)
  return response
}

export const getCharacterInfo = async (id) => {
  const response = await fetch(`https://rickandmortyapi.com/api/character/${id}`)
  .then(response => response.json())
  return response
}