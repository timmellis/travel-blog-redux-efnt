import Client from './'

export const AddLike = async (like) => {
  try {
    const res = await Client.put('/locations/:id', like)
    return res.data
  } catch (error) {
    throw error
  }
}
