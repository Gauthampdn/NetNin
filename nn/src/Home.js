import {useState} from 'react';

const Home = () => {
    //making the initial val = mario
    const[peeps, setPeeps] = useState([
        {name: "Gautham", Age: 19, Major: "CS", id: 1},
        {name: "Varsha", Age: 19, Major: "bio", id: 2},
        {name: "Abi", Age: 20, Major: "PS", id: 3}

    ]);

    return (
        <div className="home">
            {peeps.map((person) => (
                <div className="p-prev" key={person.id}>
                    <h2>{person.name}</h2>
                    <h3>My major is {person.Major} and I am {person.Age} years old!</h3>
                </div>

            ))}
        </div>
    );
}
 
export default Home;