const UsernameInput = ({onChange, username}) => (
    <>
    <label htmlFor="username">Username</label>
    <input type="text" autoComplete="username" name="username" id="username" onChange={onChange} value={username}/>
    </>
)

export default UsernameInput;