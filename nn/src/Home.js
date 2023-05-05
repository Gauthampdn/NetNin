import {useState} from 'react';

const Home = () => {
    //making the initial val = mario
    const[name, setName] = useState('mario');
    const[age, setAge] = useState(25)
    
    const handleClick = () => {
        setName('luigi');
    }


    return (
        <div className="home">
            <h2>Homepage</h2>
            <p>{name} is {age} years old</p>
            <button onClick={handleClick}>click me</button>
        </div>
    );
}
 
export default Home;