import classes from "./NotesPreview.module.css";
import sheet from "../../../images/sheet.png";
import Notes from "../Notes/Notes"
import Button from "../../UI/Button/Button";
    
    const NotesPreview = ({notes, playAll, setTemp}) =>{
        const result = []
        for (const note in notes) {
                result.push(<Notes key = {notes[note] + note} type = {notes[note]}/>)
        }



    return ( 
        <div className = {classes.NotesPreview}>
            <div
                className = {classes.sheet}
                style = {{backgroundImage: `url(${sheet})`}}>
                {result}
            </div>
            <div className={classes.extraPreview}>
                <span className = {classes.total}>{notes.length} notes in total</span>
                <div className={classes.tempdiv}>
                    <h4>Tempo</h4>
                    <div className={classes.templabels}>
                        <span>1/4</span>
                        <span>2/4</span>
                        <span>3/4</span>
                        <span>4/4</span>
                    </div>
                    <input type="range" max={4} min={1} onInput={(event)=>setTemp(event.target.value)}></input>
                </div>
                <Button onClick={playAll} modalbutton = 'true' green = 'true'>Play</Button>
                
            </div>
        </div>
     );
    }
 
export default NotesPreview;