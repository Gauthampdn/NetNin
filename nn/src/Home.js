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
            .then( res => {
                return res.json();
            })
            .then(data => {
                console.log(data)
            })
    }, []);

    return (
        <div className="home">
            {/* <People peoples = {peeps} hd = {handleDelete}/> */}
        </div>
    );
}
 
export default Home;