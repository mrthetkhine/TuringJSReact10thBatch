import Image from "next/image";
import styles from "./page.module.css";
import HelloWorld from "./components/HelloWorld";
import Profile from "./components/Profile";
import Parent,{Child} from "./components/Parent";

export default function Home() {
    console.log('HelloWorld ',HelloWorld());
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
        <Profile/>
    </div>
  );
}
