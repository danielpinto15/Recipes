import { useParams } from 'react-router-dom';
import { useFetch } from '../../hooks/useFetch'

// styles
import './Recipe.css'

export default function Recipe() {
    const { id } = useParams();
    const { data: recipe, isPending, error } = useFetch(`http://localhost:3000/recipes/${id}`);
    
    return (
        <div className='recipe'>
            {error && <p className='error'>{error}</p>}
            {isPending && <p className='loaging'>Loading...</p>}          
            {recipe && (
                <>
                <h2 className='page-title'> {recipe.title}</h2>
                <p>Takes {recipe.cookingTime} to cool</p>
                <ul>
                    {recipe.ingredients.map(ing => <li key={ing}>{ing}</li>)}
                </ul>
                <p>{recipe.method}</p>
                </>
            )}
        </div>
    )
}