import Client from './'

export const AddLike = async (id, obj) => {
  try {
    const res = await Client.put(`/locations/like/${id}`, obj)
    return res.data
  } catch (error) {
    throw error
  }
}
