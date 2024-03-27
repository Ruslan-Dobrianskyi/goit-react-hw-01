import s from "./Button.module.css"

function Button(props) {
  return (
    <button className={s.button}>{props.title}</button>
 
  )
}

export default Button