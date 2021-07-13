import ReactDom from 'react-dom'
import Card from './Card'
import classes from './ErrorModal.module.css'
import Button from './Button'

const Backdrop = (props) => {
    return (<div className={classes.backdrop} onClick={props.onClick}></div>)
}
const Overlay = (props) => {
    return (
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
    )
}

const ErrorModal = props => {
    return (
        <>
            {ReactDom.createPortal(<Backdrop onClick={props.onClick} />, document.getElementById("backdrop-root"))}
            {ReactDom.createPortal(<Overlay onClick={props.onClick} error={props.error} />, document.getElementById("overlay-root"))}
        </>

    )
}
export default ErrorModal;