const UsernameInput = ({onChange, password}) => (
    <>
    <label htmlFor="password">Password</label>
    <input type="password" autoComplete="current-password" name="password" id="password" onChange={onChange} value={password}/>
    </>
)

export default UsernameInput;