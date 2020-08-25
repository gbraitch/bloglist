import React, { useState } from 'react'
import PropTypes from 'prop-types'

const BlogForm = ({ handleNewBlog, notifyWith }) => {
  const [blogTitle, setBlogTitle] = useState('')
  const [blogAuthor, setBlogAuthor] = useState('')
  const [blogURL, setBlogURL] = useState('')

  const createBlog = async (event) => {
    event.preventDefault()
    try {
      const newBlog = {
        title: blogTitle,
        author: blogAuthor,
        url: blogURL
      }

      handleNewBlog(newBlog)
      setBlogTitle('')
      setBlogAuthor('')
      setBlogURL('')
    } catch (exception) {
      notifyWith('Failed to add new blog', 'error')
      console.log('Failed to create blog')
    }
  }


  return (
    <div className='mx-3'>
      <h3>Add New Blog</h3>
      <form onSubmit={createBlog}>
        <div>
          Title:
          <input
            className='form-control'
            type="text"
            value={blogTitle}
            name="Title"
            onChange={({ target }) => setBlogTitle(target.value)}
          />
        </div>
        <div>
          Author:
          <input
            className='form-control'
            type="text"
            value={blogAuthor}
            name="Author"
            onChange={({ target }) => setBlogAuthor(target.value)}
          />
        </div>
        <div>
          URL:
          <input
            className='form-control'
            type="text"
            value={blogURL}
            name="URL"
            onChange={({ target }) => setBlogURL(target.value)}
          />
        </div>
        <button className='btn btn-primary' type="submit">add</button>
      </form>
    </div>
  )
}

BlogForm.propTypes = {
  handleNewBlog: PropTypes.func.isRequired,
  notifyWith: PropTypes.func.isRequired,
}


export default BlogForm