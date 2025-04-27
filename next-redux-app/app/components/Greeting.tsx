import PropTypes from 'prop-types';
function Greeting({message}:{message:string})
{
    return (<h3>
        Greeting {message}
    </h3>);
}
Greeting.propTypes = {
    message:PropTypes.string.isRequired
}

export default Greeting;