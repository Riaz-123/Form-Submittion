document.getElementById("studentForm").addEventListener("submit", async function (e) {
    e.preventDefault();

    const formData = {
        name: this.name.value,
        age: this.age.value,
        email: this.email.value
    };

    try {
        const response = await fetch("https://script.google.com/macros/s/AKfycbwrUHJKE4Ob4xU-kZfCsA3hy_UbyjQ7sG290Og0Lge2FYc41gat7ARC7te8b_PoROzJ/exec", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(formData),
        });

        const result = await response.json();

        if (result.status === "success") {
            alert("✅ Form submitted successfully!");
            this.reset(); // Clear the form after successful submission
        } else {
            alert("❌ Error: " + result.message);
        }
    } catch (error) {
        alert("❌ Submission failed: " + error);
    }
});
