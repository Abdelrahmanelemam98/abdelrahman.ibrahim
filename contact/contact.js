function sendEmail() {
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const subject = document.getElementById("subject").value;
  const message = document.getElementById("message").value;

  emailjs.init("EYPGQUd1KnKY8cwnH");

  emailjs
    .send("service_qdsedpy", "template_8yu3445", {
      from_name: name,
      to_name: "Recipient Name",
      email: email,
      subject: subject,
      message: message,
    })
    .then(
      function (response) {
        console.log("Email sent successfully:", response);

        document.getElementById("name").value = "";
        document.getElementById("email").value = "";
        document.getElementById("subject").value = "";
        document.getElementById("message").value = "";
      },
      function (error) {
        console.error("Email sending failed:", error);
      }
    );
}
