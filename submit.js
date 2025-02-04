export default async function handler(req, res) {
    if (req.method === 'POST') {
        const { name, age, email } = req.body;

        console.log("New Form Submission:", { name, age, email });

        // You can store this data in a database or send an email notification
        return res.status(200).json({ success: true, message: "Form submitted successfully!" });
    } else {
        return res.status(405).json({ error: "Method Not Allowed" });
    }
}
