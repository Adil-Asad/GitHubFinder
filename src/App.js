import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './components/layout/NavBar';
import Footer from './components/layout/Footer';
import Home from './components/layout/pages/Home';
import About from './components/layout/pages/About';
import NotFound from './components/layout/pages/NotFound';
import { GithubProvider } from './context/github/GithubCuntex';
function App() {
  return (
    //we wrape everything in github provider
    <GithubProvider>
      <Router className='bg-slate-500'>
        <div className='flex flex-col justify-between h-screen'>
          <NavBar />
          <main className='container mx-auto px-3 pb-12'>
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/about' element={<About />} />
              <Route path='/notfound' element={<NotFound />} />
              <Route path='/*' element={<NotFound />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </GithubProvider>
  );
}

export default App;
