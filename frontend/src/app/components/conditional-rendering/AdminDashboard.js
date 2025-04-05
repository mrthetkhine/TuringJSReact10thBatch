function Dashboard()
{
    return(<div>
        Dashboard
    </div>);
}
function Insight()
{
    return(<div>
        Insight
    </div>);
}
function Setting()
{
    return(<div>
        Setting
    </div>);
}
let mapping = {};
mapping['dashboard'] = Dashboard;
mapping['insight'] = Insight;
mapping['setting'] = Setting;
export default function AdminDashboard({page})
{
    let Comp = mapping[page];
    console.log('Comp ',Comp);
    return (<div>
        Admin dashboard
        { Comp? <Comp/> :<h2>Default Page</h2>}
    </div>);
}