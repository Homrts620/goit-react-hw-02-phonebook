import React from "react";
import css from "./Filter.module.css";
import PropTypes from "prop-types";


const Filter = ({ changeHandler }) => {
    return (
        <div className={css.primary}>
        <div className={css.container}>
            <label className={css.label}>Find contacts by Name</label>
            <div>
            <input
            className={css.input}
            type="text"
            name="filter"
            onChange={ changeHandler }
            /> 
        </div>
        </div>
</div>
    );
}

Filter.propTypes = {
    changeHandler: PropTypes.func.isRequired,
};   

export default Filter;