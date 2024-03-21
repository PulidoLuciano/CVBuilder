import FileField from "./fields/fileField";
import TextField from "./fields/simpleField";
import TextArea from "./fields/textArea";

export default function PersonalForm({text}){
    return(
        <form className="pl-6">
            <TextField id={"name"} text={text}></TextField>
            <TextField id={"surname"} text={text}></TextField>
            <TextField id={"position"} text={text}></TextField>
            <TextField id={"city"} text={text}></TextField>
            <TextField id={"phone"} text={text}></TextField>
            <TextField id={"email"} text={text}></TextField>
            <FileField id={"photo"} text={text}></FileField>
            <TextArea id={"about"} text={text} max={450}></TextArea>
        </form>
    )
}