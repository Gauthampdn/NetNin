import {useState} from 'react';
import People from './People';


 
const Home = () => {
    //making the initial val = mario
    const[peeps, setPeeps] = useState([
        {name: "Gautham", Age: 19, Major: "CS", id: 1},
        {name: "bob", Age: 19, Major: "bio", id: 2},
        {name: "sally", Age: 20, Major: "PS", id: 3}

    ]);

    const handleDelete = (id) => {
        const newPeeps = peeps.filter(individual => individual.id !== id)
        setPeeps(newPeeps)
    }

    return (
        <div className="home">
            <People peoples = {peeps} hd = {handleDelete}/>
        </div>
    );
}
 
export default Home;