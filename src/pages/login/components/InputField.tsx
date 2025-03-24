import { InputFieldProps } from "../TypesLogin";
import styles from "../styles.module.css";

const InputField: React.FC<InputFieldProps> = ({ id, label, type, value, onChange }) => (
    <div className={styles.inputGroup}>
        <input
            type={type}
            id={id}
            value={value}
            onChange={onChange}
            placeholder=""
            required
        />
        <label htmlFor={id}>{label}</label>
    </div>
);

export default InputField;