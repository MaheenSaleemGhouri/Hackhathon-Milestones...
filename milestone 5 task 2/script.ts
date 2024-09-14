


document.getElementById('resumeForm')?.addEventListener('submit', function (event) {
  event.preventDefault();
  const profilePictureInput = document.getElementById('profilePicture') as HTMLInputElement;
  const nameElement = document.getElementById('name') as HTMLInputElement;
  const emailElement = document.getElementById('email') as HTMLInputElement;
  const phoneElement = document.getElementById('phone') as HTMLInputElement;
  const educationElement = document.getElementById('education') as HTMLInputElement;
  const experienceElement = document.getElementById('experience') as HTMLInputElement;
  const skillsElement = document.getElementById('skills') as HTMLInputElement;
  const usernameElement = document.getElementById('username') as HTMLInputElement;

  if (profilePictureInput && nameElement && emailElement && phoneElement && educationElement && experienceElement && skillsElement && usernameElement) {
    const profilePictureFile = profilePictureInput.files && profilePictureInput.files[0];
    const profilePictureURL = profilePictureFile ? URL.createObjectURL(profilePictureFile) : '';
    const name = nameElement.value;
    const email = emailElement.value;
    const phone = phoneElement.value;
    const education = educationElement.value;
    const experience = experienceElement.value;
    const skills = skillsElement.value;
    const username = usernameElement.value;

    const resumeHTML = `
      <h2>Resume</h2>
      ${profilePictureURL ? `<img src="${profilePictureURL}" alt="Profile Picture" class="" />` : ''}
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Phone:</strong> ${phone}</p>
      <h3>Education</h3>
      <p>${education}</p>
      <h3>Work Experience</h3>
      <p>${experience}</p>
      <h3>Skills</h3>
      <p>${skills}</p>
    `;


    const resumeOutputElement = document.getElementById("resumeOutput");
    if (resumeOutputElement) {
      resumeOutputElement.insertAdjacentHTML('beforeend', resumeHTML);
      resumeOutputElement.classList.remove("hidden");
      const buttonsContainer = document.createElement("div");
      resumeOutputElement.appendChild(buttonsContainer);
      const downloadButton = document.createElement("button");
      downloadButton.textContent = "Download as PDF";
      downloadButton.addEventListener("click", () => {
        window.print();
      });
      buttonsContainer.appendChild(downloadButton);
      const shareLinkButton = document.createElement("button");
      shareLinkButton.textContent = "Copy Shareable Link";
      shareLinkButton.addEventListener("click", async () => {
        try {
          const shareLink = `(link unavailable)`;
          await navigator.clipboard.writeText(shareLink);
          alert("Shareable link copied to clipboard!");
        } catch (err) {
          console.error("Failed to copy link: ", err);
          alert("Failed to copy to clipboard. Please try again.");
        }
      });
      buttonsContainer.appendChild(shareLinkButton);
    } else {
      console.error("Resume output container not found");
    }
  } else {
    console.error("Form elements are missing");
  }
});
