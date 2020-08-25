import React, { useState, useEffect } from 'react'
import Blog from './components/Blog'
import Notification from './components/Notification'
import Toggleable from './components/Toggleable'
import BlogForm from './components/BlogForm'
import Dropdown from 'react-bootstrap/Dropdown'
import DropdownButton from 'react-bootstrap/DropdownButton'

import blogService from './services/blogs'
import loginService from './services/login'
import storage from './utils/storage'

const App = () => {
  const [blogs, setBlogs] = useState([])
  const [user, setUser] = useState(null)
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [notification, setNotification] = useState(null)
  const [dropDownValue, setdropDownValue] = useState('Sort By')
  const [sort, setSort] = useState(null)

  const blogFormRef = React.createRef()

  useEffect(() => {
    blogService.getAll().then(blogs =>
      setBlogs( blogs )
    )
  }, [])

  useEffect(() => {
    const user = storage.loadUser()
    setUser(user)

    const toggleSwitch = document.querySelector('.theme-switch input[type="checkbox"]')
    const currentTheme = localStorage.getItem('theme')

    if (currentTheme) {
      document.documentElement.setAttribute('data-theme', currentTheme)
      if (currentTheme === 'dark') {
        toggleSwitch.checked = true
      }
    }
  }, [])


  const notifyWith = (message, type='success') => {
    setNotification({
      message, type
    })
    setTimeout(() => {
      setNotification(null)
    }, 5000)
  }

  const handleLogin = async (event) => {
    event.preventDefault()
    try {
      const user = await loginService.login({
        username, password
      })

      setUsername('')
      setPassword('')
      setUser(user)
      notifyWith(`Welcome Back ${user.name}!`)
      storage.saveUser(user)
    } catch (exception) {
      notifyWith('Incorrect username or password', 'error')
      console.log('Wrong credentials')
    }
  }

  const handleLogout = () => {
    setUser(null)
    storage.logoutUser()
  }

  const handleNewBlog = async (blog) => {
    try {
      const returnedBlog = await blogService.create(blog)
      blogFormRef.current.toggleVisibility()
      setBlogs(blogs.concat(returnedBlog))
      notifyWith(`A new blog: ${returnedBlog.title} has been added`)
    } catch(exception) {
      console.log(exception)
    }
  }

  const handleLike = async (blog) => {
    const likedBlog = { ...blog, likes: blog.likes+1, user: blog.user.id  }
    await blogService.update(likedBlog)
    setBlogs(blogs.map(b => b.id === blog.id ? { ...blog, likes: blog.likes + 1 } : b))
  }

  const handleRemove = async (blog) => {
    const ok = window.confirm(`Remove blog ${blog.title} by ${blog.author}`)
    if (ok) {
      await blogService.remove(blog.id)
      setBlogs(blogs.filter(b => b.id !== blog.id))
    }
  }

  const updateSort = (e) => {
    setdropDownValue(e)
    setSort(e)
  }

  const sortByLikes = ((a, b) => b.likes - a.likes)

  const sortByTitle = ((a, b) =>  a.title.localeCompare(b.title))

  const sortByAuthor= ((a, b) => a.author.localeCompare(b.author))

  const displayBlogs = () => {
    let sortMethod

    if (sort === 'Likes') {
      sortMethod = (a,b) => sortByLikes(a,b)
    }
    else if (sort === 'Title') {
      sortMethod = (a,b) => sortByAuthor(a,b)
    }
    else if (sort === 'Author') {
      sortMethod = (a,b) => sortByTitle(a,b)
    }
    else {
      return (
        blogs.map((blog, index) =>
          <Blog
            num={index+1}
            key={blog.id}
            blog={blog}
            addLike={() => handleLike(blog)}
            removeBlog={() => handleRemove(blog)}
            user={user}
          />
        )
      )
    }

    return (
      blogs
        .sort(sortMethod)
        .map((blog, index) =>
          <Blog
            num={index+1}
            key={blog.id}
            blog={blog}
            addLike={() => handleLike(blog)}
            removeBlog={() => handleRemove(blog)}
            user={user}
          />
        )
    )
  }

  const darkMode = () => (
    <div className="theme-switch-wrapper float-right">
      <label className="theme-switch">
        <input type="checkbox" id="checkbox" onClick={(e) => switchTheme(e)} />
        <div className="slider round"></div>
      </label>
      <em></em>
    </div>
  )

  const switchTheme = (e) => {
    if (e.target.checked) {
      document.documentElement.setAttribute('data-theme', 'dark')
      localStorage.setItem('theme', 'dark')
    }
    else {
      document.documentElement.setAttribute('data-theme', 'light')
      localStorage.setItem('theme', 'light')
    }
  }

  if ( !user ) {
    return (
      <div className='container'>
        <Notification notification={notification}/>
        {darkMode()}
        <div className='text-center'>
          <h1 className='mt-5 mb-3'>Please sign in</h1>
          <form style={{ maxWidth : '480px', margin : 'auto' }} onSubmit={handleLogin}>
            <input
              type="text"
              className="form-control mb-2"
              placeholder='Username'
              value={username}
              name="Username"
              required autoFocus
              onChange={({ target }) => setUsername(target.value)}
            />
            <input
              type="password"
              className="form-control"
              placeholder='Password'
              value={password}
              name="Password"
              onChange={({ target }) => setPassword(target.value)}
            />
            <div className='mt-3'>
              <button className='btn btn-lg btn-block btn-primary' type="submit">Sign In</button>
            </div>

          </form>
        </div>
      </div>
    )
  }

  return (
    <div className='container'>
      <Notification notification={notification}/>
      {darkMode()}
      <div>
        <div className='mt-5'>
          <h1 className='text-center'>blogs</h1>
          <button className='btn btn-outline-danger float-right' onClick={() => handleLogout()}>logout</button>
        </div>
        <h2> Welcome {user.name} </h2>
        <div className='mt-5'>
          <Toggleable buttonLabel='Add New Blog' ref={blogFormRef}>
            <BlogForm handleNewBlog={handleNewBlog} notifyWith={notifyWith}/>
          </Toggleable>
        </div>
        <div className='mt-5'>
          <div>
            <h2>
              bloglist
              <DropdownButton title={dropDownValue} className="format float-right">
                <Dropdown.Item as="button"><div onClick={(e) => updateSort(e.target.textContent)}>Likes</div></Dropdown.Item>
                <Dropdown.Item as="button"><div onClick={(e) => updateSort(e.target.textContent)}>Title</div></Dropdown.Item>
                <Dropdown.Item as="button"><div onClick={(e) => updateSort(e.target.textContent)}>Author</div></Dropdown.Item>
              </DropdownButton>
            </h2>
          </div>
          <div className='mt-4'>
            {displayBlogs()}
          </div>
        </div>
      </div>
    </div>
  )
}

export default App