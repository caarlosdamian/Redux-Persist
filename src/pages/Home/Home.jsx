import './home.css'
import Button from '../../components/common/Button/Button'

const Home = () => {
    const handleLogout = () =>{
        console.log('logout')
    }
    return (
        <div className='home'>
           <div className="home-content">
               <h1>Welcome Home</h1>
               <Button
               type='button'
               label='logout'
               handleClick={handleLogout}
               
               />
           </div>
        </div>
    )
}

export default Home
