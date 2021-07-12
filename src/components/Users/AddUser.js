import Card from '../UI/Card';
import classes from './AddUser.module.css'
import Button from '../UI/Button'
import { useState } from 'react';
import ErrorModal from '../UI/ErrorModal';
const AddUser = (props) => {
    const [enteredName, setEnteredName] = useState('');
    const [enteredAge, setEnteredAge] = useState('');
    const [error, setError] = useState()
    const nameChangeHandler = (event) => {
        setEnteredName(event.target.value);
        console.log(enteredName)
    }
    const ageChangeHandler = (event) => {
        setEnteredAge(event.target.value);
        console.log(enteredAge)
    }

    const addUserHandler = (event) => {
        event.preventDefault();
        if (enteredName.trim().length === 0 || enteredAge.trim().length === 0) {
            setError({
                title: "Invalid input", massage: "Please enter a valid name and age!"
            });
            return;
        }
        if (+enteredAge < 1) {
            setError({
                title: "Invalid age", massage: "Enter a valid age!"
            });
            return;
        }
        props.onAddUser(enteredName, enteredAge)
        setEnteredName('');
        setEnteredAge('');
    }

    const clickHandler = (event) => {
        setError(null);
    }
    return (
        <Card className={classes.input}>
            {error && <ErrorModal error={error} onClick={clickHandler}></ErrorModal>}
            <form onSubmit={addUserHandler}>
                <label htmlFor="username">Username</label>
                <input id="username" type="text" onChange={nameChangeHandler} value={enteredName}></input>
                <label htmlFor="age">Age (year)</label>
                <input id="age" type="number" onChange={ageChangeHandler} value={enteredAge}></input>
                <Button type="submit" >Add user</Button>
            </form>
        </Card>
    )
}
export default AddUser;