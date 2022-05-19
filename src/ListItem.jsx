/*Adding link to list objects */
import { Link } from 'react-router-dom';
import './App.css';
import './recipelist.modules.css';

const ListItem = ({ id, title, cuisineType, image }) => {
    return (
        <div className="list-item">
            <img className="list-item-image" src={image} alt="" />
            <Link to={`/recipedetails/${id}`}>
                <h1 className="recipe-title1">{title}</h1>
            </Link>
            <p>{cuisineType}</p>

        </div>
    );
}

export default ListItem;
