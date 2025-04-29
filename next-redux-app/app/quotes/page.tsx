import { Quotes } from "../components/quotes/Quotes";
import TodoListWithRedux from "@/app/components/todo/TodoListWithRedux";
import TodoListWithRTKQuery from "@/app/components/todo/TodoListWithRTKQuery";

export default function QuotesPage() {
  return (
    <>
      <h1>Quotes page</h1>
        <TodoListWithRTKQuery/>
     {/* <TodoListWithRedux/></TodoListWithRTKQuery>*/}
      <p>This page is intended to showcase RTK Query.</p>
    {/*  <Quotes />*/}
    </>
  );
}
