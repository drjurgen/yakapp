import React from "react";

export default function AddCardForm(props){
    
    return (
        <form>
          <label>
            Add new card {props.message}
            <input type="text" />
            <button>Save</button>
          </label>
        </form>
    )
}
