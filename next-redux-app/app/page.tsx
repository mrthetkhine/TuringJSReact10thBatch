import type { Metadata } from "next";
import { Counter } from "./components/counter/Counter";
import Greeting from "@/app/components/Greeting";
import TodoList from "@/app/components/TodoList";
import TodoListDemo from "@/app/components/TodoListDemo";
import OurCounter from "@/app/components/OurCounter";
import CounterWithReducer from "@/app/components/CounterWithReducer";
import CallBackDemo from "@/app/components/CallBackDemo";
import AcceptElementDemo from "@/app/components/AcceptElementDemo";

export default function IndexPage() {
  return (<div>
    {/*<Counter />*/}
   {/* <Greeting message={"Hello"}/>*/}
   {/* <OurCounter/>*/}
   {/* <CounterWithReducer/>*/}
   {/* <CallBackDemo/>*/}
    <AcceptElementDemo/>
  {/* <TodoListDemo/>*/}

  </div>);
}

export const metadata: Metadata = {
  title: "Redux Toolkit",
};
