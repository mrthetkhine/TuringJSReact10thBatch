function UserDashboard()
{
    return (<div>
        User dashboard
    </div>);
}
function AdminDashboard()
{
    return (<div>
        Admin dashboard
    </div>);
}
export default function Dashboard({admin})
{
   /* if(admin)
    {
        return <AdminDashboard/>;
    }
    else {
        return <UserDashboard/>
    }*/
   /* let Comp ;
    Comp = admin?AdminDashboard: UserDashboard;
    return(<Comp/>);*/
   /* let dashboard = admin?<AdminDashboard/>:<UserDashboard/>;
    console.log('Dashboard ',dashboard);
    return(<div>
        {dashboard}
    </div>);*/
    return(<div>
        {admin?<AdminDashboard/>:<UserDashboard/>}
    </div>)
}