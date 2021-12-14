import useInput from "../hooks/useInput"
import { EmailInput, Input, InputArea } from "../components/inputForms";
import ButtonForm from "../components/buttonForm";

const Contact = () => {

    const [email, setEmail] = useInput("");
    const [name, setName] = useInput("");
    const [subject, setSubject] = useInput("");
    const [content, setContent] = useInput(``);

    const enviar = e => {
        e.preventDefault();
    }

    return(
        <form className="oval-module flexcenter shadow form-cont" onSubmit={enviar} >
            <h2> Contact </h2>
            
            <EmailInput message="Email" value={email} setter={setEmail}/>

            <Input message="Name" value={name} setter={setName}/>

            <Input message="Subject" value={subject} setter={setSubject}/>

            <InputArea message="Content" value={content} setter={setContent}/>

            <ButtonForm>Send it</ButtonForm>
            
        </form>
    );
};

export default Contact;
