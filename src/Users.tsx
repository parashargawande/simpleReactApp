import { IUser } from './Interfaces'
import './Users.css'

interface UserProps {
    users?: IUser[] | null
}
const Users: React.FC<UserProps> = ({ users }) => {
    return <div className="user-container">
        <table>
            <tbody>
                <tr>
                    <th>email</th>
                    <th>Name</th>
                </tr>
                {
                    users?.map(user => (
                        <tr key={user.login.md5}>
                            <td>{user.email}</td>
                            <td>{user.name.title} {user.name.first} {user.name.last}</td>
                        </tr>
                    ))
                }
            </tbody>
        </table>
    </div>
}
export default Users;