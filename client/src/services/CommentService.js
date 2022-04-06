import Client from './'

export const AddComment = async () => {
  try {
    const res = await Client.post()
    return res.data
  } catch (error) {
    throw error
  }
}
