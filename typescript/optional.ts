function display(message?:string)//message : string|undefined
{
    if( typeof message === 'string')
    {
        console.log('Display ',message.toUpperCase());
    }
    else
    {
        console.log('Display ',message);
    }
    
}
display();
display('Hello');