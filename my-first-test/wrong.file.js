async function fetchData() {
    try {
        const response = await fetch('https://cnt-32f72519-0266-4e97-9428-4b99a6cef4f3.containerhub.tripleten-services.com/api/v1/kits/7', {
                method: 'POST'
            });
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.error(error);
    }
}

fetchData()