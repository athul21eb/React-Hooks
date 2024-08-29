import PropTypes from 'prop-types'

let Login = (props )=>{
const welcome = <h1>Welcome {props.username||"athul"}</h1>;
const Login = <h2>Please Login to continue</h2>
    return props.isLogin ? welcome:Login;
}


Login.propTypes = {
    isLogin : PropTypes.bool.isRequired,
    username:PropTypes.string.isRequired,
}
Login.defaultProps = {
    isLogin :false,
    // username:'Guest'
}
export default Login