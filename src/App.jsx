import React, { useState, useEffect } from 'react'
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import Profile from './components/Sections/Profile';
import Overview from './components/Sections/Overview';
import Repostories from './components/Sections/Repostories';
import Projects from './components/Sections/Projects';
import Packages from './components/Sections/Packages';
import Followers from './components/Sections/Followers';
import Following from './components/Sections/Following';
import axios from 'axios';
import Login from './components/Login/Login';
import Footer from './components/Footer/Footer';

const name = "mukhriddin-dev";
function App() {
  const [data, setData] = useState([]);
  const URL = `https://api.github.com/users/${name}`;
  const { pathname } = useLocation();
  const [auth, setAuth] = useState(false);




  const getData = async () => {
    const response = await axios.get(`${URL}`);
    setData(response.data)
  }

  useEffect(() => {
    getData()
  }, [])

  const navigate = useNavigate()
  const user = {
    username: "akhror02",
    password: "19940101"
  }

  const useAuth = (params) => {
    if ((user.username === params.username && user.password === params.password)) {
      setAuth(true)
      console.log(auth);
    } else {
      setAuth(false)
      console.log(auth);
    }
    return auth ?

      navigate('/') : navigate('/login')

  }



  return (
    <div>
      {(pathname === "/login") ? "" : <Header img={data} auth={auth} setAuth={setAuth} useAuth={useAuth} />}
      {(pathname === "/login") ? "" : <Hero repost={data} />}
      <body className='d-flex container'>
        {(pathname === "/login") ? "" : <Profile data={data} />}
        <Routes>
          <Route path="/" element={<Packages />} />
          <Route path="/overview" element={<Overview />} />
          <Route path="/repostories" element={<Repostories />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/packages" element={<Packages />} />
          <Route path="/followers" element={<Followers />} />
          <Route path="/following" element={<Following />} />
        </Routes>
      </body>
      <Routes><Route path="/login" element={<Login isLogin={auth} login={useAuth} />} /></Routes>
      {(pathname === "/login") ? "" : <Footer />}
    </div>
  )
}

export default App
