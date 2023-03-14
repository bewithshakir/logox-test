import { ChangeEvent, MouseEvent, useRef } from "react";
import classnames from "classnames";

import { useOutsideClick } from "../../hooks/useOutsideClick";
import { useDropDownStyles } from "./SelectDropDownStyle";
import { keyboardKey } from "@testing-library/user-event";
import { checkDefaultVal } from "../../utils/checkDefaultVal";

export interface IOptionProps {
  name: string;
}
interface IDropDownProps {
  value: string | IOptionProps;
  onChangeFn: (val: string) => void;
  options: IOptionProps[];
  placeholder: string;
  className?: string;
  editable?: boolean;
}
export const SelectDropDown: React.FC<IDropDownProps> = ({
  value,
  onChangeFn,
  options,
  placeholder,
  className,
  editable,
}) => {
  const wrapperRef = useRef(null);
  const inputRef = useRef(null);

  const styles = useDropDownStyles();
  const [isOpen, setIsOpen, isFocus, setFocus] = useOutsideClick(
    wrapperRef,
    inputRef
  );

  const toggleDropDown = () => {
    setIsOpen(!isOpen);
  };
  const handleSelect = (data: string) => {
    onChangeFn(data);
    setIsOpen(false);
    setFocus(true);
  };

  return (
    <div className={styles.dropDownWrapper} ref={wrapperRef}>
      <div
        className={classnames(styles.dropdown, className, {
          [styles.dropDownFocus]: isFocus,
        })}
      >
        {editable ? (
          <input
            type="text"
            className={styles.dropDownLabel}
            placeholder={placeholder}
            aria-haspopup="listbox"
            ref={inputRef}
            value={checkDefaultVal(value)}
            onChange={(e) => {
              onChangeFn(e.target.value);
            }}
            onKeyUp={(e) => {
              if (e.key === "Enter") {
                console.log("enter");
                toggleDropDown();
              }
            }}
          />
        ) : (
          <span className={styles.dropDownLabel} onClick={toggleDropDown}>
            {checkDefaultVal(value) || placeholder}
          </span>
        )}

        <button
          type="button"
          className={styles.dropDwonTrigger}
          onClick={toggleDropDown}
          tabIndex={-1}
        >
          <svg
            height="20"
            width="20"
            viewBox="0 0 20 20"
            aria-hidden="true"
            focusable="false"
            className="css-8mmkcg"
          >
            <path d="M4.516 7.548c0.436-0.446 1.043-0.481 1.576 0l3.908 3.747 3.908-3.747c0.533-0.481 1.141-0.446 1.574 0 0.436 0.445 0.408 1.197 0 1.615-0.406 0.418-4.695 4.502-4.695 4.502-0.217 0.223-0.502 0.335-0.787 0.335s-0.57-0.112-0.789-0.335c0 0-4.287-4.084-4.695-4.502s-0.436-1.17 0-1.615z"></path>
          </svg>
        </button>
      </div>
      {options.length && isOpen && (
        <div className={styles.dropDownItemsWrapper}>
          <ul className={styles.dropDownItems} role="listbox">
            {options.map((option, i) => (
              <li
                key={i}
                className={styles.dropDownItem}
                onClick={() => handleSelect(option.name)}
                role="option"
                tabIndex={0}
              >
                {option.name}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};
