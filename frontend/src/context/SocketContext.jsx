import { createContext, useEffect, useState,useContext } from "react";
import { useAuthContext } from "./AuthContex";
import { io } from "socket.io-client";

const SocketContext = createContext();

export const useSocketContext = () =>{   
    return useContext(SocketContext);
}


export const SocketContextProvider = ({ children }) => {
    const [socket, setSocket] = useState(null);
    const [onlineUsers, setOnlineUsers] = useState([]);
    const { authUser } = useAuthContext();

    useEffect(() => {
        if (authUser) {
            const socket = io("http://localhost:8000",{
                query:{
                    userId:authUser._id
                }
            })
            
            // console.log(socket)
            setSocket(socket);
            
            socket.on("getOnlineUsers",(users)=>{
                setOnlineUsers(users);
            })

            return () => socket.close()
        } else {
          console.log(socket)
            if (socket) {
                socket.close();
                setSocket(null);
            }
        }
    }, [authUser])

    return <SocketContext.Provider value={{socket,onlineUsers}}>
        {children}
    </SocketContext.Provider>
}