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
    const res = await Client.get()
  } catch (error) {
    throw error
  }
}
export const GetLocationComments = async (commentId) => {
  try {
    const res = await Client.get()
    return res.data.Comments
  } catch (error) {
    throw error
  }
}
