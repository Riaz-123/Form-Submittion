document.getElementById("studentForm").addEventListener("submit", async function (e) {
    e.preventDefault();

    const formData = {
        name: this.name.value,
        age: this.age.value,
        email: this.email.value
    };

    try {
        const response = await fetch("https://script.google.com/macros/s/AKfycbwN3SSqIhIBj93HlZ3gNjyicoSwTdEsIAXV5djVpZw538wxMMye_PvDaJXOBMPPv6I/exec", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(formData),
        });

        const result = await response.json();
        alert(result.message);
    } catch (error) {
        alert("Error submitting form: " + error);
    }
});
