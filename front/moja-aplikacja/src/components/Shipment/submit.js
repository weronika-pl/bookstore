export const submit = async (values, dispatch, props)  => {
    const ordering = {
        order: props.order,
        first_name: values.firstName,
        last_name: values.lastName,
        city: values.city,
        zip_code: values.zipCode
    }
    console.log(JSON.stringify(ordering))
    return fetch("http://localhost:3001/api/order", {
            method: "post",
            body: JSON.stringify(ordering),
            headers: { 
                "Content-type": "application/json; charset=UTF-8"
            } 
        })
        .then(res => res.json())
        .then(data => console.log(data))
}