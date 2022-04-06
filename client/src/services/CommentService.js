import Client from './'

export const AddComment = async (newComment) => {
  console.log(newComment)
  try {
    const res = await Client.post('/createComment', newComment)
    return res.data
  } catch (error) {
    throw error
  }
}

export const GetComments = async () => {
  try {
    const res = await Client.get('/comments')
    return res.data
  } catch (error) {
    throw error
  }
}
