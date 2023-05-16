import {useEffect, useState} from 'react';
import People from './People';


 
const Home = () => {
    //making the initial val = mario
    const[peeps, setPeeps] = useState(null);



    const handleDelete = (id) => {
        const newPeeps = peeps.filter(individual => individual.id !== id)
        setPeeps(newPeeps)
    }

    useEffect(() => {
        fetch("http://localhost:8000/peeps")
    }, []);

    return (
        <div className="home">
            <People peoples = {peeps} hd = {handleDelete}/>
        </div>
    );
}
 
export default Home;