
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
import TodoList from "./components/TodoList";
import UITree from "./components/UITree";
import CounterWithoutState from "./components/CounterWithoutState";
import Counter from "./components/Counter";
import Messenger from "./components/Messenger";
import CounterBatchUpdate from "./components/CounterBatchUpdate";
import StateArray from "./components/StateArray";
import StateObject from "./components/StateObject";
import PassFunction from "./components/PassFunction";
import EventPropagation from "./components/EventPropagation";
import Timer from "./components/Timer";
import SimpleForm from "./components/form/SimpleForm";
import SimpleHookForm from "./components/form/SimpleHookForm";
import HookFromWithMUI from "./components/form/HookFromWithMUI";
import SaleForm from "./components/form/SaleForm";
import SimpleValidation from "./components/form/SimpleValidation";
import YupExample from "./components/form/YupExample";
import CustomTab from "./components/tab/CustomTab";
import CounterConditional from "./components/conditional-rendering/CounterConditional";
import CounterFancy from "./components/conditional-rendering/CounterFancy";
import DifferentComponent from "./components/conditional-rendering/DifferentComponent";
import DifferentRoot from "./components/conditional-rendering/DifferentRoot";
import DifferentPosition from "./components/conditional-rendering/DifferentPosition";
import IndexKeyProblem from "./components/conditional-rendering/IndexKeyProblem";
import KeyWithIndexProblem from "./components/conditional-rendering/KeyWithIndexProblem";
import SearchableProductTableDemo from "./components/SearchableProductTableDemo";
import TaskList from "./components/task-list/TaskList";
import ReducerCounter from "./components/reducer/ReducerCounter";
import TaskListWithReducer from "./components/task-list/TaskListWithReducer";
import WithoutContext from "./components/context/WithoutContext";
import WithContext from "./components/context/WithContext";
import TaskListWithContextReducer from "./components/context/TaskListWithContextReducer";
import WhyRef from "./components/ref/WhyRef";
import WithRef from "./components/ref/WithRef";
import FocusDemo from "./components/ref/FocusDemo";
import DatePicker from "./components/ref/DatePicker";
import ReactProblem from "./components/ref/ReactProblem";

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
      {/*  <TodoList todos={todos}/>*/}
       {/* <UITree/>*/}
       {/* <CounterWithoutState/>*/}

       {/* <Messenger/>*/}
       {/* <CounterBatchUpdate/>*/}
       {/* <StateArray/>*/}
      {/*  <StateObject/>*/}
       {/* <PassFunction/>*/}
       {/* <EventPropagation/>*/}
      {/*  <Timer/>*/}
      {/*  <SimpleForm/>*/}
      {/*  <SimpleHookForm/>*/}
    {/*    <HookFromWithMUI/>
        <SaleForm/>*/}
       {/* <SimpleValidation/>*/}
       {/* <YupExample/>*/}
      {/*  <TodoList/>*/}
       {/* <CustomTab headers={["Tab1","Tab2","Tab3"]}>
            <div>
                <h3>Page 1</h3>
            </div>
            <div>
                <h3>Page 2</h3>
            </div>
            <div>
                <h3>Page 3</h3>
            </div>
        </CustomTab>*/}
       {/* <Counter/>
        <Counter/>*/}
       {/* <CounterConditional/>*/}
       {/* <CounterFancy/>*/}
      {/*  <DifferentComponent/>*/}
       {/* <DifferentRoot/>*/}
        {/*<DifferentPosition/>*/}
       {/* <IndexKeyProblem/>*/}
        {/*<KeyWithIndexProblem/>*/}
       {/* <SearchableProductTableDemo/>*/}
      {/*  <TaskList/>*/}
       {/* <ReducerCounter/>*/}
      {/*  <TaskListWithReducer/>*/}
      {/*  <WithoutContext/>*/}
       {/* <WithContext/>*/}
       {/* <TaskListWithContextReducer/>*/}
      {/*  <WhyRef/>*/}
     {/*   <WithRef/>*/}
     {/*   <FocusDemo/>*/}
       {/* <DatePicker/>*/}
        <ReactProblem/>
    </div>
  );
}
