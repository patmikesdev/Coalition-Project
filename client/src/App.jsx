import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [users, setUsers] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')
  const [formData, setFormData] = useState({ name: '', email: '' })
  const [submitting, setSubmitting] = useState(false)
  
  const API_URL = import.meta.env.VITE_API_URL

  // Fetch users
  const fetchUsers = async () => {
    try {
      setLoading(true)
      const response = await fetch(`${API_URL}/api/users`)
      if (!response.ok) throw new Error('Failed to fetch users')
      const data = await response.json()
      setUsers(data)
      setError('')
    } catch (err) {
      setError('Error loading users: ' + err.message)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchUsers()
  }, [])

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault()
    setSubmitting(true)
    setError('')
    
    try {
      const response = await fetch(`${API_URL}/api/users`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      })
      
      const data = await response.json()
      
      if (!response.ok) {
        throw new Error(data.error || 'Failed to create user')
      }
      
      setFormData({ name: '', email: '' })
      fetchUsers() // Refresh the list
    } catch (err) {
      setError(err.message)
    } finally {
      setSubmitting(false)
    }
  }

  // Handle delete
  const handleDelete = async (id) => {
    if (!window.confirm('Are you sure you want to delete this user?')) return
    
    try {
      const response = await fetch(`${API_URL}/api/users/${id}`, {
        method: 'DELETE'
      })
      
      if (!response.ok) throw new Error('Failed to delete user')
      
      fetchUsers() // Refresh the list
    } catch (err) {
      setError('Error deleting user: ' + err.message)
    }
  }

  return (
    <div className="app">
      <h1>MongoDB User Management Demo</h1>
      
      {error && (
        <div style={{ color: 'red', padding: '10px', marginBottom: '20px' }}>
          {error}
        </div>
      )}

      <div className="form-section" style={{ marginBottom: '30px' }}>
        <h2>Add New User</h2>
        <form onSubmit={handleSubmit} style={{ display: 'flex', gap: '10px', marginBottom: '20px' }}>
          <input
            type="text"
            placeholder="Name"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            required
            style={{ padding: '8px', flex: 1 }}
          />
          <input
            type="email"
            placeholder="Email"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            required
            style={{ padding: '8px', flex: 1 }}
          />
          <button type="submit" disabled={submitting} style={{ padding: '8px 16px' }}>
            {submitting ? 'Adding...' : 'Add User'}
          </button>
        </form>
      </div>

      <div className="users-section">
        <h2>Users from MongoDB</h2>
        {loading ? (
          <p>Loading users...</p>
        ) : users.length === 0 ? (
          <p>No users yet. Add one above!</p>
        ) : (
          <div className="users-list">
            {users.map((user) => (
              <div key={user._id} style={{ 
                border: '1px solid #ccc', 
                padding: '15px', 
                marginBottom: '10px',
                borderRadius: '5px',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center'
              }}>
                <div>
                  <h3 style={{ margin: '0 0 5px 0' }}>{user.name}</h3>
                  <p style={{ margin: '0', color: '#666' }}>{user.email}</p>
                  <small style={{ color: '#999' }}>
                    Created: {new Date(user.createdAt).toLocaleDateString()}
                  </small>
                </div>
                <button 
                  onClick={() => handleDelete(user._id)}
                  style={{ 
                    background: '#dc3545', 
                    color: 'white', 
                    border: 'none',
                    padding: '5px 10px',
                    borderRadius: '3px',
                    cursor: 'pointer'
                  }}
                >
                  Delete
                </button>
              </div>
            ))}
          </div>
        )}
      </div>

      <div style={{ marginTop: '40px', padding: '20px', background: '#f0f0f0', color: 'black', borderRadius: '5px' }}>
        <h3>Connection Info</h3>
        <p><strong>Frontend:</strong> {window.location.origin} (Netlify)</p>
        <p><strong>Backend API:</strong> {API_URL} (Render)</p>
        <p><strong>Database:</strong> MongoDB Atlas (Free Tier)</p>
      </div>
    </div>
  )
}

export default App
