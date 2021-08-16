import React from "react";

function UserData(props) {

    const { Users } = props

    if (!Users || Users.length === 0) return <p>Нет данных.</p>

    return (
        <div>
            <table>
                <thead>
                <tr>
                    <th>id</th>
                    <th>firstName</th>
                    <th>lastName</th>
                    <th>email</th>
                    <th>phone</th>
                </tr>
                </thead>
                <tbody>
                {
                    Users.map((person) =>
                        <tr key={person.content_name}>
                            <td>{person.content}</td>
                            <td>{person.tags}</td>
                            <td>{person.lastName}</td>
                            <td>{person.email}</td>
                            <td>{person.phone}</td>
                        </tr>
                    )
                }
                </tbody>
            </table>
        </div>
    )
}

export default UserData