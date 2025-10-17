import React from 'react'
import { useNavigate } from 'react-router-dom'


function Home() {
  const navigate = useNavigate()

  const handlelogout=()=> {
    localStorage.removeItem('currentUser')
    navigate('/login')

  }

  return (
    <div className='max-w-full max-h-full'>
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Architecto delectus incidunt totam aperiam magnam? Eos ab consequatur quasi dignissimos aut repellat vel rem qui animi ipsa iste laudantium culpa, hic doloribus recusandae molestiae ad eaque officiis quod? Asperiores deleniti animi eaque nesciunt ullam natus numquam nam voluptates libero assumenda obcaecati, saepe facilis eos sunt consequuntur qui eius labore architecto esse dolorem! Dolorum et veritatis eligendi, esse explicabo tempora libero ipsa a enim unde recusandae consequatur perferendis ducimus saepe culpa pariatur animi sint molestias tenetur. Autem officia at consequuntur vel veniam itaque architecto eius possimus ipsum est earum dolores, nesciunt repellendus.
        
    <button onClick={handlelogout}
        className='block bg-red-500 px-2 py-1 rounded text-white mt-20 w-1/3 hover:bg-red-600'>logout shopping cart</button>

       
    </div>
  )
}

export default Home