import Header from './components/common/Header/Header.tsx'
import Footer from './components/common/Footer/Footer.tsx'
import TopButton from './components/common/TopButton/TopButton.tsx'
import ContactButton from './components/common/ContactButton/ContactButton.tsx'
import ScrollToTop from './components/common/ScrollToTop/ScrollToTop.tsx'
import Home from './pages/Home/Home.tsx'
import ArchiveList from './pages/Archive/ArchiveList.tsx'
import ArchiveDetail from './pages/Archive/ArchiveDetail.tsx'
import ArchiveWrite from './pages/Archive/ArchiveWrite.tsx'
import {Routes, Route} from "react-router-dom"
import styles from './App.module.css'

function App() {
  return (
    <div>
      <ScrollToTop/>
      <Header/>

      <main className={styles.main}>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/archive" element={<ArchiveList/>}/>
          <Route path="/archive/new" element={<ArchiveWrite/>}/>
          <Route path="/archive/:id" element={<ArchiveDetail/>}/>
        </Routes>
      </main>

      <Footer/>
      <TopButton/>
      <ContactButton/>
    </div>
  )
}

export default App
