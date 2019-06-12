# react-custom-hooks
React custom hooks - useRefInput and useInput

import useRefInput 

```
import { useRefInput } from "./useRefInput";
```
Assign,Set,Get,Clear and Focus 

```
const { bind,resetValue, getValue,setFocus} = useRefInput("");
```

Bind it to Input 

```
<input type="text" {...bind} />
```

On submit of Input we can Get,Clear and Focus

```
alert(getValue());
resetValue();
setFocus();
```

For Multiple input we can rename while Destructure Variables
[Reference] https://wesbos.com/destructuring-renaming/

```
const { bindName,resetName, getName} = useRefInput("");
const { bindMail,resetMail, getMail} = useRefInput("");
```
Binding to inputs

```
 <form onSubmit={handleSubmit}>
 <input type="text" {...bindName} />
 <input type="text" {...bindMail} />
 </form>
```
On submit we can handle like below

```
const handleSubmit = evt => {
    evt.preventDefault();
    alert(`Name ${getname()}`);
    alert(`Mail ${getMail()}`);
    resetname();
    resetMail();
    setFocusName();
  };
```


That's it!!!

