import css from "components/Styles.module.css"
export const ContactElement = ({ id, name, number, onDelete }) => {
  return (
    <li className={css.item}>
      <span className={css.item}>
        {name}:
      </span>
<span className={css.item}>{number}</span>
          <button className={css.btnDel} id={name}  onClick={() => { onDelete(id) }}>
        Delete
      </button>
    </li>
  );
};