document.getElementById("studentForm").addEventListener("submit", async function(e) {
    e.preventDefault();
    
    const formData = {
        name: this.name.value,
        age: this.age.value,
        email: this.email.value
    };

    try {
        const response = await fetch("https://script.google.com/macros/s/AKfycbxRkLJygXrU6PnuIz_cm_mYSpEXnCbu71mI8Vb83ivoORsnD-5X9K6-tZuEZ3is9omRmQ/exec", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(formData)
        });

        const result = await response.json();
        alert(result.message);
        this.reset();
    } catch (error) {
        alert("Error submitting form. Please try again!");
    }
});
