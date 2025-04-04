import Image from "next/image";
import styles from "./page.module.css";
import HelloWorld from "./components/HelloWorld";
import Profile from "./components/Profile";
import Parent,{Child} from "./components/Parent";
import Card from "./components/Card";
import PropForward from "./components/PropForward";
import Dashboard from "./components/conditional-rendering/Dashboard";
import Greeting from "./components/conditional-rendering/Greeting";
import AdminDashboard from "./components/conditional-rendering/AdminDashboard";
import Items from "./components/list/Items";
import TodoList from "./components/list/TodoList";

export default function Home() {
    console.log('HelloWorld ',HelloWorld());
    let profile1 = {
        name :"User 1",
        imageUrl: "https://i.imgur.com/MK3eW3Am.jpg"
    };
    let profile2 ={
        name:"User 2",
        imageUrl:"https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/avatars/53/533b4dd6fb51a925e2e79625b9fa22fa6a1730be_full.jpg"

    }
    let items = ['apple','orange','banna'];
    let todos = [
        {
            "userId": 1,
            "id": 1,
            "title": "delectus aut autem",
            "completed": false
        },
        {
            "userId": 1,
            "id": 2,
            "title": "quis ut nam facilis et officia qui",
            "completed": false
        },
        {
            "userId": 1,
            "id": 3,
            "title": "fugiat veniam minus",
            "completed": false
        }];
  return (
    <div >
       {/* <HelloWorld/>
        <HelloWorld/>
        <HelloWorld/>*/}
       {/* <Profile/>
        <Profile/>*/}
       {/* <HelloWorld/>*/}
       {/* <Parent/>

        <Child/>*/}
        {/*<Card header={<h4>This is card header</h4>}>
            <h1> This is profile</h1>
            <Profile profile = {profile1}/>

        </Card>
        <Card header={<span>This is card header2</span>}>
            <h3>Another usecase</h3>
        </Card>*/}
       {/* <Profile profile = {profile1}/>
        <Profile profile={profile2}/>*/}
       {/* <PropForward style={{
            backgroundColor:'lightblue'
        }}
                     message ="Another property"
        ></PropForward>*/}
        {/*<Dashboard admin={false}/>
        <Greeting show={true}/>*/}
        {/*<AdminDashboard page={'nopage'}/>*/}
       {/* <Items items={items}/>*/}
        <TodoList todos={todos}/>
    </div>
  );
}
