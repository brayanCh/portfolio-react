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
            <h2> Contacto </h2>
            
            <EmailInput message="Email" value={email} setter={setEmail}/>

            <Input message="Nombre" value={name} setter={setName}/>

            <Input message="Asunto" value={subject} setter={setSubject}/>

            <InputArea message="Contenido" value={content} setter={setContent}/>

            <ButtonForm>Enviar</ButtonForm>
            
        </form>
    );
};

export default Contact;
