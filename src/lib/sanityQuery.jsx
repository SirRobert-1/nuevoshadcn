import sanityClient from './sanity'

export async function getSanityData(query) {
  return await sanityClient.fetch(query)
}
