import Client from './'

export const GetLocations = async () => {
  try {
    const res = await Client.get('/locations')

    return res.data
  } catch (error) {
    throw error
  }
}
export const GetLocationDetails = async (locationId) => {
  try {
    const res = await Client.get(`/locations/${locationId}`)
    return res.data
  } catch (error) {
    throw error
  }
}
export const GetAllComments = async () => {
  try {
    const res = await Client.get('/comments')
    return res.data
  } catch (error) {
    throw error
  }
}
