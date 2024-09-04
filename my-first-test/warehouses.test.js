test('the opening hour is earlier than the closing hour', async () => {
    let response;
    try {
        response = await fetch('https://cnt-29767ced-f28e-42a0-8576-742de271595e.containerhub.tripleten-services.com/api/v1/warehouses');
    } catch (error) {
        console.error(error);
    }
    // Create a variable to store the result of comparison
    const result = []
    const data = await response.json();
    // Iterate through each warehouse
    for (let i = 0; i < data.length; i++) {
        const startWorkingHours = data[i]["workingHours"]["start"];
        const endWorkingHours = data[i]["workingHours"]["end"];
        // Store result of comparison into the 'result' variable
        result.push(startWorkingHours < endWorkingHours)
    }
    expect(result).not.toContain(false)
});