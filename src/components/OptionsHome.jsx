import './optionsHome.css'
const OptionsHome = ({ type, onclick, content}) => {
    return (
        <button className="options-home-button" onClick={onclick} type={type}>
        {content}
        </button>
    );
}
export default OptionsHome;