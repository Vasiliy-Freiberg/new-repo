async function getRequest() {
    try {
        const response = await fetch('https://cnt-ae16bbf9-9549-433c-983f-d9dfafa39cfa.containerhub.tripleten-services.com/api/v1/warehouses');
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.error(error);
    }
}

getRequest();