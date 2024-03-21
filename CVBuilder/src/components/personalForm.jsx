import FileField from "./fields/fileField";
import TextField from "./fields/simpleField";
import TextArea from "./fields/textArea";

export default function PersonalForm({text, information, setInformation}){
    return(
        <form className="pl-6">
            <TextField id={"name"} text={text} information={information} setInformation={setInformation}></TextField>
            <TextField id={"surname"} text={text} information={information} setInformation={setInformation}></TextField>
            <TextField id={"position"} text={text} information={information} setInformation={setInformation}></TextField>
            <TextField id={"city"} text={text} information={information} setInformation={setInformation}></TextField>
            <TextField id={"phone"} text={text} information={information} setInformation={setInformation}></TextField>
            <TextField id={"email"} text={text} information={information} setInformation={setInformation}></TextField>
            <FileField id={"photo"} text={text} information={information} setInformation={setInformation}></FileField>
            <TextArea id={"about"} text={text} information={information} setInformation={setInformation}></TextArea>
        </form>
    )
}