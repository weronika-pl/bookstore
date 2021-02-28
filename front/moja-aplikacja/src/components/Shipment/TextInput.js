const TextInput = ({title, name}) => (
    <div class="group">
      <input type="text" id={name} required/>
      <span class="highlight" id={'hl-'+ name}></span>
      <span class="bar" id={'bar-' + name}></span>
      <label>{title + '*'}</label>
      <span class="error-msg-hidden" id={'error-' + name}></span>
    </div>
);

export default TextInput