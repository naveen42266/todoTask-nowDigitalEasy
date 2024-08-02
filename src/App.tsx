import './App.css'
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Home from './pages/home';
import User from './pages/user';
import Group from './pages/group';
import { useState } from 'react';
import { TodoContext } from './useContext';
const data =
  [
    {
      "userId": "user1",
      "userName": "gopinath",
      "groups": [
        {
          "groupId": "group1",
          "groupName": "work",
          "isComplete": false,
          "tasks": [
            {
              "taskId": "task1",
              "taskName": "finish report",
              "isComplete": false
            },
            {
              "taskId": "task2",
              "taskName": "email team",
              "isComplete": false
            }
          ]
        },
        {
          "groupId": "group2",
          "groupName": "personal",
          "isComplete": false,
          "tasks": [
            {
              "taskId": "task1",
              "taskName": "buy groceries",
              "isComplete": false
            },
            {
              "taskId": "task2",
              "taskName": "call mom",
              "isComplete": false
            }
          ]
        }
      ]
    },
    {
      "userId": "user2",
      "userName": "kirubhakaran",
      "groups": [
        {
          "groupId": "group1",
          "groupName": "work",
          "isComplete": false,
          "tasks": [
            {
              "taskId": "task1",
              "taskName": "finish report",
              "isComplete": false
            },
            {
              "taskId": "task2",
              "taskName": "email team",
              "isComplete": false
            }
          ]
        },
        {
          "groupId": "group2",
          "groupName": "personal",
          "isComplete": false,
          "tasks": [
            {
              "taskId": "task1",
              "taskName": "buy groceries",
              "isComplete": false
            },
            {
              "taskId": "task2",
              "taskName": "call mom",
              "isComplete": false
            }
          ]
        }
      ]
    }
  ];
function App() {
  const [todo, setTodo] = useState(data)
  return (
    <TodoContext.Provider value={{ todo, setTodo }}>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path='/user/:userid' element={<User />} />
          <Route path='/user/:userid/:groupid' element={<Group />} />
        </Routes>
      </BrowserRouter>
    </TodoContext.Provider>
  )
}

export default App
