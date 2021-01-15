function sendEmail() {
  const firstname = document.getElementById('firstname').value
  const lastname = document.getElementById('lastname').value
  const contactno = document.getElementById('contactno').value
  const emailid = document.getElementById('emailid').value
  const details = `
      Name: ${firstname} ${lastname}
      Contact Number: ${contactno}
      Email Id: ${emailid} 
      `
  Email.send({
    Host: 'smtp.gmail.com',
    Username: 'kdbois000@gmail.com',
    Password: 'prasha0209',
    To: 'sprasaanth8@gmail.com',
    From: 'kdbois000@gmail.com',
    Subject: 'Sending Email using javascript',
    Body: details,
  }).then(function (message) {
    alert('mail sent successfully')
  })
}
