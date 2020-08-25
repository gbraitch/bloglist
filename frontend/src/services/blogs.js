import axios from 'axios'
import storage from '../utils/storage'

const baseUrl = '/api/blogs'

const getConfig = () => {
  return {
    headers: { Authorization: `bearer ${storage.loadUser().token}` }
  }
}

const getAll = () => {
  const request = axios.get(baseUrl)
  return request.then(response => response.data)
}

const create = async blog => {
  const response = await axios.post(baseUrl, blog, getConfig())
  // Need to do another get request, as response from post does not contain user object,
  // only its id. Thus, remove button will be disabled until refresh unless we get obj from db
  const request = await axios.get(`${baseUrl}/${response.data.id}`)
  return request.data
}

const update = (blog) => {
  const request = axios.put(`${baseUrl}/${blog.id}`, blog, getConfig())
  return request.then(response => response.data)
}

const remove = async id => {
  const response = await axios.delete(`${baseUrl}/${id}`, getConfig())
  return response.data
}


export default { getAll, create, update, remove }