import '../pages/auth/login.css'
const ButtonForms = ({ content,onclick }) => {
    return(
        <button className="button-forms" onClick={onclick}>{content}</button>
    )
}
export default ButtonForms;