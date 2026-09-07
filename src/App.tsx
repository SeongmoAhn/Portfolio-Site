import Header from './components/common/Header/Header.tsx'
import Footer from './components/common/Footer/Footer.tsx'
import TopButton from './components/common/TopButton/TopButton.tsx'
import ContactButton from './components/common/ContactButton/ContactButton.tsx'
import Home from './pages/Home/Home.tsx'
import Archive from './pages/Archive/Archive.tsx'
import {Routes, Route} from "react-router-dom"
import styles from './App.module.css'

function App() {
  return (
    <div>
      <Header/>

      <main className={styles.main}>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/archive" element={<Archive/>}/>
        </Routes>
      </main>

      <Footer/>
      <TopButton/>
      <ContactButton/>
    </div>
  )
}

export default App
