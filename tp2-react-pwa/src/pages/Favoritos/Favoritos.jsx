import { useNavigate } from 'react-router-dom'
import ROUTES from '../../const/Routes'

function Favoritos() {
  const navigate = useNavigate()

  return (
    <div>
      <h1>🟡 Página: Favoritos</h1>
      <button onClick={() => navigate(ROUTES.home)}>Volver al Home</button>
    </div>
  )
}

export default Favoritos
