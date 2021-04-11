import React from 'react'
import Styles from "./snackbar.module.css";

const SnackBar = ({isActive,message}) => {
    return (
      <div
        className={
          isActive
            ? [Styles.snackbar, Styles.fadeIn].join(" ")
            : [Styles.snackbar, Styles.fadeOut].join(" ")
        }
      >
        {message}
      </div>
    );
}

export default SnackBar
