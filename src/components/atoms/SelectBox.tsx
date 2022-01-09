import React from "react";
import {InputLabel, FormControl, MenuItem, Select} from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";

export type SelectBoxProps = {
    label: string
    required: boolean
    value: string | number
    select: any
    options: {
        id: string | number
        name: string
    }[]
}

const useStyles = makeStyles({
    formControl: {
        marginBottom: 16,
        minWidth: 128,
        width: "100%"
    }
})

const TextInput: React.FC<SelectBoxProps> = (props) => {
    const classes = useStyles()
    return(
        <FormControl className={classes.formControl}>
            <InputLabel>{props.label}</InputLabel>
            <Select
                required={props.required} value={props.value}
                onChange={(event) => props.select(event.target.value)}
            >
                {
                    props.options.map((option)=>(
                        <MenuItem key={option.id} value={option.id}>{option.name}</MenuItem>
                    ))
                }
            </Select>
        </FormControl>
    )
}
export default TextInput;