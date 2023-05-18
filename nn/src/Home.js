import {useEffect, useState} from 'react';
import People from './People';


 
const Home = () => {
    //making the initial val = mario
    const[peeps, setPeeps] = useState(null);
    const[loading, setloading] = useState(true);
    const[error, setError] = useState(null);

    useEffect(() => {
        fetch("http://localhost:8000/peeps")
            .then( res => {
                if(!res.ok){
                    throw Error("couldn't fetch data from source")
                }
                return res.json();
            })
            .then(data => {
                setTimeout(() => {
                    setPeeps(data);
                    setloading(false);
                    setError(null)
                }, 500);
            })
            .catch(err => {
                console.log(err.message);
                setError(err.message)
                setloading(false)
            })
    }, []);

    return (
        <div className="home">
            {error && <div> {error} </div> }
            {loading && <div> loading... </div>}
            {peeps && <People peoples = {peeps} />}
        </div>
    );
}
 
export default Home;