import { IconButton } from "@material-ui/core";
import React from "react";
import AddPhotoAlternateIcon from '@material-ui/icons/AddPhotoAlternate';
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles(
	{
		icon: {
			height: 48,
			width: 48
		}
	}
)

const ImageArea =(props:any)=>{
	const classes = useStyles()
	return(
		<div>
			<div>
				<span>ゲームを登録する</span>
				<IconButton className={classes.icon}>
					<label htmlFor="">
						<AddPhotoAlternateIcon/>
						<input className="display-none" type="file"/>
					</label>
				</IconButton>
			</div>
		</div>
	)

}

export default ImageArea
