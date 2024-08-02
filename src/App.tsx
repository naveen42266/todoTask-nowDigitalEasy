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
      "userId": "1",
      "userName": "gopinath",
      "groups": [
        {
          "groupId": "1",
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
          "groupId": "2",
          "groupName": "personal",
          "isComplete": false,
          "tasks": [
            {
              "taskId": "task3",
              "taskName": "buy groceries",
              "isComplete": false
            },
            {
              "taskId": "task4",
              "taskName": "call mom",
              "isComplete": false
            }
          ]
        }
      ]
    },
    {
      "userId": "2",
      "userName": "kirubhakaran",
      "groups": [
        {
          "groupId": "1",
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
          "groupId": "2",
          "groupName": "personal",
          "isComplete": false,
          "tasks": [
            {
              "taskId": "task3",
              "taskName": "buy groceries",
              "isComplete": false
            },
            {
              "taskId": "task4",
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
