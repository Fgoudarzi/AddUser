import Card from './Card'
import classes from './ErrorModal.module.css'
import Button from './Button'
const ErrorModal=props=>{

    return(
        <div>
            <div className={classes.backdrop} onClick={props.onClick}>
                <Card className={classes.modal}>
                <header className={classes.header}>
                    <h2>{props.error.title}</h2>
                </header>
                <div className={classes.content}>
                    <p>{props.error.massage}</p>
                    </div>  
                    <footer className={classes.actions}>
                        <Button onClick={props.onClick}>OK</Button>
                    </footer>
                </Card>
            </div>
        </div>
   
    )
}
export default ErrorModal;