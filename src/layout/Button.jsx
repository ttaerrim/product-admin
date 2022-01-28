import styles from "./Button.module.css";

const AddButton = (props) => {
  const tag = props.tag;

  return (
    <button
      className={`${styles.button} ${styles[tag]}`}
      tag={props.tag}
      type={`${props.type}`}
    >
      {props.children}
    </button>
  );
};

export default AddButton;