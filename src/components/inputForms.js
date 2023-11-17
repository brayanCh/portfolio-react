
const EmailInput = props => <input type="email" 
  placeholder={props.message}
  className="input-field"
  value={props.value} 
  onChange= {props.setter} />; 

const Input = props => <input type="text" 
  placeholder={props.message}
  className="input-field"
  value={props.value} 
  onChange= {props.setter} />; 

const InputArea = props => <input type="text" 
  placeholder={props.message}
  className="input-field textarea"
  value={props.value} 
  onChange= {props.setter} />; 


export { EmailInput, Input, InputArea};
