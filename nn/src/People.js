const People = (props) => {

    const peeps = props.peoples

    return (
        <div className="People-list">
            <h1>People</h1>
            {peeps.map((person) => (
                <div className="p-prev" key={person.id}>
                    <h2>{person.name}</h2>
                    <h3>My major is {person.Major} and I am {person.Age} years old!</h3>
                </div>

            ))}

        </div>

    );
}
 
export default People;