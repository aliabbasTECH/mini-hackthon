// import { useSelector, useDispatch } from 'react-redux'
// import { useParams } from 'react-router-dom';
// import { getUser, getAllUsers, sendMessage } from '../store/action'
// import { useEffect, useState } from 'react';
import './style.css';

function Home() {
    // const { id } = useParams()
    // const user = useSelector(state => state.user)
    // const allUsers = useSelector(state => state.allUsers)
    // const dispatch = useDispatch()
    // const [currentChat, setCurrentChat] = useState({})
    // const [message, setMessage] = useState("")

    // useEffect(() => {
    //     dispatch(getUser(id))
    //     dispatch(getAllUsers())
    // }, [])

    // const send_message = () => {
    //     dispatch(sendMessage(message, user, currentChat))
    // }

    return (
        <div>
            {/* <h1>Home</h1>
            <h2>{user.username}</h2>
            <h2>{user.email}</h2>
            <hr />
            <div className="d-flex">
                <div className="card users_card">
                    <h3>All Users</h3>
                    <ul>
                        {allUsers.map((v, i) => {
                            return v.email !== user.email && <li key={i}>
                                <div>
                                    <h4> {v.username}</h4>
                                    <span>{v.email}</span>
                                    <button onClick={() => setCurrentChat(v)}>Chat</button>
                                </div>
                            </li>
                        })}
                    </ul>
                </div>
                {Object.keys(currentChat).length ? <div className="card chat_card">
                    <h3>Chat ({currentChat.username})</h3>
                    <div className="messages">

                    </div>
                    <div>
                        <input value={message} onChange={(e) => setMessage(e.target.value)} type="text" placeholder="Enter message" />
                        <button onClick={send_message}>Send</button>
                    </div>
                </div> : null}
            </div> */}
        </div>
    )
}

export default Home;