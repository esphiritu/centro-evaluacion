async function getUsers(){
    const res = await fetch('https://jsonplaceholder.typicode.com/users')
    const data = await res.json()
    return data
  }

async function Users() {
    const users = await getUsers(); // An async function is called
    return(
        <>
        <h2 className="py-4 text-lg">Profesionales que obtuvieron su certificación</h2>
        <ol>
            {users.map((user) => (
                <li key={user.id}>{user.id}. {user.name}</li>
            ))}
        </ol>
        </>
    );
}
export default Users