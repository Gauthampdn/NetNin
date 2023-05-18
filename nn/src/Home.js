import {useEffect, useState} from 'react';
import People from './People';


 
const Home = () => {
    //making the initial val = mario
    const[peeps, setPeeps] = useState(null);
    const[loading, setloading] = useState(true);



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
                setTimeout(() => {
                    setPeeps(data)
                    setloading(false)


                }, 500)
            })
    }, []);

    return (
        <div className="home">
            {loading && <div> loading... </div>}
            {peeps && <People peoples = {peeps} hd = {handleDelete}/>}
        </div>
    );
}
 
export default Home;