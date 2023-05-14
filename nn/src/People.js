const People = (props) => {

    const peeps = props.peoples
    const handleDelete = props.hd

    return (
        <div className="People-list">
            <h1>People</h1>
            {peeps.map((person) => (
                <div className="p-prev" key={person.id}>
                    <h2>{person.name}</h2>
                    <h3>My major is {person.Major} and I am {person.Age} years old!</h3>
                    <button className="delBut" onClick={() => handleDelete(person.id)}> Delete </button>
                </div>

            ))}

        </div>

    );
}
 
export default People;