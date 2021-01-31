// import React from "react"
// import User from "./components/User/User"

// class App extends React.Component{
//     state = {
//         user:{} as User
//     }

//     componentDidMount(){
//         // fetch the data 
//         // pass them to Child comp
//         this.fetchData()
//     }

//     fetchData =  () => {
//             fetch("https://api.github.com/users/YasirHasn9")
//             .then(res => res.json())
//             .then(data => {
//                 console.log("THis is from fetch",data)
//                 this.setState({user:data})
//             })
//             .catch(err => console.log(err))
//     }
//     render(){
//         console.log("this is from Render" , this.state.user)
//     return(
//         <div>
//             <User user={this.state.user}  />
//         </div>)
//     }
// }

// export default App 
import {useState , useEffect} from "react"
import User from "./components/User/User"
export type UserInfo = {
    login:string,
    name:string,
    bio:string,
    followers:number,
    following:number,
    followers_url:string,
    following_url:string,
    twitter_username:string,
}
const App = () => {
    const [userX , setUserInfo] = useState({})


    const fetchData = async ():Promise<UserInfo> => {
        return await (await fetch("https://api.github.com/users/YasirHasn9")).json()
    }
    useEffect(() => {
        fetchData()
        .then(res =>  setUserInfo(res))
    } , [])

    return (
        <div>
            <h1>Hello</h1>
            <User user={userX} />
        </div>
    )
}

export default App